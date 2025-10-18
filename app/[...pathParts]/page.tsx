import { StreamingContent } from "@/components/ai-elements/streaming-content";
import { PaperContent } from "@/components/paper-content";
import { use } from "react";
import { after } from "next/server";

// Force dynamic rendering.
export const dynamic = "force-dynamic";

export default function Page({
  params,
}: {
  params: Promise<{ pathParts: string[] }>;
}) {
  const { pathParts } = use(params);

  return (
    <div className="bg-white shadow-lg border border-gray-200 mx-auto max-w-[8.5in] min-h-[11in] p-16 relative">
      <PaperContent>
        <StreamingContent pathParts={pathParts} />
      </PaperContent>
    </div>
  );
}

// Cache for 1 year
export const revalidate = 31536000;
