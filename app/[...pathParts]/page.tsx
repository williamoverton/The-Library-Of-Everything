import { StreamingContent } from "@/components/ai-elements/streaming-content";
import { PaperContent } from "@/components/paper-content";
import { use, Suspense } from "react";

function PageContent({ pathParts }: { pathParts: string[] }) {
  return <StreamingContent pathParts={pathParts} />;
}

function PageWithParams({
  params,
}: {
  params: Promise<{ pathParts: string[] }>;
}) {
  const { pathParts } = use(params);

  return (
    <div className="bg-white shadow-[0_0_0_1px_#e0e0e0,0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1),0_16px_32px_rgba(0,0,0,0.1)] mx-auto max-w-[8.5in] min-h-[11in] p-16 relative">
      <PaperContent>
        <Suspense>
          <PageContent pathParts={pathParts} />
        </Suspense>
      </PaperContent>
    </div>
  );
}

export default function Page({
  params,
}: {
  params: Promise<{ pathParts: string[] }>;
}) {
  return (
    <Suspense>
      <PageWithParams params={params} />
    </Suspense>
  );
}

// Cache for 1 hour
export const revalidate = 3600;
