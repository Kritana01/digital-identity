import { motion } from "framer-motion";
import { ExternalLink, PlayCircle } from "lucide-react";
import { ExampleCard } from "../components/ExampleCard";
import { SectionHeading } from "../components/SectionHeading";
import { exampleCards, recommendedMedia } from "../data/examples";

export default function Examples() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
            Media & everyday life
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Examples: footprints you might recognize
          </h1>
          <p className="mt-4 text-slate-400">
            Current patterns from regulators, journalism, and public media, each with a citation for where the example comes from.
          </p>
        </motion.div>
      </header>

      <div className="mt-14 space-y-10">
        <SectionHeading
          title="Five recurring scenarios"
          subtitle="Each scenario connects everyday digital life to sources you can open and verify."
          align="center"
        />

        <div className="grid gap-8">
          {exampleCards.map((card, index) => (
            <ExampleCard key={card.id} data={card} index={index} />
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="glass overflow-hidden rounded-2xl p-6 sm:p-8"
          aria-labelledby="media-watch-heading"
        >
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
              Extend your learning
            </p>
            <h2
              id="media-watch-heading"
              className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl"
            >
              Recommended media to watch
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400">
              Three credible starting points. Open each in a new tab when you are ready to watch. Videos do not autoplay from this page.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {recommendedMedia.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex flex-col rounded-2xl border border-white/10 bg-slate-950/50 p-5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-violet-500/20 ring-1 ring-white/10">
                  <PlayCircle className="h-5 w-5 text-cyan-300" aria-hidden />
                </div>
                <h3 className="font-display text-base font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {item.summary}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500/90 to-teal-600/90 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/15 transition hover:brightness-110"
                >
                  Watch source
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
