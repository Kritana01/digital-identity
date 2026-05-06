import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { references } from "../data/references";

export default function References() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
            Sources
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            References (APA-style)
          </h1>
        </motion.div>
      </header>


      <ol className="mt-10 space-y-5 [counter-reset:ref]">
        {references.map((ref, index) => (
          <motion.li
            key={ref.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="glass rounded-2xl p-5 sm:p-6 [counter-increment:ref]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-xs font-semibold text-slate-500">
                [{index + 1}]
              </span>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 hover:text-cyan-200"
              >
                Open source
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
              {ref.citation}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
