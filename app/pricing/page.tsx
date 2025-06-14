"use client";

import React from "react";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
  Spacer,
  Tab,
  Tabs,
  Tooltip,
} from "@heroui/react";
import { cn } from "@heroui/react";

import { frequencies, tiers } from "@/components/pricing-tiers";
import features from "@/components/pricing-tiers-features";
import { FrequencyEnum } from "@/components/pricing-types";

export default function PricingPage() {
  const [selectedFrequency, setSelectedFrequency] = React.useState(
    frequencies[0],
  );

  const onFrequencyChange = (selectedKey: React.Key) => {
    const frequencyIndex = frequencies.findIndex((f) => f.key === selectedKey);

    setSelectedFrequency(frequencies[frequencyIndex]);
  };

  const mostPopularColumnBg = "bg-content2 dark:bg-content1";

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center py-1">
      <div className="flex max-w-5xl flex-col text-center">
        <h2 className="font-medium leading-7 text-primary">Pricing</h2>
        <h1 className="text-4xl font-medium tracking-tight">
          Compare plans & features.
        </h1>
        <Spacer y={4} />
        <h2 className="text-large text-default-500">
          Choose the right security assessment package for your organization.
        </h2>
      </div>
      <Spacer y={8} />

      <Tabs
        classNames={{
          tab: "data-[hover-unselected=true]:opacity-90",
        }}
        radius="full"
        size="lg"
        onSelectionChange={onFrequencyChange}
      >
        <Tab
          key={FrequencyEnum.OneTime}
          aria-label="One-Time Payment"
          className="pr-1.5"
          title="One-Time Payment"
        />
        <Tab
          key={FrequencyEnum.Monthly}
          title={
            <div className="flex items-center gap-2">
              <p>Monthly Retainer</p>
              <Chip color="primary">Available</Chip>
            </div>
          }
        />
      </Tabs>

      <Spacer y={12} />

      {/* Grid ---> "xs" to "lg" */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
        {tiers.map((tier) => (
          <Card
            key={tier.key}
            className={cn("relative p-3", {
              "border-content3 bg-content2 dark:border-content2 dark:bg-content1":
                tier.mostPopular,
              "!border-medium border-default-100 bg-transparent":
                !tier.mostPopular,
            })}
            shadow="none"
          >
            {tier.mostPopular ? (
              <Chip
                classNames={{
                  base: "absolute top-4 right-4",
                  content: "font-medium text-primary-500 dark:text-primary-600",
                }}
                color="primary"
                variant="flat"
              >
                Most Popular
              </Chip>
            ) : null}
            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h2 className="text-large font-medium">{tier.title}</h2>
              <p className="text-medium text-default-500">{tier.description}</p>
            </CardHeader>
            <Divider />
            <CardBody className="gap-8">
              <p className="flex items-baseline gap-1 pt-2">
                <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-transparent">
                  {typeof tier.price === "string"
                    ? tier.price
                    : tier.price[selectedFrequency.key]}
                </span>
                {typeof tier.price !== "string" ? (
                  <span className="text-small font-medium text-default-400">
                    /{selectedFrequency.priceSuffix}
                  </span>
                ) : null}
              </p>
              <ul className="flex flex-col gap-2">
                {tier.features?.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Icon className="text-primary" icon="ci:check" width={24} />
                    <p className="text-default-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                as={Link}
                color={tier.buttonColor}
                href={tier.href}
                variant={tier.buttonVariant}
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Table ---> lg */}
      <div className="isolate hidden lg:block">
        <div className="relative -mx-8">
          <table className="w-full table-fixed border-separate border-spacing-x-4 text-left">
            <caption className="sr-only">Pricing plan comparison</caption>
            <colgroup>
              {Array.from({ length: tiers.length + 1 }).map((_, index) => (
                <col key={index} className="w-1/4" />
              ))}
            </colgroup>
            <thead className="sticky top-0 z-10">
              <tr>
                <td />
                {tiers.map((tier) => (
                  <th
                    key={tier.key}
                    className={cn("relative px-6 pt-6 xl:px-8 xl:pt-8", {
                      [`${mostPopularColumnBg} rounded-t-medium`]:
                        tier.mostPopular,
                      "bg-transparent": !tier.mostPopular,
                    })}
                    scope="col"
                  >
                    {tier.mostPopular ? (
                      <Chip
                        classNames={{
                          base: "absolute top-2 right-2",
                        }}
                        color="primary"
                        variant="flat"
                      >
                        Most Popular
                      </Chip>
                    ) : null}
                    <div className="relative text-large font-medium text-foreground">
                      {tier.title}
                    </div>
                  </th>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <span className="sr-only">Price</span>
                </th>
                {tiers.map((tier) => (
                  <td
                    key={tier.key}
                    className={cn("relative px-6 py-4 xl:px-8", {
                      [`${mostPopularColumnBg}`]: tier.mostPopular,
                      "bg-transparent": !tier.mostPopular,
                    })}
                  >
                    <div className="flex items-baseline gap-1 text-foreground">
                      <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-8 tracking-tight text-transparent">
                        {typeof tier.price === "string"
                          ? tier.price
                          : tier.price[selectedFrequency.key]}
                      </span>
                      <span className="text-small font-medium text-default-600">
                        {tier.priceSuffix
                          ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                          : `/${selectedFrequency.priceSuffix}`}
                      </span>
                    </div>
                    <Button
                      fullWidth
                      as={Link}
                      className={cn("mt-6", {
                        "bg-primary-500": tier.mostPopular,
                      })}
                      color={tier.buttonColor}
                      href={tier.href}
                      variant={tier.buttonVariant}
                    >
                      {tier.buttonText}
                    </Button>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, featIndex) => (
                <React.Fragment key={feat.title}>
                  <tr>
                    <th
                      className={cn(
                        "pb-4 pt-12 text-large font-semibold text-foreground",
                        {
                          "pt-16": featIndex === 0,
                        },
                      )}
                      colSpan={1}
                      scope="colgroup"
                    >
                      {feat.title}
                      <Divider className="absolute -inset-x-4 mt-2 bg-default-600/10" />
                    </th>
                    {tiers.map((tier) => (
                      <td
                        key={tier.key}
                        className={cn("relative py-4", {
                          [`${mostPopularColumnBg}`]: tier.mostPopular,
                        })}
                      />
                    ))}
                  </tr>
                  {feat.items.map((tierFeature, tierFeatureIndex) => (
                    <tr key={tierFeature.title}>
                      <th
                        className="py-4 text-medium font-normal text-default-700"
                        scope="row"
                      >
                        {tierFeature.helpText ? (
                          <div className="flex items-center gap-1">
                            <span>{tierFeature.title}</span>
                            <Tooltip
                              className="max-w-[240px]"
                              color="foreground"
                              content={tierFeature.helpText}
                              placement="right"
                            >
                              <Icon
                                className="text-default-600"
                                icon="solar:info-circle-line-duotone"
                                width={16}
                              />
                            </Tooltip>
                          </div>
                        ) : (
                          tierFeature.title
                        )}
                      </th>
                      {tiers.map((tier) => (
                        <td
                          key={tier.key}
                          className={cn("relative py-4", {
                            [`${mostPopularColumnBg}`]: tier.mostPopular,
                          })}
                        >
                          {tierFeature.tiers[tier.key] ? (
                            <div className="flex items-center gap-2">
                              <Icon
                                className="text-primary"
                                icon="ci:check"
                                width={24}
                              />
                              <span className="text-default-500">
                                {tierFeature.tiers[tier.key]}
                              </span>
                            </div>
                          ) : (
                            <Icon
                              className="text-default-400"
                              icon="ci:close"
                              width={24}
                            />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
