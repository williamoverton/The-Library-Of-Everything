import Link from "next/link";
import { Navbar } from "@/components/navbar";

const SUGGESTED_LINKS = [
  {
    title: "The History of the Universe",
    link: "/history/the-history-of-the-universe",
    category: "History",
    description: "From the Big Bang to the present day",
  },
  {
    title: "Serverless Computing",
    link: "/technology/serverless-computing",
    category: "Technology",
    description: "The future of cloud computing",
  },
  {
    title: "Online Gaming",
    link: "/entertainment/online-gaming",
    category: "Entertainment",
    description: "Virtual worlds and digital adventures",
  },
  {
    title: "The Great British Bake Off",
    link: "/entertainment/television/the-great-british-bake-off",
    category: "Television",
    description: "Britain's most beloved baking competition",
  },
  {
    title: "Rainbows",
    link: "/nature/rainbows",
    category: "Nature",
    description: "Nature's most beautiful optical phenomenon",
  },
  {
    title: "Dachshunds",
    link: "/animals/dogs/dachshunds",
    category: "Animals",
    description: "The lovable sausage dogs",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300">
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-6xl mt-4">
        {/* Welcome Panel */}
        <div className="mb-8 p-6 bg-white border-2 border-gray-500 border-t-white border-l-white shadow-[inset_1px_1px_0px_0px_#ffffff,inset_-1px_-1px_0px_0px_#808080] font-sans">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black mb-4 font-sans">
              The Library of Everything
            </h1>
            <p className="text-lg text-gray-700 mb-6 font-sans">
              Your AI-powered encyclopedia. Search for any topic and discover
              comprehensive, AI-generated articles on everything from science to
              history, technology to nature.
            </p>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-8 bg-white border-2 border-gray-500 border-t-white border-l-white shadow-[inset_1px_1px_0px_0px_#ffffff,inset_-1px_-1px_0px_0px_#808080]">
          {/* Title Bar */}
          <div className="flex items-center justify-between px-3 py-2 bg-blue-900 text-white font-sans text-xs font-bold">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-600 border border-blue-800"></div>
              <span>Featured Articles</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SUGGESTED_LINKS.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  className="block p-4 hover:bg-blue-100 hover:border-blue-500 bg-white border border-gray-500 font-sans"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-1 bg-blue-900 text-white">
                      {link.category}
                    </span>
                    <div className="text-gray-400 text-xs">→</div>
                  </div>
                  <h3 className="text-sm font-bold text-black mb-2">
                    {link.title}
                  </h3>
                  <p className="text-xs text-gray-600">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Start Panel */}
        <div className="mb-8 bg-white border-2 border-gray-500 border-t-white border-l-white shadow-[inset_1px_1px_0px_0px_#ffffff,inset_-1px_-1px_0px_0px_#808080]">
          {/* Title Bar */}
          <div className="flex items-center justify-between px-3 py-2 bg-blue-900 text-white font-sans text-xs font-bold">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-600 border border-green-800"></div>
              <span>Quick Start Guide</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-sm text-gray-700 mb-4 font-sans">
              Try navigating to any URL path to generate AI content:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 bg-gray-300 border border-gray-500 font-sans">
                <div className="text-xs font-bold text-black mb-2">
                  Space & Astronomy
                </div>
                <div className="text-xs font-mono text-gray-700">
                  /space/black-holes
                </div>
                <div className="text-xs font-mono text-gray-700">
                  /space/solar-system
                </div>
                <div className="text-xs font-mono text-gray-700">
                  /space/space-exploration
                </div>
              </div>
              <div className="p-3 bg-gray-300 border border-gray-500 font-sans">
                <div className="text-xs font-bold text-black mb-2">
                  Food & Cooking
                </div>
                <div className="text-xs font-mono text-gray-700">
                  /cooking/perfect-pasta
                </div>
                <div className="text-xs font-mono text-gray-700">
                  /cooking/french-cuisine
                </div>
                <div className="text-xs font-mono text-gray-700">
                  /cooking/molecular-gastronomy
                </div>
              </div>
              <div className="p-3 bg-gray-300 border border-gray-500 font-sans">
                <div className="text-xs font-bold text-black mb-2">
                  Philosophy & Ideas
                </div>
                <div className="text-xs font-mono text-gray-700">
                  /philosophy/meaning-of-life
                </div>
                <div className="text-xs font-mono text-gray-700">
                  /philosophy/ethics
                </div>
                <div className="text-xs font-mono text-gray-700">
                  /philosophy/logic
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Panel */}
        <div className="bg-white border-2 border-gray-500 border-t-white border-l-white shadow-[inset_1px_1px_0px_0px_#ffffff,inset_-1px_-1px_0px_0px_#808080]">
          {/* Title Bar */}
          <div className="flex items-center justify-between px-3 py-2 bg-blue-900 text-white font-sans text-xs font-bold">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-600 border border-purple-800"></div>
              <span>About The Library</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-black mb-3 font-sans">
                  How It Works
                </h3>
                <p className="text-xs text-gray-700 mb-3 font-sans">
                  Simply navigate to any URL path and our AI will instantly
                  generate comprehensive, Wikipedia-style articles on any topic
                  you choose.
                </p>
                <p className="text-xs text-gray-700 font-sans">
                  No registration required. No limits. Just pure knowledge at
                  your fingertips.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-black mb-3 font-sans">
                  Topics Covered
                </h3>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Science",
                    "History",
                    "Technology",
                    "Nature",
                    "Art",
                    "Philosophy",
                    "Cooking",
                    "Sports",
                  ].map((topic) => (
                    <Link
                      key={topic}
                      className="text-xs px-2 py-1 bg-gray-300 border border-gray-500 font-sans"
                      href={`/general/topics/${topic
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      {topic}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
