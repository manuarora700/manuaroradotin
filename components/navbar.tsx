"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { GENERAL_VARIANT, SPRING_CONFIG } from "@/lib/motion-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DottedUnderline } from "./dotted-underline";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const links = [
  { title: "Home", href: "/" },
  { title: "Inspiration", href: "/inspiration" },
  { title: "Blog", href: "/blog" },
  { title: "Sponsor", href: "/sponsor" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-2xl flex-col items-start gap-4 px-4 pt-4 md:pt-8">
      <div className="flex items-center gap-2 perspective-distant">
        <motion.div
          variants={GENERAL_VARIANT}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={SPRING_CONFIG}
          className="rounded-md bg-white shadow-md dark:bg-neutral-800"
        >
          <Image
            src="https://assets.aceternity.com/avatars/manu.webp"
            alt=""
            width={40}
            height={40}
            className="aspect-square size-6 rounded-md shadow-2xl"
          />
        </motion.div>
        <h1 className="text-foreground text-xl font-medium tracking-tight md:text-2xl">
          Manu Arora{" "}
          <span className="text-foreground/50 font-normal">aka</span>{" "}
          <span className="font-normal italic">Paaji</span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        {links.map((link) => {
          const active = isActivePath(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative transition-colors",
                active
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary",
              )}
            >
              {link.title}
              <DottedUnderline
                className={cn(
                  "mask-x-from-90% transition-opacity duration-300",
                  active
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100",
                )}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
