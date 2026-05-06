import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Fingerprint,
  Radar,
  Shield,
  Sparkles,
  UserRound,
} from "lucide-react";
import { InfoCard } from "../components/InfoCard";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 animate-gradient-shift bg-[length:300%_300%] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-80"
        aria-hidden
      />

      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
            Digital Identity · EME 4390
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            You{" "}
            <span className="text-gradient">Left That There</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            What your digital footprint actually looks like, and why it matters.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-300">
            Every post, search, app permission, location ping, and click contributes to a version of you that exists online. Some of that trail is intentional. Much of it is invisible. This website explores how digital footprints shape privacy, identity, opportunity, and everyday life.
          </p>

          <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/research"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:w-auto"
            >
              Explore the Research
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/quick-facts"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
            >
              See Quick Facts
            </Link>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Created by{" "}
            <span className="font-medium text-slate-300">Kritana Bastola</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-600/15"
              aria-hidden
            />
            <p className="relative text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              From traces to profile
            </p>
            <div className="relative mt-8 grid gap-6 md:grid-cols-3 md:gap-4">
              <div className="flex flex-col items-center rounded-2xl border border-cyan-400/20 bg-slate-950/50 p-5 text-center">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 ring-1 ring-cyan-400/30">
                  <UserRound className="h-5 w-5 text-cyan-300" aria-hidden />
                </div>
                <h2 className="font-display text-lg font-semibold text-white">
                  Active footprint
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  What you choose to share - posts, bios, reviews, uploads.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-violet-400/20 bg-slate-950/50 p-5 text-center md:-translate-y-2 md:shadow-xl md:shadow-violet-900/20">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 ring-1 ring-violet-400/30">
                  <Radar className="h-5 w-5 text-violet-300" aria-hidden />
                </div>
                <h2 className="font-display text-lg font-semibold text-white">
                  Passive footprint
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  What gets collected in the background - clicks, signals, metadata.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-teal-400/20 bg-slate-950/50 p-5 text-center">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 ring-1 ring-teal-400/30">
                  <Fingerprint className="h-5 w-5 text-teal-300" aria-hidden />
                </div>
                <h2 className="font-display text-lg font-semibold text-white">
                  Algorithmic profile
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  What platforms infer - interests, routines, “types,” risk scores.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mt-16 max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Why this matters
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              Digital footprints do not only live on your camera roll. They become scores, segments, and stories told about you, sometimes accurately and sometimes not.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Privacy"
              description="Invisible collection can outpace what people knowingly share, expanding exposure to tracking, profiling, and reuse across apps and brokers."
              icon={Shield}
              delay={0}
            />
            <InfoCard
              title="Identity"
              description="Your online trail becomes a version of ‘you,’ used by employers, campuses, lenders, and algorithms that never meet you in person."
              icon={Sparkles}
              delay={0.06}
            />
            <InfoCard
              title="Control"
              description="Meaningful consent requires understanding. Transparency, habits, policy, and education together decide how much agency people actually have."
              icon={Fingerprint}
              delay={0.12}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
