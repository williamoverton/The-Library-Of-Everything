"use client";

import { useEffect, useState } from "react";
import { Response } from "./response";

interface StreamingContentProps {
  stream: AsyncIterable<string>;
}

export function StreamingContent({ stream }: StreamingContentProps) {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    async function processStream() {
      for await (const chunk of stream) {
        setContent((prev) => prev + chunk);
      }
    }
    processStream();
  }, [stream]);

  return <Response>{content}</Response>;
}
