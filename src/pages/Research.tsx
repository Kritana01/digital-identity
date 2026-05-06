import { motion } from "framer-motion";
import {
  BookOpen,
  Compass,
  ExternalLink,
  FileVideo,
  Layers,
  Lightbulb,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { ResearchCard } from "../components/ResearchCard";
import {
  activeFootprintItems,
  implicationCards,
  institutionalNote,
  passiveFootprintItems,
  researchSourceLinks,
  strategySteps,
} from "../data/research";

export default function Research() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
            Research overview
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Digital footprints, evidence, and next steps
          </h1>
          <p className="mt-4 text-slate-400">
            Structured background for GEA #2: definitions, comparisons, current uses of data, implications, and practical strategies.
          </p>
        </motion.div>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mx-auto mt-10 max-w-3xl"
        aria-labelledby="presentation-title"
      >
        <div className="glass rounded-2xl p-6 sm:p-8">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/25 ring-1 ring-white/10">
              <FileVideo className="h-6 w-6 text-cyan-200" aria-hidden />
            </div>
            <div className="min-w-0">
              <h2
                id="presentation-title"
                className="font-display text-xl font-semibold text-white sm:text-2xl"
              >
                Research Presentation Screencast
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                This narrated recording walks through background, current evidence from regulators and surveys, implications for everyday users, and practical action steps tied to digital footprints and privacy.
              </p>
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-cyan-400/25 bg-black ring-1 ring-white/10">
            <video
              className="aspect-video w-full bg-black object-contain"
              controls
              playsInline
              preload="metadata"
              aria-label="Narrated research presentation on digital footprints and privacy"
            >
              <source
                src={`${import.meta.env.BASE_URL}digital_footprints.mp4`}
                type="video/mp4"
              />
              <a
                href={`${import.meta.env.BASE_URL}digital_footprints.mp4`}
                className="text-cyan-400 underline"
              >
                Download presentation (MP4)
              </a>
            </video>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">
            Playback does not start automatically, so use your browser controls to watch.
          </p>
        </div>
      </motion.section>

      <div className="mt-14 space-y-12">
        <section className="space-y-6" aria-labelledby="sec-background">
          <SectionHeading
            eyebrow="Section A"
            id="sec-background"
            title="Background: What is a digital footprint?"
            subtitle="A framework for understanding intentional and unintentional data trails."
          />
          <ResearchCard title="Defining the trail" icon={BookOpen}>
            <p>
              A <strong className="text-slate-100">digital footprint</strong> is the trail of data people leave when they use the internet. It includes{" "}
              <strong className="text-cyan-200/90">intentional</strong> data such as posts, comments, uploads, reviews, and profiles, but also{" "}
              <strong className="text-violet-200/90">passive</strong> data like browsing behavior, location signals, IP addresses, device identifiers, app usage patterns, and time spent on content.
            </p>
            <p>
              Together, these signals can sketch routines, relationships, interests, and risks, often with more detail than users consciously intend to disclose.
            </p>
          </ResearchCard>
        </section>

        <section className="space-y-6" aria-labelledby="sec-active-passive">
          <SectionHeading
            eyebrow="Section B"
            id="sec-active-passive"
            title="Active vs. passive digital footprints"
            subtitle="Side-by-side comparison: what you publish vs. what systems collect."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 ring-1 ring-cyan-400/25">
                  <Layers className="h-5 w-5 text-cyan-300" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  Active footprint
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Deliberate contributions that build a public or semi-public persona.
              </p>
              <ul className="mt-5 space-y-2.5">
                {activeFootprintItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-sm text-slate-200"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden />
                    {item.label}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="glass rounded-2xl p-6 sm:p-8 ring-1 ring-violet-500/20"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 ring-1 ring-violet-400/25">
                  <Sparkles className="h-5 w-5 text-violet-300" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  Passive footprint
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Behavioral and technical signals gathered quietly during everyday use.
              </p>
              <ul className="mt-5 space-y-2.5">
                {passiveFootprintItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-sm text-slate-200"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                    {item.label}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="space-y-6" aria-labelledby="sec-evidence">
          <SectionHeading
            eyebrow="Section C"
            id="sec-evidence"
            title="Current evidence of the situation today"
            subtitle="Where footprint data goes, and how it is used."
          />
          <ResearchCard title="What current research and enforcement highlight" icon={Compass} variant="accent">
            <ul className="list-disc space-y-3 pl-5 marker:text-cyan-400/90">
              <li>
                A 2024 Federal Trade Commission staff report on major social media and video streaming services describes extensive collection of user data and business models built around targeted advertising, along with privacy controls the agency characterized as weak in important respects.
              </li>
              <li>
                Pew Research Center reporting finds that many Americans feel overwhelmed by privacy decisions and are skeptical that they can meaningfully control how companies use their personal information, highlighting a gap between tools and felt agency.
              </li>
              <li>
                FTC surveillance pricing research indicates that a wide range of personal data and behavioral signals may be used to set individualized prices or offers, connecting digital footprints to economic outcomes, not only to ads.
              </li>
              <li>
                FTC enforcement involving sensitive location data underscores that trails of locations can reveal homes, health-related visits, places of worship, and other contexts regulators treat as worthy of protection when data is sold or shared carelessly.
              </li>
            </ul>
          </ResearchCard>
        </section>

        <section className="space-y-6" aria-labelledby="sec-implications">
          <SectionHeading
            eyebrow="Section D"
            id="sec-implications"
            title="Implications: Why should we care?"
            subtitle="Four pressure points where footprints translate into real-world effects."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {implicationCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-cyan-300" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {card.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="space-y-6" aria-labelledby="sec-strategies">
          <SectionHeading
            eyebrow="Section E"
            id="sec-strategies"
            title="Strategies and solutions"
            subtitle="Individual habits matter, but institutions set the rules of the road."
          />
          <ResearchCard title="Practical steps you can take" icon={Lightbulb}>
            <ol className="list-decimal space-y-3 pl-5 marker:text-cyan-400/90">
              {strategySteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </ResearchCard>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="glass flex gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-6 sm:p-8"
          >
            <ShieldAlert className="mt-1 h-6 w-6 shrink-0 text-cyan-300" aria-hidden />
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                Systems, not only individuals
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                {institutionalNote}
              </p>
            </div>
          </motion.div>
        </section>

        <section className="space-y-5" aria-labelledby="source-links-heading">
          <div className="text-center sm:text-left">
            <h2
              id="source-links-heading"
              className="font-display text-xl font-semibold text-white sm:text-2xl"
            >
              Source links
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Starting points for the evidence summarized above. Each link opens in a new tab. For full APA-style citations, see the References page.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {researchSourceLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center justify-between gap-3 rounded-2xl p-4 transition hover:border-cyan-400/25 hover:bg-white/[0.04]"
              >
                <span className="text-sm font-medium leading-snug text-slate-200">
                  {link.label}
                </span>
                <ExternalLink
                  className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-cyan-300"
                  aria-hidden
                />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
