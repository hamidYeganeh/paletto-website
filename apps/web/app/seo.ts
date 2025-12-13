import type { Metadata } from "next";

export const siteConfig = {
  name: "Paletto",
  shortName: "Paletto",
  description: "Paletto website",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/+$/,
    ""
  ),
  twitter: "@paletto",
} as const;

export function getMetadataBase(): URL {
  return new URL(siteConfig.url);
}

export function getDefaultMetadata(): Metadata {
  const metadataBase = getMetadataBase();

  return {
    metadataBase,
    applicationName: siteConfig.name,
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
        fr: "/",
      },
    },
    openGraph: {
      type: "website",
      url: "/",
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.description,
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
      title: siteConfig.name,
      description: siteConfig.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [{ url: "/favicon.ico" }],
      shortcut: [{ url: "/favicon.ico" }],
    },
  };
}

