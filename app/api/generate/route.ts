import { streamText } from "ai";
import dedent from "dedent";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pathParts = searchParams.get("path")?.split("/") || [];

  const origin = process.env.NEXT_PUBLIC_URL!;

  const { textStream } = await streamText({
    model: "openai/gpt-oss-20b",
    prompt: dedent`
    You are writing a Wikipedia-style article for the Library of Everything. Your task is to create a comprehensive page about "${pathParts.join(
      "/"
    )}" that is heavily interlinked with other pages in the library.

    WRITING FORMAT: Write exactly like Wikipedia with extensive internal linking. Every concept, person, place, theory, or term that could have its own page MUST be linked.

    EXAMPLE OF PROPER LINKING:
    "Neuronal plasticity refers to the [brain](${origin}/anatomy/brain)'s ability to [rewire](${origin}/neuroscience/rewiring) its [neural circuits](${origin}/neuroscience/neural-circuits) in response to [environmental stimuli](${origin}/psychology/environmental-stimuli), [learning](${origin}/psychology/learning), or [brain injury](${origin}/medicine/brain-injury). This process involves [synaptic plasticity](${origin}/neuroscience/synaptic-plasticity) and can be studied through [long-term potentiation](${origin}/neuroscience/long-term-potentiation) and [long-term depression](${origin}/neuroscience/long-term-depression)."

    LINKING RULES:
    1. Link every noun, concept, person, place, or term that could have its own page
    2. Use descriptive link text that explains what the linked page contains
    3. Format: [descriptive text](${origin}/category/subcategory/topic)
    4. Create logical hierarchical paths
    5. Link multiple concepts per sentence
    6. Link common terms like [science](${origin}/academic/sciences), [research](${origin}/academic/research), [studies](${origin}/academic/studies)

    CONTENT STRUCTURE:
    - Start with a clear introduction that defines the topic
    - Use ## headers for major sections
    - Include comprehensive coverage of the subject
    - Write in an encyclopedic, neutral tone
    - Include specific facts, dates, and details
    - Present multiple perspectives when relevant

    MANDATORY: Every sentence must contain at least 2-3 links. Link concepts like Wikipedia does. Do not write any sentence without links.

    Create a detailed, well-linked Wikipedia-style article about "${pathParts.join(
      "/"
    )}" with extensive internal linking throughout.

    Always include a title at the beginning of the page.
    `,
  });

  return new Response(textStream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
}
