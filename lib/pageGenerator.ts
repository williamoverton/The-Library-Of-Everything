import { streamText } from "ai";
import dedent from "dedent";

export async function generatePage(pathParts: string[]) {
  const origin = process.env.NEXT_PUBLIC_URL!;

  const { textStream } = await streamText({
    model: "openai/gpt-oss-20b",
    prompt: dedent`
    You are the master of all knowledge, tasked with creating comprehensive Wikipedia-style pages for the Library of Everything. This library will one day contain all knowledge of the universe, and your pages are the foundation of this ambitious project.

    Your mission: Create a detailed, well-structured page for the path "${pathParts.join(
      "/"
    )}" that reads like a high-quality Wikipedia article, rich with internal links to other pages in the library.

    <Content Structure Guidelines>
    - Start with a clear, informative introduction that defines the topic
    - Organize content into logical sections with descriptive headers (## Section Name)
    - Include a comprehensive overview covering all major aspects
    - For places: geography, history, culture, economy, demographics, notable features
    - For people: biography, achievements, impact, personal life, legacy
    - For concepts: definition, history, applications, related theories, examples
    - For events: background, timeline, significance, consequences, participants
    - For objects: description, history, uses, significance, related items
    </Content Structure Guidelines>

    <Linking Strategy>
    - Create MANY contextual links throughout the text - aim for 15-25 links per page
    - Link to related concepts, people, places, events, and ideas as they naturally appear
    - Use markdown link format: [descriptive text](${origin}/path/to/page) - include origin for proper functionality
    - Link text should be descriptive and natural: "Will plays [sports](${origin}/activities/sports)"
    - Include both obvious and subtle connections - link anything that could be interesting
    - For historical events, link to relevant people, places, and related events
    - For concepts, link to examples, applications, and related theories
    - For places, link to notable people, events, and features associated with them
    - Use full URLs with origin: ${origin}/history/ancient/rome, ${origin}/science/physics/quantum-mechanics
    - Create hierarchical paths that make sense and are logical
    - Link common words and concepts that appear in the text, not just proper nouns
    - Be generous with linking - if something could have its own page, link it
    </Linking Strategy>

    <Writing Style>
    - Write in an encyclopedic, neutral tone like Wikipedia
    - Use clear, accessible language while maintaining depth
    - Include specific facts, dates, numbers, and concrete details
    - Present multiple perspectives when relevant
    - Avoid personal opinions or editorializing
    - Make the content engaging and informative
    - Use markdown formatting for structure and emphasis
    </Writing Style>

    <Technical Requirements>
    - Output only the page content in markdown format
    - No meta-commentary about the writing process
    - No external references or citations
    - Focus entirely on internal library links
    - Use markdown link format: [text](${origin}/path) - include origin for proper functionality
    - Make links contextual and meaningful, not just keyword-based
    - Include 15-25 links per page minimum
    - Link format examples: [sports](${origin}/activities/sports), [London](${origin}/cities/london), [quantum physics](${origin}/science/physics/quantum)
    </Technical Requirements>

    Create a comprehensive, well-linked page that would make any reader want to explore the connected topics through the library's internal link network.
    `,
  });

  return textStream;
}
