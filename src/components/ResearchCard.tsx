import { useId } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface ResearchCardProps {
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "default" | "accent";
}

export function ResearchCard({
  title,
  children,
  icon: Icon,
  variant = "default",
}: ResearchCardProps) {
  const headingId = useId();
  const accent =
    variant === "accent"
      ? "ring-1 ring-cyan-400/30 shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]"
      : "";

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className={`glass rounded-2xl p-6 sm:p-8 ${accent}`}
      aria-labelledby={headingId}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        {Icon && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/25 ring-1 ring-white/10">
            <Icon className="h-6 w-6 text-cyan-200" aria-hidden />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 id={headingId} className="font-display text-xl font-semibold text-white">
            {title}
          </h3>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
