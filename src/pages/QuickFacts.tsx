import { motion } from "framer-motion";
import { ArrowRightLeft, Footprints, Radar } from "lucide-react";
import { Checklist } from "../components/Checklist";
import { FactCard } from "../components/FactCard";
import { SectionHeading } from "../components/SectionHeading";
import { quickFacts } from "../data/facts";

export default function QuickFacts() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
            Artifact-style facts
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Quick facts & footprint checkup
          </h1>
          <p className="mt-4 text-slate-400">
            Evidence-backed talking points in card form, plus an interactive checklist to turn awareness into habits.
          </p>
        </motion.div>
      </header>

      <div className="mt-14 space-y-16">
        <section aria-labelledby="facts-grid-heading">
          <SectionHeading
            id="facts-grid-heading"
            title="Six truths about digital footprints"
            subtitle="Short lines you can reuse in a workshop, poster, or class discussion, aligned with public research and regulatory reporting."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quickFacts.map((fact, index) => (
              <FactCard key={fact.id} data={fact} index={index} />
            ))}
          </div>
        </section>

        <section aria-labelledby="infographic-heading">
          <SectionHeading
            id="infographic-heading"
            title="Active vs. passive (at a glance)"
            subtitle="Two lanes of data - one you mean to share and one that accumulates while you scroll."
            align="center"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="glass mt-10 overflow-hidden rounded-2xl p-6 sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="relative rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <Footprints className="h-6 w-6 text-cyan-300" aria-hidden />
                  <h3 className="font-display text-xl font-semibold text-white">
                    Active footprint
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Content you knowingly publish - bios, photos, comments, and reviews - designed for others to see.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
                    Public by intent (even if audience settings slip later)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
                    Often easiest to find in search
                  </li>
                </ul>
              </div>

              <div className="relative rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-600/15 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <Radar className="h-6 w-6 text-violet-300" aria-hidden />
                  <h3 className="font-display text-xl font-semibold text-white">
                    Passive footprint
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Signals gathered while you use devices - often quietly, continuously, and in aggregate.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-400" aria-hidden />
                    Clicks, dwell time, location pings, ad interactions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-400" aria-hidden />
                    Often feeds models you never directly “post” to
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-5 text-center sm:flex-row sm:gap-4">
              <ArrowRightLeft className="h-6 w-6 shrink-0 text-teal-300" aria-hidden />
              <p className="text-sm text-slate-300">
                Platforms connect both lanes to build an{" "}
                <strong className="text-white">algorithmic profile</strong> - a predicted version of you used to rank, recommend, price, and prioritize content.
              </p>
            </div>
          </motion.div>
        </section>

        <section aria-labelledby="checklist-section">
          <h2 id="checklist-section" className="sr-only">
            Interactive checklist
          </h2>
          <Checklist />
        </section>
      </div>
    </div>
  );
}
