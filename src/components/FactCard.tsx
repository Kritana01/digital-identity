import { motion } from "framer-motion";
import type { FactCardData } from "../data/facts";

interface FactCardProps {
  data: FactCardData;
  index: number;
}

export function FactCard({ data, index }: FactCardProps) {
  const Icon = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass flex flex-col justify-between rounded-2xl p-5 sm:p-6"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-500/20 ring-1 ring-white/10">
        <Icon className="h-6 w-6 text-cyan-200" aria-hidden />
      </div>
      <p className="font-display text-2xl font-bold tracking-tight text-gradient sm:text-3xl">
        {data.stat}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{data.label}</p>
    </motion.div>
  );
}
