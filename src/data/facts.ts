import type { LucideIcon } from "lucide-react";
import {
  Binary,
  CircleDollarSign,
  Handshake,
  MapPin,
  MousePointerClick,
  ShieldQuestion,
} from "lucide-react";

export interface FactCardData {
  id: string;
  stat: string;
  label: string;
  icon: LucideIcon;
}

export const quickFacts: FactCardData[] = [
  {
    id: "two-trails",
    stat: "Two trails",
    label:
      "Your digital footprint includes both active data you share and passive data collected in the background.",
    icon: Binary,
  },
  {
    id: "behavior",
    stat: "Behavior becomes identity",
    label:
      "Clicks, pauses, searches, purchases, and locations can become part of a profile that platforms use to understand you.",
    icon: MousePointerClick,
  },
  {
    id: "privacy-reach",
    stat: "Privacy feels out of reach",
    label:
      "Many Americans report feeling overwhelmed by privacy choices and unsure whether their actions make a difference.",
    icon: ShieldQuestion,
  },
  {
    id: "location",
    stat: "Location is sensitive",
    label:
      "Location data can reveal where people live, work, worship, seek medical care, or spend time.",
    icon: MapPin,
  },
  {
    id: "prices",
    stat: "Data can affect prices",
    label:
      "Surveillance pricing research shows personal data may be used to shape individualized prices, discounts, or offers.",
    icon: CircleDollarSign,
  },
  {
    id: "shared-solutions",
    stat: "Solutions are shared",
    label:
      "Individuals can improve habits, but companies and governments also need transparent and accountable privacy practices.",
    icon: Handshake,
  },
];

export interface ChecklistItemData {
  id: string;
  label: string;
}

export const checklistItems: ChecklistItemData[] = [
  { id: "perms", label: "I reviewed app permissions." },
  { id: "loc", label: "I turned off unnecessary location access." },
  { id: "name", label: "I searched my name online." },
  { id: "delete", label: "I deleted unused accounts." },
  { id: "2fa", label: "I enabled two-factor authentication." },
  { id: "social", label: "I checked privacy settings on social media." },
  { id: "contacts", label: "I reviewed what apps can access my contacts/photos." },
  { id: "broker", label: "I opted out of at least one data broker site." },
];
