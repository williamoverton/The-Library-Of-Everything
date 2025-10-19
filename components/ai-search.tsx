"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { readStreamableValue } from "@ai-sdk/rsc";
import { searchSuggestions } from "@/app/actions/search";

interface SearchSuggestion {
  title: string;
  path: string;
  description: string;
  category: string;
}

export function AISearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = async () => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    console.log("Searching for:", query);
    setIsLoading(true);
    setSuggestions([]);
    setOpen(true);

    try {
      const { object } = await searchSuggestions(query);

      for await (const partialObject of readStreamableValue(object)) {
        if (partialObject && partialObject.suggestions) {
          console.log("Partial suggestions:", partialObject.suggestions);
          setSuggestions(partialObject.suggestions);
        }
      }
    } catch (error) {
      console.error("Search error:", error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-3">
      <div className="relative" ref={containerRef}>
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder="Search for anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => {
            if (suggestions.length > 0) {
              setOpen(true);
            }
          }}
          className="pl-12 pr-4 py-3 w-96 text-base"
        />
        {open && (suggestions.length > 0 || isLoading) && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 w-[32rem] max-h-[24rem] overflow-y-auto">
            <Command>
              <CommandList>
                {isLoading && (
                  <div className="p-4 text-center text-gray-500">
                    <Loader2 className="h-5 w-5 animate-spin mx-auto mb-2" />
                    <p className="text-sm">Generating suggestions...</p>
                  </div>
                )}
                {!isLoading && suggestions.length === 0 && (
                  <div className="p-4 text-center text-gray-500">
                    <p className="text-sm">No suggestions found.</p>
                  </div>
                )}
                {!isLoading && suggestions.length > 0 && (
                  <CommandGroup>
                    {suggestions.map((suggestion, index) => (
                      <CommandItem
                        key={index}
                        value={suggestion.title}
                        onSelect={() => {
                          setOpen(false);
                          setQuery("");
                        }}
                        asChild
                        className="p-0"
                      >
                        <Link
                          href={suggestion.path}
                          className="block w-full p-3 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex flex-col space-y-1.5">
                            <div className="flex items-start justify-between gap-3">
                              <span className="font-medium text-sm text-gray-900 leading-tight">
                                {suggestion.title}
                              </span>
                              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full flex-shrink-0 font-medium">
                                {suggestion.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {suggestion.description}
                            </p>
                          </div>
                        </Link>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            </Command>
          </div>
        )}
      </div>
      <Button
        onClick={handleSearch}
        disabled={isLoading || !query.trim()}
        className="px-6 py-3 h-auto"
        size="lg"
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Search className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
