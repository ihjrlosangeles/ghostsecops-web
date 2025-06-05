import type { PricingFeatures } from "./pricing-comparison-types";

import { TiersEnum } from "./pricing-types";

const features: PricingFeatures = [
  {
    title: "Core Review Features",
    items: [
      {
        title: "Primary Cloud Environment Review",
        tiers: {
          [TiersEnum.Core]: true,
          [TiersEnum.Comprehensive]: true,
          [TiersEnum.Strategic]: true,
        },
        helpText:
          "In-depth assessment of one primary cloud environment (AWS or GCP).",
      },
      {
        title: "Scoping & Contextual Understanding",
        tiers: {
          [TiersEnum.Core]: true,
          [TiersEnum.Comprehensive]: true,
          [TiersEnum.Strategic]: true,
        },
        helpText:
          "Initial workshops to understand your environment and requirements.",
      },
      {
        title: "Configuration & Architecture Analysis",
        tiers: {
          [TiersEnum.Core]: "Core services",
          [TiersEnum.Comprehensive]: "Expanded services",
          [TiersEnum.Strategic]: "Expanded services",
        },
        helpText:
          "Automated & manual analysis of your cloud configuration and architecture.",
      },
      {
        title: "Strategic Reporting",
        tiers: {
          [TiersEnum.Core]: true,
          [TiersEnum.Comprehensive]: true,
          [TiersEnum.Strategic]: true,
        },
        helpText:
          "Executive Summary, Technical Findings Report, and Remediation Roadmap.",
      },
    ],
  },
  {
    title: "Compliance & Extended Features",
    items: [
      {
        title: "Compliance Alignment Overview",
        tiers: {
          [TiersEnum.Core]: false,
          [TiersEnum.Comprehensive]: true,
          [TiersEnum.Strategic]: true,
        },
        helpText:
          "Detailed mapping to one major compliance standard (PCI-DSS, HIPAA, SOC2).",
      },
      {
        title: "Extended Q&A & Debrief",
        tiers: {
          [TiersEnum.Core]: false,
          [TiersEnum.Comprehensive]: true,
          [TiersEnum.Strategic]: true,
        },
        helpText:
          "Additional time for detailed discussion and clarification of findings.",
      },
      {
        title: "Scope of Assessment",
        tiers: {
          [TiersEnum.Core]: "Standard",
          [TiersEnum.Comprehensive]: "Expanded",
          [TiersEnum.Strategic]: "Expanded",
        },
        helpText: "Number of accounts and services covered in the assessment.",
      },
    ],
  },
  {
    title: "Strategic Add-Ons",
    items: [
      {
        title: "Kubernetes Security Audit",
        tiers: {
          [TiersEnum.Core]: false,
          [TiersEnum.Comprehensive]: "Optional",
          [TiersEnum.Strategic]: "Included",
        },
        helpText:
          "In-depth security review of Kubernetes clusters (EKS, GKE, AKS).",
      },
      {
        title: "CI/CD Pipeline Security Review",
        tiers: {
          [TiersEnum.Core]: false,
          [TiersEnum.Comprehensive]: "Optional",
          [TiersEnum.Strategic]: "Included",
        },
        helpText: "Assessment of SDLC and CI/CD pipeline security.",
      },
      {
        title: "Monthly Advisory Retainer",
        tiers: {
          [TiersEnum.Core]: false,
          [TiersEnum.Comprehensive]: "Optional",
          [TiersEnum.Strategic]: "3 months included",
        },
        helpText: "Ongoing expert security guidance and support.",
      },
    ],
  },
  {
    title: "Advisory Services",
    items: [
      {
        title: "Quarterly Re-assessment",
        tiers: {
          [TiersEnum.Core]: false,
          [TiersEnum.Comprehensive]: false,
          [TiersEnum.Strategic]: true,
        },
        helpText: "Light re-assessment of key configurations every quarter.",
      },
      {
        title: "On-demand Consultation",
        tiers: {
          [TiersEnum.Core]: false,
          [TiersEnum.Comprehensive]: false,
          [TiersEnum.Strategic]: true,
        },
        helpText:
          "Security consultation for new services and architectural changes.",
      },
      {
        title: "Critical Alerts Review",
        tiers: {
          [TiersEnum.Core]: false,
          [TiersEnum.Comprehensive]: false,
          [TiersEnum.Strategic]: true,
        },
        helpText:
          "Review and advisory for critical security alerts and incident response.",
      },
      {
        title: "Remediation Tracking",
        tiers: {
          [TiersEnum.Core]: false,
          [TiersEnum.Comprehensive]: false,
          [TiersEnum.Strategic]: true,
        },
        helpText: "Tracking and validation of ongoing remediation efforts.",
      },
    ],
  },
];

export default features;
