import { z, defineCollection } from "astro:content";

// Define the schema for blog and store (already defined)
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

// Define a schema for the projects collection
const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    badge: z.string().optional(),
    url: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
});

// Define collections
const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const projectCollection = defineCollection({ schema: projectSchema }); // Add this line for the projects collection

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>; // Add type for projects

export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'projects': projectCollection, // Add the 'projects' collection
};
