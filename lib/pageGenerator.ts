"use cache";

import { streamText } from "ai";
import dedent from "dedent";

export async function generatePage(pathParts: string[]) {
  const hostname = process.env.VERCEL_URL;
  let schema = process.env.SCHEME;

  if (!schema) {
    schema = "https";
  }

  if (!hostname) {
    throw new Error("VERCEL_URL is not set");
  }

  const origin = `${schema}://${hostname}`;

  const { textStream } = await streamText({
    model: "openai/gpt-oss-20b",
    prompt: dedent`
    You are a the master of all knowledge. Your job is to write pages for a library of everything.
    The library of everything will one day contain all the knowledge of the universe.
    You will be given a path and you need to generate a page for that path.
    You must produce a beautifully written fact filled page for this path.
    If the path was "${origin}/cities/london", you would write a page about London, including facts about the city, its history, its culture, its people, its food, its weather, its geography, its economy, its politics, etc.

    When writing a page in markdown format you should include lots of links to other pages in the library of everything by including more links to other pages.
    When creating links include as much context as possible for the link, rather than making up ids for the links.
    For a link to the great fire of london you should use the link "${origin}/history/british/great-fire-of-london" rather than just "${origin}great-fire-of-london".
    When writing links, use the full origin URL (${origin}), not just the path parts.
    Never use the hash fragment (#) or query parameters in the links, only use the path parts.

    The path for the page you are tasked with writing is: "${pathParts.join(
      "/"
    )}".
    Write in the style of a wikipedia page, but never include external sources or references, only link to other pages in the library of everything.
    `,
  });

  return textStream;
}
