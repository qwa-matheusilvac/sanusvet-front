"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const baseClassName =
  "magnetic-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold ring-1 transition-all duration-300";

const variantClassNames = {
  primary:
    "bg-[#D4AF37] text-[#0D2C4D] ring-white/40 shadow-[0_18px_45px_rgba(212,175,55,0.28)] hover:bg-[#c69b1d] hover:shadow-[0_24px_55px_rgba(212,175,55,0.38)]",
  secondary:
    "bg-[#1E4D7A] text-white ring-white/15 shadow-[0_18px_45px_rgba(13,44,77,0.2)] hover:bg-[#163b5d] hover:shadow-[0_24px_55px_rgba(13,44,77,0.28)]",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="inline-flex"
    >
      <Link
        href={href}
        className={cn(baseClassName, variantClassNames[variant], className)}
      >
        <span className="relative z-10">{children}</span>
        <motion.span
          aria-hidden="true"
          initial={{ x: 0, opacity: 0.75 }}
          whileHover={{ x: 4, opacity: 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
          className="relative z-10"
        >
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      </Link>
    </motion.div>
  );
}
