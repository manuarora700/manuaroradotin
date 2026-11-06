import React from "react";
import {
  IconArrowUpRight,
  IconBrandX,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import { Subheading } from "./subheading";
import { Box } from "./box";
import { LogoSVGNew } from "./work";
import { cn } from "@/lib/utils";
import { formatCompact, formatUtcDate } from "@/lib/format";
import type { YouTubeData } from "@/lib/youtube";
import {
  ACETERNITY_UI_MONTHLY,
  SOCIALS,
  STATS_UPDATED,
  X_STATS,
  YOUTUBE_STATS,
  YOUTUBE_URL,
} from "@/lib/site";

type Tile = {
  title: string;
  handle: string;
  href: string;
  action: string;
  boxClassName: string;
  icon: React.ReactNode;
  primary: { value: string; label: string };
  secondary: { value: string; label: string }[];
  live?: boolean;
};

const iconClassName = "size-4 text-white drop-shadow-xl drop-shadow-black/40";

export const Reach = ({ youtube }: { youtube: YouTubeData | null }) => {
  const live = youtube?.stats ?? null;

  const tiles: Tile[] = [
    {
      title: "YouTube",
      handle: SOCIALS.youtube.handle,
      href: YOUTUBE_URL,
      action: "Visit channel",
      boxClassName:
        "bg-linear-to-b from-red-400 to-red-600 ring-offset-red-500",
      icon: <IconBrandYoutubeFilled className={iconClassName} />,
      primary: {
        value: formatCompact(live?.subscribers ?? YOUTUBE_STATS.subscribers),
        label: "subscribers",
      },
      secondary: live
        ? [
            { value: formatCompact(live.views), label: "views" },
            { value: live.videos.toLocaleString("en-US"), label: "videos" },
          ]
        : [],
      live: Boolean(live),
    },
    {
      title: "X",
      handle: SOCIALS.x.handle,
      href: SOCIALS.x.href,
      action: "Visit profile",
      boxClassName:
        "bg-linear-to-b from-neutral-600 to-neutral-900 ring-offset-neutral-800",
      icon: <IconBrandX className={iconClassName} />,
      primary: { value: formatCompact(X_STATS.followers), label: "followers" },
      secondary: [
        {
          value: formatCompact(X_STATS.monthlyImpressions),
          label: "impressions / mo",
        },
      ],
    },
    {
      title: "Aceternity UI",
      handle: "UI library",
      href: "https://ui.aceternity.com",
      action: "Visit site",
      boxClassName:
        "bg-linear-to-b from-orange-400 to-orange-600 ring-offset-orange-500",
      icon: <LogoSVGNew className={iconClassName} />,
      primary: {
        value: formatCompact(ACETERNITY_UI_MONTHLY.pageViews),
        label: "page views / mo",
      },
      secondary: [
        {
          value: formatCompact(ACETERNITY_UI_MONTHLY.uniqueVisitors),
          label: "visitors / mo",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <Subheading>Reach</Subheading>
        <p className="text-foreground/50 font-mono text-xs">
          Updated{" "}
          {formatUtcDate(live && youtube ? youtube.fetchedAt : STATS_UPDATED)}
        </p>
      </div>
      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {tiles.map((tile) => (
          <li key={tile.title}>
            <a
              href={tile.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${tile.title}: ${tile.primary.value} ${tile.primary.label}. ${tile.action}`}
              className="group flex h-full flex-col rounded-xl bg-white p-4 shadow-[0_0_0_1px_rgb(0_0_0/0.06),0_1px_2px_rgb(0_0_0/0.04),0_4px_12px_-4px_rgb(0_0_0/0.08)] transition-[box-shadow,translate] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgb(0_0_0/0.08),0_2px_4px_rgb(0_0_0/0.05),0_12px_24px_-8px_rgb(0_0_0/0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary)"
            >
              <div className="flex items-center gap-2.5">
                <Box className={cn("shrink-0", tile.boxClassName)}>
                  {tile.icon}
                </Box>
                <div className="flex min-w-0 flex-col">
                  <span className="text-primary text-sm leading-tight font-medium">
                    {tile.title}
                  </span>
                  <span className="text-foreground/50 truncate font-mono text-[11px] leading-tight">
                    {tile.handle}
                  </span>
                </div>
                <IconArrowUpRight
                  aria-hidden
                  className="text-foreground/40 group-hover:text-primary ml-auto size-4 shrink-0 self-start transition-[color,translate] duration-200 ease-out group-hover:translate-x-px group-hover:-translate-y-px"
                />
              </div>

              <div className="mt-4 mb-3 flex items-baseline gap-2 sm:mt-6 sm:mb-4 sm:flex-col sm:gap-0.5">
                <span className="text-primary text-3xl font-medium tracking-tight tabular-nums">
                  {tile.primary.value}
                </span>
                <span className="text-foreground/60 text-sm">
                  {tile.primary.label}
                </span>
              </div>

              <div className="text-foreground/60 mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-dashed border-black/10 pt-3 text-xs">
                {tile.secondary.map((metric) => (
                  <span key={metric.label} className="whitespace-nowrap">
                    <span className="text-primary font-medium tabular-nums">
                      {metric.value}
                    </span>{" "}
                    {metric.label}
                  </span>
                ))}
                {tile.live ? (
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <span
                      aria-hidden
                      className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px] shadow-emerald-500/20"
                    />
                    Live
                  </span>
                ) : null}
                {!tile.secondary.length && !tile.live ? (
                  <span className="group-hover:text-primary transition-colors duration-150">
                    {tile.action}
                  </span>
                ) : null}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
