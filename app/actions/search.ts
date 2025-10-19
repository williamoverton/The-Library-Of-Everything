"use server";

import { streamObject } from "ai";
import { createStreamableValue } from "@ai-sdk/rsc";
import { z } from "zod";

const SearchSuggestionSchema = z.object({
  title: z.string().describe("The short title of the suggested page"),
  path: z.string().describe("The URL path for the suggested page"),
  description: z
    .string()
    .describe(
      "A brief single sentence description of what the page contains. Keep it short and sweet."
    ),
  category: z.string().describe("The category or topic area"),
});

const SearchResponseSchema = z.object({
  suggestions: z
    .array(SearchSuggestionSchema)
    .describe("Array of suggested pages based on the search query"),
});

export async function searchSuggestions(query: string) {
  "use server";

  const stream = createStreamableValue();

  (async () => {
    try {
      const { partialObjectStream } = streamObject({
        model: "openai/gpt-oss-20b",
        providerOptions: {
          gateway: {
            order: ["groq", "baseten"],
          },
        },
        schema: SearchResponseSchema,
        prompt: `You are an AI assistant for "The Library of Everything" - a website that generates Wikipedia-style articles on any topic. 

Based on the search query "${query}", generate 5-8 relevant page suggestions that would be interesting and educational for users to explore.

Guidelines:
- Create diverse, educational topics that relate to the search query
- Use logical URL paths like /category/subcategory/topic
- Make titles engaging and descriptive
- Write helpful descriptions that explain what users will learn
- Include a variety of categories (science, history, technology, nature, etc.)
- Consider both broad and specific topics related to the query
- Make sure the paths would generate interesting, comprehensive articles

Examples of good suggestions:
- Query: "space" → "Black Holes", "Solar System", "Space Exploration", "Astronomy"
- Query: "cooking" → "French Cuisine", "Molecular Gastronomy", "Food Science", "Culinary History"
- Query: "art" → "Renaissance Art", "Digital Art", "Art Therapy", "Art History"

Generate suggestions for: "${query}"`,
      });

      for await (const partialObject of partialObjectStream) {
        stream.update(partialObject);
      }

      stream.done();
    } catch (error) {
      console.error("Search streaming error:", error);
      stream.error(error);
    }
  })();

  return { object: stream.value };
}
