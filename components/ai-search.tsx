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

    setIsLoading(true);
    setSuggestions([]);
    setOpen(true);

    try {
      const { object } = await searchSuggestions(query);

      for await (const partialObject of readStreamableValue(object)) {
        if (partialObject && partialObject.suggestions) {
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
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="flex gap-3 items-center">
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
          onBlur={() => {
            // Small delay to allow clicking on suggestions
            setTimeout(() => setOpen(false), 150);
          }}
          className="pl-10 pr-2 py-1 w-96 text-sm h-8 bg-white border-2 border-gray-400 border-t-gray-100 border-l-gray-100 focus:border-blue-600 focus:outline-none shadow-[inset_1px_1px_0px_0px_#808080,inset_-1px_-1px_0px_0px_#ffffff] font-serif"
          aria-label="Search for topics"
          aria-expanded={open}
          aria-haspopup="listbox"
        />
        {open && (suggestions.length > 0 || isLoading) && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-gray-300 border-2 border-gray-400 border-t-gray-100 border-l-gray-100 z-50 w-[32rem] max-h-[24rem] overflow-y-auto shadow-[inset_1px_1px_0px_0px_#ffffff,inset_-1px_-1px_0px_0px_#808080]">
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
                          className="block w-full p-2 hover:bg-blue-600 hover:text-white transition-colors border-b border-gray-400 font-serif"
                        >
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-start justify-between gap-2">
                              <span className="font-bold text-sm text-black leading-tight">
                                {suggestion.title}
                              </span>
                              <span className="text-xs text-blue-800 bg-blue-200 px-1 py-0.5 border border-blue-400 flex-shrink-0 font-bold">
                                {suggestion.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-700 leading-tight">
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
      {query.trim() && (
        <Button
          onClick={handleSearch}
          disabled={isLoading}
          className="px-3 py-1 h-8 bg-gray-300 border-2 border-gray-400 border-t-gray-100 border-l-gray-100 text-black hover:bg-gray-200 active:bg-gray-400 active:border-gray-600 active:border-t-gray-400 active:border-l-gray-400 font-medium transition-none shadow-[inset_1px_1px_0px_0px_#ffffff,inset_-1px_-1px_0px_0px_#808080] font-serif"
          size="sm"
        >
          {isLoading ? (
            <Loader2 className="h-3 w-3 animate-spin" />
          ) : (
            <Search className="h-3 w-3" />
          )}
        </Button>
      )}
    </div>
  );
}
