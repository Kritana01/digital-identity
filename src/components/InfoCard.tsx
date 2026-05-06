import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface InfoCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  delay?: number;
  highlight?: string;
}

export function InfoCard({
  title,
  description,
  icon: Icon,
  delay = 0,
  highlight,
}: InfoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay }}
      className="glass group relative overflow-hidden rounded-2xl p-6"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-600/10 opacity-0 transition group-hover:opacity-100"
        aria-hidden
      />
      {Icon && (
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
          <Icon className="h-5 w-5 text-cyan-300" aria-hidden />
        </div>
      )}
      {highlight && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-violet-300">
          {highlight}
        </p>
      )}
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
    </motion.article>
  );
}
