import { createClient } from 'next-sanity'


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2025-01-15",
  token: process.env.SANITY_API_TOKEN,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
