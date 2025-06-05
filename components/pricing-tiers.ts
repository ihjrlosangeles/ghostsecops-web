import type { Frequency, Tier } from "./pricing-types";

import { FrequencyEnum, TiersEnum } from "./pricing-types";

export const frequencies: Array<Frequency> = [
  {
    key: FrequencyEnum.OneTime,
    label: "One-Time Payment",
    priceSuffix: "one-time",
  },
  {
    key: FrequencyEnum.Monthly,
    label: "Monthly Retainer",
    priceSuffix: "per month",
  },
];

export const tiers: Array<Tier> = [
  {
    key: TiersEnum.Core,
    title: "Cloud Security & Resilience Baseline",
    description:
      "For organizations seeking a foundational, expert-led review of their primary cloud environment's security architecture and resilience.",
    href: "#",
    featured: false,
    mostPopular: false,
    price: {
      onetime: "Get a Quote",
    },
    features: [
      "In-depth assessment of one primary cloud environment",
      "Scoping & Contextual Understanding workshops",
      "Configuration & Architecture Analysis",
      "Vulnerability, Risk & Gap Identification",
      "Strategic Reporting & Remediation Roadmap",
      "Executive Summary",
      "Detailed Technical Findings Report",
      "Top 5-10 Critical Fixes & Actionable Roadmap",
      "Supplementary Files (evidence, resources)",
    ],
    buttonText: "Get Started",
    buttonColor: "default",
    buttonVariant: "flat",
  },
  {
    key: TiersEnum.Comprehensive,
    title: "Cloud Compliance & Audit FastTrack",
    description:
      "For businesses requiring an in-depth architectural review plus dedicated alignment with a key compliance standard.",
    href: "#",
    mostPopular: true,
    price: {
      onetime: "Get a Quote",
    },
    featured: false,
    features: [
      "All Core Review features",
      "Expanded scope (more accounts/services)",
      "Detailed Compliance Alignment Overview",
      "Extended Q&A and debrief session",
      "Deeper focus on critical areas",
      "Compliance standard mapping",
      "Comprehensive documentation",
    ],
    buttonText: "Contact Sales",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Strategic,
    title: "Strategic Cloud Resilience Ops Advisory",
    href: "#",
    featured: true,
    mostPopular: false,
    description:
      "For organizations seeking a comprehensive review coupled with initial ongoing strategic advisory.",
    price: {
      onetime: "Get a Quote",
      monthly: "Get a Quote",
    },
    features: [
      "All Comprehensive Review features",
      "Choice of add-on service:",
      "- Kubernetes Security Audit",
      "- CI/CD Pipeline Security Review",
      "- 3 months Monthly Advisory Retainer",
      "Quarterly light re-assessment",
      "On-demand security consultation",
      "Critical security alerts review",
      "Remediation tracking & validation",
    ],
    buttonText: "Contact Sales",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];
