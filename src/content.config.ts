import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    math: z.boolean().default(false),
  }),
});

const papers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/papers" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number().int(),
    type: z.enum(["conference", "workshop", "journal", "preprint"]),
    pdf: z.string().optional(),
    code: z.string().optional(),
    project: z.string().optional(),
    arxiv: z.string().optional(),
    doi: z.string().optional(),
    bibtex: z.string().optional(),
    selected: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string().optional(),
    role: z.string().optional(),
    tags: z.array(z.string()).default([]),
    links: z
      .object({
        site: z.string().url().optional(),
        code: z.string().url().optional(),
        paper: z.string().optional(),
        demo: z.string().url().optional(),
      })
      .default({}),
    selected: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
    type: z.enum(["talk", "media", "workshop", "panel"]),
    link: z.string().url().optional(),
    summary: z.string(),
  }),
});

export const collections = { blog, papers, projects, talks };
