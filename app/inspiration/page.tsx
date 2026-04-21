import type { Metadata } from "next";
import Container from "@/components/container";
import { Box } from "@/components/box";
import { PosthogIcon } from "@/components/icons/general";
import { LinkPreview } from "@/components/link-preview";
import { DottedSeparator } from "@/components/separator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inspiration - Manu Arora",
  description:
    "People, products, and websites that inspire my design engineering taste.",
  alternates: {
    canonical: "/inspiration",
  },
};

export default async function InspirationPage() {
  const items = [
    {
      title: "Klack",
      description: "Neat product and website",
      href: "https://tryklack.com",
      src: (
        <svg
          className="size-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36 36"
          aria-hidden={true}
        >
          <path
            className="stroke-white"
            d="M11.5 26.91h3.969a.5.5 0 0 0 .5-.5v-3.765a.5.5 0 0 1 .098-.297l1.047-1.418a.2.2 0 0 1 .333.017l3.392 5.718a.5.5 0 0 0 .43.245h4.595a.5.5 0 0 0 .425-.763l-5.173-8.358a.5.5 0 0 1 .024-.562l4.772-6.429A.5.5 0 0 0 25.51 10h-3.967a.5.5 0 0 0-.404.206l-5.049 6.928a.092.092 0 0 1-.074.038.047.047 0 0 1-.047-.047V10.5a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0-.5.5v15.91a.5.5 0 0 0 .5.5Z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Oğuz",
      description: "Designer with god level skills",
      href: "https://x.com/oguzyagizkara",
      src: <img src="/inspiration/oguz.jpg" alt="oguz" className="size-full" />,
    },
    {
      title: "Interface Craft",
      description: "Amazing resource to learn motion",
      href: "https://www.interfacecraft.dev/",
      src: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-hidden rounded-md"
        >
          <rect width="16" height="8" fill="#010101"></rect>
          <rect
            width="16"
            height="8"
            transform="translate(16 24)"
            fill="#1D57F6"
          ></rect>
          <rect
            width="16"
            height="8"
            transform="translate(0 8)"
            fill="#FD73ED"
          ></rect>
          <rect
            width="16"
            height="8"
            transform="translate(16 16)"
            fill="#00A1F1"
          ></rect>
          <rect
            width="16"
            height="8"
            transform="translate(0 16)"
            fill="#E54F10"
          ></rect>
          <rect
            width="16"
            height="8"
            transform="translate(16 8)"
            fill="#53F399"
          ></rect>
          <rect
            width="16"
            height="8"
            transform="translate(0 24)"
            fill="#FFD102"
          ></rect>
          <rect
            width="16"
            height="8"
            transform="translate(16)"
            fill="#F6EBD9"
          ></rect>
        </svg>
      ),
    },
    {
      title: "Shadcn UI",
      description: "A library that changed my life",
      href: "https://ui.shadcn.com",
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="size-4"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="208"
            y1="128"
            x2="128"
            y2="208"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          ></line>
          <line
            x1="192"
            y1="40"
            x2="40"
            y2="192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          ></line>
        </svg>
      ),
    },
    {
      title: "Tailwind Plus",
      description: "Where it all started",
      href: "https://tailwindcss.com/plus",
      src: (
        <svg
          viewBox="0 0 34 21"
          fill="none"
          className="size-4 text-black dark:text-white"
        >
          <path
            className="fill-sky-400"
            d="M17.183 0C12.6 0 9.737 2.291 8.59 6.873c1.719-2.29 3.723-3.15 6.014-2.577 1.307.326 2.242 1.274 3.275 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.291 8.591-6.872-1.718 2.29-3.723 3.15-6.013 2.576-1.308-.326-2.243-1.274-3.276-2.324C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182c1.718-2.291 3.723-3.15 6.013-2.577 1.308.326 2.243 1.274 3.276 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.29 8.59-6.872-1.718 2.29-3.722 3.15-6.013 2.577-1.307-.327-2.242-1.276-3.276-2.325-1.684-1.71-3.634-3.689-7.893-3.689Z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Posthog",
      description: "Analytics tool that has made my life so much easier.",
      href: "https://posthog.com",
      src: <PosthogIcon className="size-4" />,
    },
    {
      title: "Derek Briggs",
      description: "Designer I look up to",
      href: "https://x.com/PixelJanitor",
      src: (
        <img src="/inspiration/derek.jpg" alt="Derek" className="size-full" />
      ),
    },
    {
      title: "Fireship",
      description: "All time favourite YouTuber",
      href: "https://youtube.com/@fireship",
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          viewBox="0 0 300 301"
          className="size-4"
        >
          <path
            d="M115.44.64c-.53-.45-1.74-.43-2.75-.64-.53.78-1.21,1.4-1.38,2.08-.4,1.72-.69,3.47-.85,5.23-3.9,39.25-18.51,75.68-46.94,109.02-15.77,18.49-31.47,37.39-43.07,57.48-28.8,49.84-3.17,100.74,59.65,122.99,2.07.73,4.39,1.06,9.57,2.27-21.31-19.27-32.28-38.85-28.58-62.02,3.52-22.1,14.7-41.82,31.64-59.8,1.25,2.5,1.32,4.68,1.24,6.86-.83,19.72,5.7,37.12,25.86,50.86,9.32,6.35,17.69,13.54,26.12,20.61,8.56,7.2,11.04,15.85,8.61,25.28-1.17,4.58-2.88,9.09-4.73,14.74,14.35-1.42,27.62-3.4,36.53-11.33,8.52-7.57,14.82-16.55,23.91-27.01.64,8.85,1.88,15.74,1.4,22.56-.51,7.09-2.7,14.12-4.16,21.18,43.61-6.57,82.08-49.36,83.77-93.13,1.24-31.94-25.94-78.72-48.76-83.26,1.28,3,2.47,5.84,3.75,8.64,7.92,17.44,10.24,35.12,5.23,53.37-5.01,18.15-30.43,38.52-52.85,41.09.76-1.82,1.08-3.52,2.12-4.91,24.15-32.54,24.45-66.6,10.72-101.36C193.12,74.99,157.88,36.14,115.44.64Z"
            fill="var(--color-orange-500)"
          ></path>
        </svg>
      ),
    },
    {
      title: "Rauno",
      description: "God level design engineer",
      href: "https://rauno.me/",
      src: (
        <img src="/inspiration/rauno.jpg" alt="rauno" className="size-full" />
      ),
    },
    {
      title: "Naval",
      description: "Entrepreneur, philosopher and investor I look up to",
      href: "https://nav.al",
      src: (
        <img src="/inspiration/naval.jpg" alt="Naval" className="size-full" />
      ),
    },
    {
      title: "Autosend",
      description: "Landing page that I love, software that I admire.",
      href: "https://autosend.com",
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="139"
          height="28"
          fill="none"
          viewBox="0 0 24 24"
          className="size-4"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m14 13-2-3-2 3"
          ></path>
          <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.5 5.5C14.5 8 12 10 12 10S9.5 8 9.5 5.5 10.62 2 12 2s2.5 1 2.5 3.5ZM18.5 15.5C16 15.5 14 13 14 13s2-2.5 4.5-2.5S22 11.62 22 13s-1 2.5-3.5 2.5ZM5.5 15.5C8 15.5 10 13 10 13s-2-2.5-4.5-2.5S2 11.62 2 13s1 2.5 3.5 2.5Z"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 22s-3-6-6-9"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 22s3-6 6-9"
          ></path>
        </svg>
      ),
    },
  ];
  return (
    <>
      <Container className="min-h-screen">
        <p className="text-foreground pt-4 text-base">
          A list of all the people that I look up to, websites that I admire,
          tools that I use and everything else that follows.
        </p>
        <p className="text-foreground pt-4 text-base">
          I will keep on updating this list as I find more inspiration.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          {items.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              className="group flex items-center gap-2"
            >
              <div className="mr-2 flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-linear-to-b from-neutral-50 to-neutral-100 shadow-sm ring-1 shadow-black/10 ring-black/10 md:size-8">
                {item.src}
              </div>
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                <p className="text-foreground font-medium">{item.title}</p>
                <div className="hidden size-1 rounded-full bg-neutral-200 md:block"></div>
                <p className="text-foreground/70 group-hover:text-primary text-balance transition-transform duration-300 group-hover:translate-x-1">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </>
  );
}
