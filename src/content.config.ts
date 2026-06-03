import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/_*.md"], base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    year: z.union([z.string(), z.number()]),
    client: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    era: z.enum(["pre-ai", "post-ai"]).default("pre-ai"),
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
    // 在职/保密项目:卡片照常展示,但详情页显示"暂不公开"说明。
    // 离职后把 locked 改为 false、补上正文即可自动解锁。
    locked: z.boolean().default(false),
    lockedNote: z.string().optional(),
  }),
});

export const collections = { blog, work };
