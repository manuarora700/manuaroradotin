import React from "react";
import { Subheading } from "./subheading";
import {
  CursorIcon,
  FireworksIcon,
  HostingerIcon,
  NeonIcon,
  PosthogIcon,
  ReplitIcon,
  StrapiIcon,
} from "./icons/general";
import { Box } from "./box";

export const Companies = () => {
  const companies = [
    {
      title: "Cursor",
      description: "AI first code editor and development environment.",
      skeleton: (
        <CursorIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-neutral-400 to-neutral-600 ring-offset-neutral-500",
    },
    {
      title: "Replit",
      description: "AI-powered platform to build and ship software.",
      skeleton: (
        <ReplitIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-orange-400 to-orange-600 ring-offset-orange-500",
    },
    {
      title: "Neon",
      description: "Fast Postgres Databases for Teams and Agents.",
      skeleton: (
        <NeonIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-green-400 to-green-600 ring-offset-green-500",
    },
    {
      title: "Strapi",
      description: "Open-Source headless CMS for apps.",
      skeleton: (
        <StrapiIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-violet-400 to-violet-600 ring-offset-violet-500",
    },
    {
      title: "Hostinger",
      description: "Web hosting and domains platform.",
      skeleton: (
        <HostingerIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-purple-400 to-purple-600 ring-offset-purple-500",
    },
    {
      title: "Posthog",
      description: "Open-Source product analytics platform.",
      skeleton: (
        <PosthogIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-yellow-400 to-yellow-600 ring-offset-yellow-500",
    },
    {
      title: "Fireworks",
      description: "Open-source AI models at blazing speed.",
      skeleton: (
        <FireworksIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-indigo-400 to-indigo-600 ring-offset-indigo-500",
    },
  ];
  return (
    <section>
      <Subheading>Companies I've worked with</Subheading>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
        {companies.map((company) => (
          <div key={company.title} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Box className={company.boxClassName}>{company.skeleton}</Box>
              <p className="text-foreground text-sm font-medium">
                {company.title}
              </p>
            </div>
            <p className="text-foreground/70 text-sm text-pretty">
              {company.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
