import type { ButtonProps } from "@heroui/react";

export enum FrequencyEnum {
  OneTime = "onetime",
  Monthly = "monthly",
}

export enum TiersEnum {
  Core = "core",
  Comprehensive = "comprehensive",
  Strategic = "strategic",
}

export type Frequency = {
  key: FrequencyEnum;
  label: string;
  priceSuffix: string;
};

export type Tier = {
  key: TiersEnum;
  title: string;
  price:
    | {
        [FrequencyEnum.OneTime]: string;
        [FrequencyEnum.Monthly]?: string;
      }
    | string;
  priceSuffix?: string;
  href: string;
  description?: string;
  mostPopular?: boolean;
  featured?: boolean;
  features?: string[];
  buttonText: string;
  buttonColor?: ButtonProps["color"];
  buttonVariant: ButtonProps["variant"];
};
