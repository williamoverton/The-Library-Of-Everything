import { generatePage } from "@/lib/pageGenerator";
import { StreamingContent } from "@/components/ai-elements/streaming-content";
import { use, Suspense } from "react";

async function PageContent({ pathParts }: { pathParts: string[] }) {
  const pageContent = await generatePage(pathParts);
  return <StreamingContent stream={pageContent} />;
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
        <h1>Path: {pathParts.join("/")}</h1>
        <Suspense fallback={<div>Loading content...</div>}>
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
    <Suspense fallback={<div>Loading page...</div>}>
      <PageWithParams params={params} />
    </Suspense>
  );
}
