import React, { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  IconArrowUpRight,
  IconBrandYoutube,
  IconChevronDown,
} from "@tabler/icons-react";
import { Box } from "./box";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";

export const LogoSVGNew = ({ className }: { className?: string }) => {
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

type WorkItem = {
  href: string;
  domain: string;
  title: string;
  description: string;
  details: string;
  banner?: string;
  icon: React.ReactNode;
  boxClassName: string;
};

const iconClassName = "size-4 text-white drop-shadow-xl drop-shadow-black/40";

const workItems: WorkItem[] = [
  {
    href: "https://aceternity.com",
    domain: "aceternity.com",
    title: "Aceternity",
    description: "Design + Dev studio for startups and enterprises.",
    details:
      "A website development company that builds exceptionally good-looking, high-performance custom websites for startups and enterprises.",
    banner: "/static/images/projects/aceternity.webp",
    icon: <LogoSVGNew className={iconClassName} />,
    boxClassName: "",
  },
  {
    href: "https://ui.aceternity.com",
    domain: "ui.aceternity.com",
    title: "Aceternity UI",
    description: "Component library for modern websites.",
    details:
      "A React component library with 200+ copy-paste components, blocks, and landing page templates built with Tailwind CSS and Motion.",
    banner: "/static/images/projects/aceternity-ui.webp",
    icon: <LogoSVGNew className={iconClassName} />,
    boxClassName:
      "bg-linear-to-b from-orange-400 to-orange-600 ring-offset-orange-500",
  },
  {
    href: "https://ai.aceternity.com",
    domain: "acebuilder.ai",
    title: "Acebuilder",
    description: "AI landing page builder with exportable code.",
    details:
      "Describe your page, generate it with production-grade React and Tailwind components from Aceternity UI, and download the full source code. No lock-in.",
    banner: "/static/images/projects/acebuilder.webp",
    icon: (
      <img
        src="/acebuilder-light.png"
        alt=""
        className="size-4 drop-shadow-xl drop-shadow-black/40 invert"
      />
    ),
    boxClassName:
      "bg-linear-to-b from-emerald-400 to-emerald-600 ring-offset-emerald-500",
  },
  {
    href: "https://vibrant.design",
    domain: "vibrant.design",
    title: "Vibrant",
    description: "Curated website, section and UI design inspiration.",
    details:
      "Curated website, section, launch-video and UI design inspiration from the best of the internet.",
    banner: "/static/images/projects/vibrant.webp",
    icon: <VibrantLogo className={iconClassName} />,
    boxClassName:
      "bg-linear-to-b from-[#5B92FF] to-[#3074FE] ring-offset-[#3074FE]",
  },
  {
    href: "https://youtube.com/@manuarora",
    domain: "youtube.com/@manuarora",
    title: "YouTube",
    description: "I talk about design engineering and SaaS.",
    details:
      "I'm a design engineer, solo founder of Aceternity UI, and the guy who somehow turned CSS animations into a business.",
    icon: <IconBrandYoutube className={iconClassName} />,
    boxClassName: "bg-linear-to-b from-red-400 to-red-600 ring-offset-red-500",
  },
];

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const Work = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section>
      <Subheading>Things I do</Subheading>
      <ul className="mt-4 flex flex-col gap-2 md:gap-1">
        {workItems.map((item) => (
          <WorkRow
            key={item.href}
            item={item}
            open={open === item.href}
            onToggle={() =>
              setOpen((current) => (current === item.href ? null : item.href))
            }
          />
        ))}
      </ul>
    </section>
  );
};

const WorkRow = ({
  item,
  open,
  onToggle,
}: {
  item: WorkItem;
  open: boolean;
  onToggle: () => void;
}) => {
  const id = useId();
  const reduceMotion = useReducedMotion();

  return (
    <li>
      <button
        type="button"
        id={`${id}-trigger`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className="group -mx-2 flex w-[calc(100%+1rem)] cursor-pointer items-center gap-4 rounded-lg px-2 py-2 text-left transition-colors duration-150 hover:bg-black/[0.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary) dark:hover:bg-white/[0.04]"
      >
        <Box className={cn("shrink-0", item.boxClassName)}>{item.icon}</Box>
        <span className="flex min-w-0 flex-1 flex-col items-start gap-0.5 md:flex-row md:items-center md:gap-2">
          <span className="text-foreground group-hover:text-primary shrink-0 font-medium transition-colors duration-150">
            {item.title}
          </span>
          <span
            aria-hidden
            className="hidden size-1 shrink-0 rounded-full bg-neutral-200 md:block"
          />
          <span className="text-foreground/70 text-pretty">
            {item.description}
          </span>
        </span>
        <IconChevronDown
          aria-hidden
          className={cn(
            "text-foreground/40 group-hover:text-primary size-4 shrink-0 transition-[rotate,color] duration-200 ease-out",
            open && "text-primary rotate-180",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { type: "spring", duration: 0.45, bounce: 0 },
                opacity: { duration: 0.2, ease: EASE_OUT },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.22, ease: EASE_OUT },
            }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-3 pb-5 md:pl-12">
              {item.banner ? (
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          clipPath: "inset(0% 0% 100% 0% round 12px)",
                          scale: 1.04,
                          filter: "blur(6px)",
                        }
                  }
                  animate={{
                    clipPath: "inset(0% 0% 0% 0% round 12px)",
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.05 }}
                  className="relative overflow-hidden rounded-xl shadow-md shadow-black/10"
                >
                  <img
                    src={item.banner}
                    alt={`${item.title} website preview`}
                    width={1200}
                    height={630}
                    decoding="async"
                    className="aspect-[1200/630] w-full object-cover"
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-xl outline outline-1 -outline-offset-1 outline-black/10" />
                </motion.div>
              ) : null}
              <p className="text-foreground/80 max-w-prose text-sm leading-relaxed text-pretty">
                {item.details}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group/visit inline-flex w-fit items-center gap-1 rounded-md bg-linear-to-b from-blue-400 to-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm ring-1 shadow-black/15 ring-white/25 transition-transform duration-150 ease-out ring-inset active:scale-[0.96]",
                  item.boxClassName,
                )}
              >
                Visit {item.domain}
                <IconArrowUpRight
                  aria-hidden
                  className="size-3.5 transition-transform duration-200 ease-out group-hover/visit:translate-x-px group-hover/visit:-translate-y-px"
                />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
};
