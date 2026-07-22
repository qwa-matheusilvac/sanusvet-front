import type { MetadataRoute } from "next";

import { siteConfig } from "@/components/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${siteConfig.url}image.png`,
        `${siteConfig.url}og-sanusvet.svg`,
        `${siteConfig.url}image_0.png`,
      ],
    },
  ];
}
