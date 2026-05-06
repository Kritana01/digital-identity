import { motion } from "framer-motion";
import { PenLine } from "lucide-react";
import { ReflectionBlock } from "../components/ReflectionBlock";

export default function Reflection() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
          Written Personal Response
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Personal Reflection: Why Digital Footprints Matter to Me
        </h1>
        <p className="mt-4 text-slate-400">
          Kritana Bastola · EME 4390 · Digital Identity
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.06 }}
        className="glass mt-8 flex gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-5 sm:p-6"
      >
        <PenLine className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
        <p className="text-sm leading-relaxed text-slate-300">
          I chose the written reflection option for this page. The sections below explain why this topic matters to me personally, how it connects to life as a student and technology user, and what I hope visitors take away after exploring the site.
        </p>
      </motion.div>

      <div className="mt-12 space-y-8">
        <ReflectionBlock title="Why I chose digital footprints and privacy">
          <p>
            I chose digital footprints and privacy because they sit at the intersection of everyday life and invisible systems. The topic sounds technical, but it shows up in ordinary moments: an ad that follows me across apps, a map that remembers where I have been, a platform that predicts what I will watch next. As soon as I started reading FTC enforcement summaries and Pew surveys for this project, I realized how much of my “digital identity” is not a profile I carefully wrote, it is an assembled picture built from behavior, permissions, and records I did not always see. That mismatch between what I intend to share and what gets collected is exactly what I wanted to explore for my community audience, including neighbors and classmates who may not think of themselves as “tech people” but still live online every day.
          </p>
        </ReflectionBlock>

        <ReflectionBlock title="How this connects to my life as a student and technology user">
          <p>
            My daily routine runs through a learning management system, email, cloud storage, banking apps, maps, and social feeds. Each tool promises convenience, but convenience often depends on continuous data collection. I have accepted long privacy policies when I was in a hurry, left location services on for class or transit, and assumed that “private” settings would stay stable even when platforms update their rules. None of that makes me careless, it makes me human. Still, I now see how quickly passive signals add up: time spent on a page, repeated searches, device identifiers tied to accounts, and metadata attached to photos I thought were only for friends. This project pushed me to connect those habits to larger patterns researchers and regulators describe, including surveillance pricing and sensitive location data in broker markets. As a student, I am training for a future workplace that may screen online presence, use analytics, or rely on vendor tools that process employee and customer data. Digital footprints are not a side topic for me; they are part of how institutions will interpret people like me in the next decade.
          </p>
        </ReflectionBlock>

        <ReflectionBlock title="Passive tracking is ethically different from knowingly posting">
          <p>
            Posting online can be risky, and “think before you post” is still good advice. However, ethical discussions about privacy fail if they stop there. Passive tracking raises different moral questions because users often cannot see the full pipeline: what is logged, how long it is kept, who buys it, or how it feeds scoring and segmentation. When collection is quiet, bundled into terms of service, or buried in settings screens, people are asked to “consent” without a realistic chance to understand the trade. That does not mean every company acts in bad faith, but it does mean accountability cannot rest only on individual caution. I have come to see passive footprints as a civic issue: they shape what communities are visible to advertisers, which neighborhoods receive certain offers, and whose routines are easiest to monetize. Ethically, we should compare intentional speech, which can be embarrassing but is often knowingly public, to behavioral inference, which can be intimate yet hidden.
          </p>
        </ReflectionBlock>

        <ReflectionBlock title="Why meaningful consent matters">
          <p>
            Meaningful consent requires comprehension and meaningful choice. If I cannot reasonably predict how my data will be used downstream, then clicking “agree” is closer to a gate than a decision. Through this course, I have paid more attention to how defaults steer behavior: opt-out structures, pre-checked boxes, and interfaces that reward sharing with speed while punishing caution with friction. Consent also needs renewal when uses change-when a service adds AI features, shares data with new partners, or repurposes location for advertising after I thought I was only enabling navigation. I do not believe the answer is to shame users for clicking yes; I believe systems should minimize collection, clarify retention, and give people understandable controls. That standard protects everyone, but it especially protects young adults, gig workers, renters, and others who rely on phones for essential tasks and cannot simply “go offline” to avoid tracking.
          </p>
        </ReflectionBlock>

        <ReflectionBlock title="Why Tampa Bay and Florida residents should care">
          <p>
            Florida communities, including the Tampa Bay region-depend on mobile connectivity for tourism, transit, hurricane alerts, campus life, healthcare portals, and local news. Those same devices generate detailed trails. Snowbirds, students, and service workers share crowded networks and similar apps, which means data-driven profiling does not treat everyone equally even when the interface looks the same on each phone. Public agencies, schools, and small businesses increasingly rely on digital tools, sometimes without large IT departments to audit vendors. When location or behavioral data leaks or gets sold, the consequences can include scams aimed at older adults, housing searches influenced by broker dossiers, or safety risks for people seeking sensitive services. Privacy here is not an abstract coastal elite concern; it is a practical question about who gets targeted, who gets priced differently, and whose routines become someone else’s product.
          </p>
        </ReflectionBlock>

        <ReflectionBlock title="What I learned">
          <p>
            I learned that digital identity is co-produced. My posts and portfolio pieces matter, but so do platform incentives, advertiser markets, data brokers, and enforcement gaps. Reports from the FTC and surveys from Pew helped me ground those claims without exaggerating-many people feel overwhelmed by privacy choices, and regulators keep finding business models that depend on vast data collection. I also learned to separate drama from evidence: the goal is not to frighten visitors, but to show how footprints connect to real outcomes like individualized pricing and sensitive location exposure. Most importantly, I learned that literacy is a skill I can share. If I can explain active versus passive footprints clearly, friends and family can make better decisions even within imperfect systems.
          </p>
        </ReflectionBlock>

        <ReflectionBlock title="Audiences, language, and what I’m keeping">
          <p>
            Putting this reflection next to Quick Facts and the examples reminded me that visitors arrive with different needs: some want regulator-backed citations, others want one habit before bed-so I tried to serve both without burying people in jargon. Designing for classmates and Tampa Bay neighbors also meant plain-language contrasts between active and passive footprints because shame rarely changes defaults. I added a quarterly reminder to revisit permissions after OS updates, a habit I once dismissed until I pictured the dossiers data brokers assemble at scale. I want that discipline to linger after finals because it reinforces the respectful, practical tone I hoped this website would embody.
          </p>
        </ReflectionBlock>

        <ReflectionBlock title="What building the artifact taught me">
          <p>
            Curating the References page disciplined me against vague panic stories-I kept asking whether each takeaway still made sense beside a Pew survey or FTC release someone could reopen. Editing my researched screencast forced the same slowdown: anytime I leaned on unnamed “they” harvesting data, I rewrote toward the actual agencies and cases grounding this site. Showing early drafts to friends also surfaced pacing problems-panels that sounded fine in isolation felt crowded once motion and cards surrounded them, which pushed me toward shorter sentences beside the infographic sections. Wrestling with accessibility versus analytic depth mirrored the tradeoffs users face whenever a signup flow demands speed over comprehension.
          </p>
        </ReflectionBlock>

        <ReflectionBlock title="What I want visitors to do next">
          <p>
            After reading this site, I hope visitors do three things. First, take small, concrete steps: review app permissions, turn off location for apps that do not need it, enable two-factor authentication, and search your own name to see what brokers or people-search sites expose. Second, zoom out-support transparent school policies, fair workplace data practices, and stronger privacy rules that reduce the burden on individuals alone. Third, talk about this topic with someone who thinks they have “nothing to hide,” because the strongest footprint is often the one people do not realize they are leaving. I built “You Left That There” to make those invisible trails visible. If one person reconsiders a default setting or reads a privacy notice with attention instead of reflexively clicking through, this project will have done what I intended: turn awareness into action, one visitor at a time.
          </p>
        </ReflectionBlock>
      </div>
    </div>
  );
}
