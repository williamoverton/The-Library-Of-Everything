import Link from "next/link";
import { BookOpen } from "lucide-react";
import { AISearch } from "@/components/ai-search";

export function Navbar() {
  return (
    <nav className="bg-gray-300 border-2 border-gray-400 border-t-gray-100 border-l-gray-100 sticky top-0 z-50 shadow-[inset_1px_1px_0px_0px_#ffffff,inset_-1px_-1px_0px_0px_#808080]">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-center h-12">
          {/* Logo with 90s Icon - Positioned absolutely to the left */}
          <div className="absolute left-4 flex items-center space-x-2">
            {/* Book Icon */}
            <BookOpen className="w-6 h-6 text-black" />
            <Link
              href="/"
              className="text-lg font-bold text-black hover:text-blue-800 transition-colors font-serif"
            >
              The Library Of Everything
            </Link>
          </div>

          {/* Search Bar - Centered */}
          <div className="flex justify-center">
            <AISearch />
          </div>
        </div>
      </div>
    </nav>
  );
}
