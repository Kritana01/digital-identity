import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { ExampleCardData } from "../data/examples";

interface ExampleCardProps {
  data: ExampleCardData;
  index: number;
}

export function ExampleCard({ data, index }: ExampleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="glass relative overflow-hidden rounded-2xl p-6 sm:p-7"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden
      />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/90">
          Real-world pattern
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-white">
          {data.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{data.description}</p>
        <div className="mt-4 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-300">
            Why it matters
          </p>
          <p className="mt-2 text-sm text-slate-200">{data.whyItMatters}</p>
        </div>
        <p className="mt-4 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Source: </span>
          <a
            href={data.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-cyan-300 underline decoration-cyan-500/40 underline-offset-2 transition hover:text-cyan-200"
          >
            {data.sourceTitle}
            <ExternalLink className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
          </a>
        </p>
      </div>
    </motion.article>
  );
}
