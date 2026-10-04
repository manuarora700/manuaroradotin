import React from "react";
import { Box } from "./box";
import Link from "next/link";
import { IconBrandYoutube } from "@tabler/icons-react";
import { Subheading } from "./subheading";

const LogoSVGNew = ({ className }: { className?: string }) => {
  return (
    <svg
      width="208"
      height="160"
      viewBox="48 48 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M146 48H106.136L48 208H87.8644L116.932 128C116.932 128 122 114.5 124.4 108L131.466 88L146 48Z"
        fill="currentColor"
      />
      <path d="M110 48H149.864L168.032 98H127.84L110 48Z" fill="currentColor" />
      <path
        d="M139.587 113.833L171.458 208H208L172.807 113.833H139.587Z"
        fill="currentColor"
      />
      <path d="M173 114L140.8 208H104L139.545 114H173Z" fill="currentColor" />
    </svg>
  );
};

const VibrantLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="currentColor"
        opacity=".28"
        d="M10.364 2.84c-1.354-.338-2.437-.61-3.302-.743-.873-.135-1.68-.16-2.416.129a4.27 4.27 0 0 0-2.42 2.42c-.289.736-.264 1.543-.13 2.416.135.865.406 1.948.744 3.302l1.354 5.417c.293 1.172.52 2.08.716 2.753.186.643.379 1.21.646 1.602 1.62 2.375 5.077 2.503 6.869.255.295-.37.53-.922.763-1.548.245-.658.539-1.546.918-2.693l.007-.022c.147-.444.194-.58.25-.698a2.28 2.28 0 0 1 1.067-1.066c.117-.057.255-.104.698-.25l.022-.008c1.147-.38 2.035-.673 2.693-.918.626-.233 1.178-.468 1.548-.763 2.248-1.792 2.12-5.25-.255-6.87-.392-.266-.96-.46-1.602-.645-.673-.196-1.581-.423-2.753-.716z"
      />
      <path
        d="M10.172 3.823c-2.793-.698-4.189-1.047-5.162-.666A3.27 3.27 0 0 0 3.157 5.01c-.381.973-.032 2.37.666 5.162"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

const workItems = [
  {
    href: "https://aceternity.com",
    title: "Aceternity",
    description: "Design + Dev studio for startups and enterprises.",
    icon: (
      <LogoSVGNew className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName: "",
  },
  {
    href: "https://ui.aceternity.com",
    title: "Aceternity UI",
    description: "Component library for modern websites.",
    icon: (
      <LogoSVGNew className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-orange-400 to-orange-600 ring-offset-orange-500",
  },
  {
    href: "https://ai.aceternity.com",
    title: "Acebuilder",
    description: "AI landing page builder with exportable code.",
    icon: (
      <img
        src="/acebuilder-light.png"
        alt=""
        className="size-4 invert drop-shadow-xl drop-shadow-black/40"
      />
    ),
    boxClassName:
      "bg-linear-to-b from-emerald-400 to-emerald-600 ring-offset-emerald-500",
  },
  {
    href: "https://vibrant.design",
    title: "Vibrant",
    description: "Curated website, section and UI design inspiration.",
    icon: (
      <VibrantLogo className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-[#5B92FF] to-[#3074FE] ring-offset-[#3074FE]",
  },
  {
    href: "https://youtube.com/@manuarora",
    title: "YouTube",
    description: "I talk about design engineering and SaaS.",
    icon: (
      <IconBrandYoutube className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName: "bg-linear-to-b from-red-400 to-red-600 ring-offset-red-500",
  },
];

export const Work = () => {
  return (
    <div>
      <Subheading>Things I do</Subheading>
      <div className="mt-4 flex flex-col gap-6 md:gap-4">
        {workItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target="_blank"
            className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-2"
          >
            <Box className={`mr-4 ${item.boxClassName}`}>{item.icon}</Box>
            <p className="text-foreground font-medium">{item.title}</p>
            <div className="hidden size-1 rounded-full bg-neutral-200 md:block"></div>
            <p className="text-foreground/70">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
