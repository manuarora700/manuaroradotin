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
