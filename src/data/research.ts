import type { LucideIcon } from "lucide-react";
import { Briefcase, Eye, Scale, Sparkles } from "lucide-react";

export interface ActivePassiveItem {
  label: string;
}

export interface ImplicationCardData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const activeFootprintItems: ActivePassiveItem[] = [
  { label: "Social media posts" },
  { label: "Comments" },
  { label: "Reviews" },
  { label: "Public profiles" },
  { label: "Form submissions" },
  { label: "Uploaded photos/videos" },
];

export const passiveFootprintItems: ActivePassiveItem[] = [
  { label: "Location history" },
  { label: "Browsing history" },
  { label: "IP address" },
  { label: "Device identifiers" },
  { label: "Ad engagement" },
  { label: "App permissions" },
  { label: "Metadata" },
  { label: "Time spent on pages/videos" },
];

export const implicationCards: ImplicationCardData[] = [
  {
    id: "privacy",
    title: "Privacy loss",
    description:
      "Footprints aggregate into profiles that can be shared, sold, or leaked, often beyond what users expect when they tap “accept.”",
    icon: Eye,
  },
  {
    id: "profiling",
    title: "Algorithmic profiling",
    description:
      "Platforms infer interests, habits, and traits from behavior, then personalize feeds, ads, and recommendations, sometimes reinforcing narrow stereotypes.",
    icon: Sparkles,
  },
  {
    id: "reputation",
    title: "Reputation and employability",
    description:
      "Schools, scholarships, and employers may evaluate online presence; old content can resurface in searches or AI-assisted screening.",
    icon: Briefcase,
  },
  {
    id: "inequality",
    title: "Unequal treatment",
    description:
      "Data-driven systems can enable targeted pricing, filtered opportunities, or biased assumptions about individuals and communities.",
    icon: Scale,
  },
];

export const strategySteps: string[] = [
  "Review app permissions monthly",
  "Turn off unnecessary location tracking",
  "Use privacy-focused browsers/search engines",
  "Delete unused accounts",
  "Use strong unique passwords and 2FA",
  "Limit public social media oversharing",
  "Opt out of people-search/data broker websites when possible",
  "Think before posting, but also think about passive tracking",
  "Teach digital privacy in schools and community programs",
  "Support stronger privacy laws and transparent data practices",
];

export const institutionalNote =
  "Digital privacy is not just an individual responsibility. Platforms, companies, schools, and governments also shape the conditions of digital identity.";

export interface ResearchSourceLink {
  label: string;
  url: string;
}

/** Curated starting points named on the Research page (informal attribution, not formal footnotes). */
export const researchSourceLinks: ResearchSourceLink[] = [
  {
    label: "Pew Research Center - How Americans view data privacy",
    url: "https://www.pewresearch.org/internet/2023/10/18/how-americans-view-data-privacy/",
  },
  {
    label: "FTC - Social media & video streaming data practices",
    url: "https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-staff-report-finds-large-social-media-video-streaming-companies-have-engaged-vast-surveillance",
  },
  {
    label: "FTC - Surveillance pricing study",
    url: "https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-surveillance-pricing-study-indicates-wide-range-personal-data-used-set-individualized-consumer",
  },
  {
    label: "EFF - Surveillance Self-Defense",
    url: "https://ssd.eff.org/",
  },
  {
    label: "FTC Consumer Advice - Protect your personal information",
    url: "https://consumer.ftc.gov/articles/protect-your-personal-information-hackers-and-scammers",
  },
];
