import type { MetadataRoute } from "next";
import { getAllFilesFrontMatter } from "@/lib/mdx";

const SITE_URL = "https://manuarora.in";

type BlogFrontMatter = {
  slug: string;
  publishedAt?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = (await getAllFilesFrontMatter("blog")) as BlogFrontMatter[];

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
    },
    {
      url: `${SITE_URL}/blog`,
    },
    {
      url: `${SITE_URL}/inspiration`,
    },
    {
      url: `${SITE_URL}/sponsor`,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    ...(post.publishedAt ? { lastModified: post.publishedAt } : {}),
  }));

  return [...staticRoutes, ...blogRoutes];
}
