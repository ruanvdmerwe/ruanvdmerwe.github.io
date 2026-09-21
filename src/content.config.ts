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
    type: z.enum(["conference", "workshop", "journal", "preprint", "blog"]),
    pdf: z.string().optional(),
    url: z.string().optional(),
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

const supervision = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/supervision" }),
  schema: z.object({
    student: z.string(),
    title: z.string(),
    degree: z.enum(["PhD", "MSc", "Honours", "BSc", "Internship"]),
    role: z.enum(["supervisor", "co-supervisor"]),
    institution: z.string().optional(),
    status: z.enum(["ongoing", "completed"]),
    year: z.number().int(),
    summary: z.string().optional(),
    order: z.number().optional(),
  }),
});

const shows = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/shows" }),
  schema: ({ image }) =>
    z.object({
    title: z.string(),
    venue: z.string(),
    date: z.coerce.date(),
    time: z.string().optional(),
    location: z.string().optional(),
    type: z.enum(["open-mic", "showcase", "headline", "festival", "competition", "podcast"]),
    link: z.string().url().optional(),
    tickets: z.string().url().optional(),
    summary: z.string().optional(),
    // Photos from the night. Each is a path relative to the .md file
    // (e.g. "./images/photo.jpg") or { src, alt }. Astro optimises them at
    // build time. The first one doubles as the poster for a local video.
    images: z
      .array(z.union([image(), z.object({ src: image(), alt: z.string() })]))
      .default([]),
    // YouTube / Vimeo URL (embedded) or a path under public/ to an .mp4/.webm
    // (played with the native player).
    video: z.string().optional(),
  }),
});

export const collections = { blog, papers, projects, talks, supervision, shows };
