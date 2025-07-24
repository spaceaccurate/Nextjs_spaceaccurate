import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "6d8pzi8f",
  dataset: "production",
  apiVersion: "2025-07-24",
  useCdn: false,
});

