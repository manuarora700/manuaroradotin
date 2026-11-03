import { definePlugin } from "nitro";

// Any Node server. Letter Visitors server snippet v2: install once; what it forwards is decided by
// Letter and updates on its own. Call forwardAgentVisit(req, res) once per request after it is
// answered, and never await it. ip must be the visitor's address: behind a proxy, read it the way
// your framework trusts it (Express: app.set("trust proxy", 1)). On serverless (Vercel, Netlify,
// Lambda), keep the returned promise alive with the platform's waitUntil.
const LETTER_KEY = "lv_pub_e6jcz82k22etz57z9po3at9r";
const LETTER_ENDPOINT = "https://lettervisit.com/api/v1/agent-visit";
const LETTER_RULES_URL = "https://app.letterstory.com/api/visitors/snippet-rules?kind=generic&k=lv_pub_e6jcz82k22etz57z9po3at9r";
const LETTER_DROP = new Set(["cookie","set-cookie","authorization","proxy-authorization","x-api-key","x-auth-token","x-csrf-token","x-vercel-oidc-token","cf-access-jwt-assertion"]);
const LETTER_RESPONSE = ["content-type","content-length","cf-cache-status","x-vercel-cache","age","x-robots-tag"];
// Which requests to forward comes from Letter and refreshes on its own; these are the defaults
// until the first refresh, and if it ever fails.
let letterRules = letterCompile({"v":2,"ttl":600,"all":true,"ua":"bot|crawl|spider|agent|fetch|chatgpt|claude|perplexity|anthropic|openai|gemini|google|mistral|cohere|externalhit|-user\\b|letter-visitors-sitecheck|^curl/|^wget/|python-requests|python-urllib|python-httpx|aiohttp|^node\\b|undici|axios/|got \\(|^go-http-client|okhttp|^java/|libwww-perl|^ruby\\b|guzzlehttp|^php\\b|scrapy|^httpie","path":"(^|/)(llms(-full)?\\.txt|agents\\.md)$|\\.mdx?$","referer":"chatgpt|openai|claude|perplexity|gemini|copilot","query":"utm_source=(chatgpt|openai|claude|perplexity|gemini|copilot)","headers":["signature-agent","signature"],"skip":"\\.(png|jpe?g|gif|webp|avif|svg|ico|css|js|mjs|map|woff2?|ttf|otf|eot|mp4|webm|mp3)$|^/_next/"});
let letterFetchedAt = 0;

function letterCompile(r) {
	const re = (s) => new RegExp(s, "i");
	return { ...r, re: { ua: re(r.ua), path: re(r.path), referer: re(r.referer), query: re(r.query), skip: re(r.skip) } };
}

function letterRefresh() {
	if (Date.now() - letterFetchedAt < letterRules.ttl * 1000) return null;
	letterFetchedAt = Date.now();
	return fetch(LETTER_RULES_URL)
		.then((r) => r.json())
		.then((r) => {
			if (r && r.v === 2) letterRules = letterCompile(r);
		})
		.catch(() => {});
}

function letterWanted(pathname, search, get, has) {
	const r = letterRules;
	if (r.re.skip.test(pathname)) return false;
	return (
		r.all ||
		r.re.ua.test(get("user-agent") || "") ||
		r.headers.some((n) => has(n)) ||
		r.re.path.test(pathname) ||
		r.re.referer.test(get("referer") || "") ||
		r.re.query.test(search)
	);
}

function letterQuery(params) {
	const out = {};
	for (const [name, value] of params) if (/^(utm_[a-z]+|ref)$/i.test(name)) out[name] = value;
	return out;
}

function forwardAgentVisit(req, res) {
	letterRefresh();
	const url = new URL(req.url, "http://" + (req.headers.host || "localhost"));
	const get = (n) => req.headers[n] ?? null;
	if (!letterWanted(url.pathname, url.search, get, (n) => req.headers[n] !== undefined)) return Promise.resolve();
	const headers = {};
	for (const [name, value] of Object.entries(req.headers))
		if (!LETTER_DROP.has(name) && value !== undefined) headers[name] = String(value);
	const response = {};
	if (res) for (const name of LETTER_RESPONSE) if (res.getHeader?.(name) !== undefined) response[name] = String(res.getHeader(name));
	return fetch(LETTER_ENDPOINT, {
		method: "POST",
		keepalive: true,
		body: JSON.stringify({
			k: LETTER_KEY,
			v: 2,
			kind: "generic",
			scope: letterRules.all ? "all" : "agents",
			method: req.method,
			url: url.origin + url.pathname,
			query: letterQuery(url.searchParams),
			ip: req.ip ?? null,
			headers,
			response: res ? { status: res.statusCode ?? null, headers: response } : null,
		}),
	}).catch(() => {});
}

// Nitro gives each request as a web Request and Response; hand them to the snippet in the shape
// it reads, once the response is ready, without waiting on it.
export default definePlugin((nitroApp) => {
  nitroApp.hooks.hook("response", (response, event) => {
    const request = event.req;
    const req = {
      url: request.url,
      method: request.method,
      headers: Object.fromEntries(request.headers),
      ip:
        request.ip ??
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
    };
    const res = {
      statusCode: response.status,
      getHeader: (name: string) => response.headers.get(name) ?? undefined,
    };
    const visit = forwardAgentVisit(req, res);
    request.waitUntil?.(visit);
  });
});
