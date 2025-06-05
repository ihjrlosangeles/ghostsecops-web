"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";

import { frequencies } from "@/components/pricing-tiers";

export default function ServicesPage() {
  const [selectedFrequency, setSelectedFrequency] = React.useState(
    frequencies[0],
  );

  const onFrequencyChange = (selectedKey: React.Key) => {
    const frequencyIndex = frequencies.findIndex((f) => f.key === selectedKey);

    setSelectedFrequency(frequencies[frequencyIndex]);
  };

  const mostPopularColumnBg = "bg-content2 dark:bg-content1";

  return (
    <div className="flex justify-center items-stretch gap-4 p-6">
      <div className="opacity-90">
        <Card className="overflow-none relative w-full max-w-[420px] min-h-[420px] border-small border-foreground/10 bg-[url('https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/abstract-dark-bg4.jpg')] bg-right-bottom hover:shadow-lg hover:scale-[1.01] transition-transform">
          <CardHeader className="p-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 w-fit">
                  <Icon
                    className="text-indigo-400"
                    height="20"
                    icon="mdi:shield-home"
                    width="20"
                  />
                  <p className="text-xs uppercase text-indigo-400 tracking-widest">
                    Protect
                  </p>
                </div>
              </div>
              <p className="text-large font-medium text-white">
                Cloud Security & Resilience Baseline
              </p>
              <p className="text-sm text-default-500">
                Build a strong cloud foundation with a <strong>hands-on security review</strong> of your AWS cloud.
              </p>
              <span className="inline-block text-xs text-white bg-sky-700 px-2.5 py-0.5 rounded-full">
                Foundational
              </span>
            </div>
          </CardHeader>
          <CardBody className="px-4">
            <div className="flex flex-col gap-4 min-h-[120px]">
              <p className="text-small text-white/60 leading-relaxed">
                We identify <strong>high-risk misconfigurations</strong>, <strong>IAM exposure</strong>, and <strong>network vulnerabilities</strong> before attackers do. Perfect for teams that need <strong>clear priorities</strong> and <strong>actionable fixes</strong> without the noise.
              </p>
            </div>
          </CardBody>
          <CardFooter className="px-4 pb-4">
            <Button
              fullWidth
              className="border-small border-white/20 bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 transition-colors"
            >
              View Package
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="z-10 shadow-xl">
        <Card className="overflow-none relative w-full max-w-[420px] min-h-[420px] border-small border-foreground/10 bg-[url('https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/abstract-dark-bg4.jpg')] bg-right-bottom hover:shadow-lg hover:scale-[1.01] transition-transform ring-2 ring-indigo-500/60 hover:ring-indigo-500/80">
          <CardHeader className="p-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 w-fit">
                  <Icon
                    className="text-indigo-400"
                    height="20"
                    icon="mdi:account-group"
                    width="20"
                  />
                  <p className="text-xs uppercase text-indigo-400 tracking-widest">
                    Embedded Team
                  </p>
                </div>
              </div>
              <p className="text-large font-medium text-white">
                Strategic Cloud Resilience Ops Advisory
              </p>
              <p className="text-sm text-default-500">
                Your <strong>fractional CISO team</strong>, built to scale with you.
              </p>
              <br>
              </br>
              <span className="inline-block text-xs text-white bg-emerald-700 px-2.5 py-0.5 rounded-full">
                Ongoing Partnership
              </span>
            </div>
          </CardHeader>
          <CardBody className="px-4">
            <div className="flex flex-col gap-4 min-h-[120px]">
              <p className="text-small text-white/60 leading-relaxed">
                Not just advice — a <strong>dedicated pod of cloud experts</strong> monitoring your stack. Includes <strong>monthly security reviews</strong>, <strong>IAM drift detection</strong>, <strong>Kubernetes audits</strong>, and <strong>executive briefings</strong>. Stay ahead of risk without growing your headcount.
              </p>
            </div>
          </CardBody>
          <CardFooter className="px-4 pb-4">
            <Button
              fullWidth
              className="border-small border-white/20 bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 transition-colors"
            >
              View Package
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="opacity-90">
        <Card className="overflow-none relative w-full max-w-[420px] min-h-[420px] border-small border-foreground/10 bg-[url('https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/abstract-dark-bg4.jpg')] bg-right-bottom hover:shadow-lg hover:scale-[1.01] transition-transform">
          <CardHeader className="p-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 w-fit">
                  <Icon
                    className="text-indigo-400"
                    height="20"
                    icon="mdi:assignment-turned-in"
                    width="20"
                  />
                  <p className="text-xs uppercase text-indigo-400 tracking-widest">
                    Compliance
                  </p>
                </div>
              </div>
              <p className="text-large font-medium text-white">
                Cloud Compliance & Audit FastTrack
              </p>
              <p className="text-sm text-default-500">
                Cut audit prep time in half with <strong>compliance mapping built for AWS</strong>.
              </p>
              <br></br>
              <span className="inline-block text-xs text-white bg-indigo-700 px-2.5 py-0.5 rounded-full">
                Audit-Ready
              </span>
            </div>
          </CardHeader>
          <CardBody className="px-4">
            <div className="flex flex-col gap-4 min-h-[120px]">
              <p className="text-small text-white/60 leading-relaxed">
                We align your cloud environment to <strong>SOC2</strong>, <strong>HIPAA</strong>, <strong>ISO27001</strong>, or <strong>PCI</strong> — with <strong>evidence-ready controls</strong>, <strong>remediation tracking</strong>, and <strong>expert guidance</strong> every step of the way.
              </p>
            </div>
          </CardBody>
          <CardFooter className="px-4 pb-4">
            <Button
              fullWidth
              className="border-small border-white/20 bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 transition-colors"
            >
              View Package
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
