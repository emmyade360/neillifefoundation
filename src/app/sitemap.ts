import type { MetadataRoute } from "next";
import { APPROACHES } from "@/lib/approaches";
import { SITE_URL } from "@/lib/site";

const staticRoutes = [
  "",
  "/about-us",
  "/donate",
  "/news-feed",
  "/news-feed/empowering-women-and-girls-with-disabilities-through-inclusive-climate-action",
  "/news-feed/empowering-women-with-disabilities-in-benue-state",
  "/news-feed/significant-action-on-the-disability-bill-benue-state",
  "/our-approach",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const approachRoutes = APPROACHES.map((approach) => `/our-approach/${approach.slug}`);

  return [...staticRoutes, ...approachRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
