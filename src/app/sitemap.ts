import type { MetadataRoute } from "next";
import { APPROACHES } from "@/lib/approaches";
import { SITE_URL } from "@/lib/site";

const staticRoutes = [
  "",
  "/about-us",
  "/donate",
  "/news-feed",
  "/news-feed/changing-narratives-storytelling-advocacy",
  "/news-feed/disability-act-implementation-benue-state",
  "/news-feed/empower-her-advancing-shr-rights-in-jos",
  "/news-feed/gbv-prevention-training-kano-idp-camps",
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
