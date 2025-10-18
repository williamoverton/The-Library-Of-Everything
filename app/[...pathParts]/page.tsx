import { StreamingContent } from "@/components/ai-elements/streaming-content";
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
    <div className="paper-document">
      <div className="main-content">
        <Suspense fallback={<div>Waking up scribe...</div>}>
          <PageContent pathParts={pathParts} />
        </Suspense>
      </div>
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
