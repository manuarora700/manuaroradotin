import type { ReactNode } from "react";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../globals.css?url";
import { cn } from "@/lib/utils";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import Container from "@/components/container";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Settings } from "@/components/settings";

const visitorsScript = String.raw`(function(w,d){var h=null;try{var l=w.localStorage,p=JSON.parse(l.getItem("lv:vp:"+"lv_pub_e6jcz82k22etz57z9po3at9r")||"[]"),q=(location.pathname||"/").replace(/\/{2,}/g,"/").replace(/(.)\/+$/,"$1");if(!l.getItem("lv:seen:"+"lv_pub_e6jcz82k22etz57z9po3at9r")||p.indexOf(q)>=0){h=d.createElement("style");h.textContent="html{opacity:0!important}";d.head.appendChild(h)}l.setItem("lv:seen:"+"lv_pub_e6jcz82k22etz57z9po3at9r","1")}catch(e){}w.__lvReveal=function(){if(h&&h.parentNode)h.parentNode.removeChild(h);h=null};setTimeout(function(){if(h)w.__lvLate=1;w.__lvReveal()},1000);var s=d.createElement("script");s.src="https://lettervisit.com/v.js?k=lv_pub_e6jcz82k22etz57z9po3at9r";s.async=true;s.setAttribute("data-key","lv_pub_e6jcz82k22etz57z9po3at9r");s.onerror=w.__lvReveal;d.head.appendChild(s)})(window,document)`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "color-scheme", content: "light" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
    ],
    scripts: [
      { children: visitorsScript },
      {
        src: "https://analytics.aceternity.com/js/script.js",
        "data-domain": "manuarora.in",
        defer: true,
      },
    ],
  }),
  component: Outlet,
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("font-sans antialiased")}
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body className={cn("font-display bg-theme-bg")}>
        <Settings />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <Container className="min-h-[50vh]">
      <p className="text-primary pt-4 text-base font-medium">404</p>
      <p className="text-foreground pt-2 text-base">
        This page could not be found.
      </p>
    </Container>
  );
}
