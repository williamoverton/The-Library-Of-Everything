# The Library of Everything

An AI-powered encyclopedia that generates comprehensive, Wikipedia-style articles on any topic. Simply navigate to any URL path and discover detailed, interlinked content on everything from science to history, technology to nature.

## Features

- **AI-Generated Content**: Uses OpenAI's GPT-OSS-20B model to create comprehensive articles
- **Dynamic URL Routing**: Navigate to any path (e.g., `/space/black-holes`, `/cooking/french-cuisine`) to generate content
- **Intelligent Search**: AI-powered search suggestions with real-time streaming
- **Extensive Internal Linking**: Every article is heavily interlinked with related topics
- **Retro UI Design**: Windows 95-inspired interface with classic styling
- **Streaming Content**: Real-time content generation with streaming responses
- **Caching**: Long-term caching for performance optimization

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd the-library-of-everything
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
# Create .env.local file
NEXT_PUBLIC_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## How It Works

1. **URL-Based Content Generation**: Navigate to any URL path like `/category/subcategory/topic`
2. **AI Article Creation**: The system generates comprehensive Wikipedia-style articles
3. **Internal Linking**: Every concept, person, place, or term gets linked to related pages
4. **Search Functionality**: Use the search bar to find topics and get AI-generated suggestions

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **AI Integration**: Vercel AI SDK with OpenAI GPT-OSS-20B
- **Styling**: Tailwind CSS with custom Windows 95-inspired components
- **UI Components**: Radix UI primitives with shadcn/ui
- **Streaming**: Real-time content streaming with React Server Components
- **TypeScript**: Full type safety throughout the application

## Usage Examples

### Direct Navigation

- `/space/black-holes` - Learn about black holes
- `/cooking/french-cuisine` - Explore French cooking
- `/philosophy/meaning-of-life` - Philosophical discussions
- `/history/ancient-rome` - Historical content
- `/technology/artificial-intelligence` - Tech topics

### Search Functionality

- Use the search bar to find topics
- Get AI-generated suggestions for related content
- Navigate through suggested articles

## Project Structure

```
├── app/
│   ├── [...pathParts]/          # Dynamic route for content generation
│   ├── actions/                 # Server actions for search
│   ├── api/generate/            # API endpoint for content generation
│   └── page.tsx                 # Homepage with featured articles
├── components/
│   ├── ai-elements/             # AI-specific components
│   ├── ui/                      # Reusable UI components
│   ├── ai-search.tsx            # Search functionality
│   ├── navbar.tsx               # Navigation component
│   └── paper-content.tsx        # Article styling component
└── lib/
    └── utils.ts                 # Utility functions
```

## Key Components

- **StreamingContent**: Handles real-time content streaming
- **AISearch**: AI-powered search with suggestions
- **PaperContent**: Wikipedia-style article formatting
- **Navbar**: Navigation with search functionality

## API Endpoints

- `GET /api/generate?path=<topic>` - Generates AI content for a given topic
- Server actions for search suggestions with streaming responses

## Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Dependencies

- `@ai-sdk/rsc` - AI SDK for React Server Components
- `ai` - Vercel AI SDK
- `next` - Next.js framework
- `react` - React 19
- `tailwindcss` - Styling
- `lucide-react` - Icons
- `cmdk` - Command palette functionality

## License

MIT
