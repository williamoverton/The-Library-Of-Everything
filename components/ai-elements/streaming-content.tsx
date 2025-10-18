"use client";

import { useEffect, useState } from "react";
import { Response } from "./response";

interface StreamingContentProps {
  pathParts: string[];
}

export function StreamingContent({ pathParts }: StreamingContentProps) {
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStream() {
      try {
        const path = pathParts.join("/");
        const response = await fetch(
          `/api/generate?path=${encodeURIComponent(path)}`,
          {
            cache: "no-store", // Don't cache to ensure streaming
          }
        );

        if (!response.body) {
          throw new Error("No response body");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            setContent((prev) => prev + chunk);
          }
        } finally {
          reader.releaseLock();
        }
      } catch (error) {
        console.error("Error fetching stream:", error);
        setContent("Error loading content. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchStream();
  }, [pathParts]);

  if (isLoading && content === "") {
    return <div>Loading content...</div>;
  }

  return <Response>{content}</Response>;
}
