import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Library Of Everything",
  description: "AI-generated content on any topic. Pages created on-demand.",
  robots: {
    // Tell search engines not to index generated pages.
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
