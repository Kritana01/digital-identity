export interface ExampleCardData {
  id: string;
  title: string;
  description: string;
  whyItMatters: string;
  sourceTitle: string;
  sourceUrl: string;
}

export const exampleCards: ExampleCardData[] = [
  {
    id: "ads",
    title: "Targeted Ads and Social Media Tracking",
    description:
      "A person searches, watches, likes, pauses, or clicks online, and platforms use those signals to personalize ads and recommendations. The FTC’s 2024 report on social media and video streaming services found that large platforms collected and used extensive user data with weak privacy controls.",
    whyItMatters:
      "This shows that a digital footprint is not only what users post. It also includes behavioral data collected while people scroll, watch, pause, click, and interact.",
    sourceTitle: "FTC Staff Report on Social Media and Video Streaming Data Practices",
    sourceUrl:
      "https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-staff-report-finds-large-social-media-video-streaming-companies-have-engaged-vast-surveillance",
  },
  {
    id: "location",
    title: "Location History and Daily Routine",
    description:
      "Smartphones and apps can collect location data that reveals where someone lives, studies, works, worships, receives medical care, or spends time. FTC cases against data brokers show how sensitive location data can be sold or shared without meaningful consent.",
    whyItMatters:
      "Location data can reveal more than a map point. It can expose routines, relationships, health contexts, religious activity, and personal safety risks.",
    sourceTitle: "FTC Mobilewalla Sensitive Location Data Case",
    sourceUrl:
      "https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-order-banning-mobilewalla-selling-sensitive-location-data",
  },
  {
    id: "brokers",
    title: "Data Broker Profiles",
    description:
      "Data brokers collect, combine, and sell personal information from online behavior, public records, commercial sources, and mobile data. These profiles may include demographic predictions, location patterns, household information, and consumer categories.",
    whyItMatters:
      "People often do not create these profiles themselves, but the profiles can still influence advertising, risk scoring, safety, and how organizations understand them.",
    sourceTitle: "TED: How Data Brokers Sell Your Identity",
    sourceUrl:
      "https://www.ted.com/talks/madhumita_murgia_how_data_brokers_sell_your_identity",
  },
  {
    id: "everyday",
    title: "Digital Privacy in Everyday Life",
    description:
      "Digital privacy appears in everyday situations such as targeted ads, facial recognition, school data leaks, and personal information being used in unexpected ways.",
    whyItMatters:
      "This connects the topic to ordinary people, not just technology experts. Privacy is a civic and community issue.",
    sourceTitle: "PBS: Digital Privacy",
    sourceUrl: "https://www.pbs.org/video/digital-privacy-march-02-2023-5ykq1j/",
  },
  {
    id: "pricing",
    title: "Surveillance Pricing and Personalized Offers",
    description:
      "The FTC has studied surveillance pricing, where companies may use personal data, browsing behavior, transaction history, location, or demographics to set individualized prices or offers.",
    whyItMatters:
      "Digital footprints can affect what people pay, what discounts they see, and whether different people are treated differently for the same product or service.",
    sourceTitle: "FTC Surveillance Pricing Study",
    sourceUrl:
      "https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-surveillance-pricing-study-indicates-wide-range-personal-data-used-set-individualized-consumer",
  },
];

export interface RecommendedMediaItem {
  id: string;
  title: string;
  url: string;
  summary: string;
}

export const recommendedMedia: RecommendedMediaItem[] = [
  {
    id: "ted-brokers",
    title: "TED: How data brokers sell your identity",
    url: "https://www.ted.com/talks/madhumita_murgia_how_data_brokers_sell_your_identity",
    summary:
      "A journalist investigates what data brokers know about her and shows how personal identity can be packaged and sold.",
  },
  {
    id: "pbs-privacy",
    title: "PBS: Digital Privacy",
    url: "https://www.pbs.org/video/digital-privacy-march-02-2023-5ykq1j/",
    summary:
      "A public media segment connecting targeted ads, facial recognition, data leaks, and online privacy.",
  },
  {
    id: "commonsense-footprint",
    title: "Common Sense Education: What’s in Your Digital Footprint?",
    url: "https://www.youtube.com/watch?v=4P_gj3oRn8s",
    summary:
      "A short educational video explaining how online choices create a digital trail.",
  },
];
