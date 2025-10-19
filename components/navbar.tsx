import Link from "next/link";
import { AISearch } from "@/components/ai-search";

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              The Library Of Everything
            </Link>
          </div>

          {/* AI Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <AISearch />
          </div>

          {/* Home Link */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
