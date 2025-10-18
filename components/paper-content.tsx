import { cn } from "@/lib/utils";

interface PaperContentProps {
  children: React.ReactNode;
  className?: string;
}

export function PaperContent({ children, className }: PaperContentProps) {
  return (
    <div
      className={cn(
        // Typography styles
        "[&_h1]:font-serif [&_h1]:font-normal [&_h1]:leading-tight [&_h1]:my-6 [&_h1]:py-0 [&_h1]:px-0 [&_h1]:text-[#2c2c2c] [&_h1]:text-3xl [&_h1]:text-center [&_h1]:mt-0 [&_h1]:mb-4 [&_h1]:border-b-2 [&_h1]:border-[#e0e0e0] [&_h1]:pb-2",
        "[&_h2]:font-serif [&_h2]:font-normal [&_h2]:leading-tight [&_h2]:my-6 [&_h2]:py-0 [&_h2]:px-0 [&_h2]:text-[#2c2c2c] [&_h2]:text-2xl [&_h2]:border-b [&_h2]:border-[#e0e0e0] [&_h2]:pb-1",
        "[&_h3]:font-serif [&_h3]:font-normal [&_h3]:leading-tight [&_h3]:my-6 [&_h3]:py-0 [&_h3]:px-0 [&_h3]:text-[#2c2c2c] [&_h3]:text-xl",
        "[&_h4]:font-serif [&_h4]:font-normal [&_h4]:leading-tight [&_h4]:my-6 [&_h4]:py-0 [&_h4]:px-0 [&_h4]:text-[#2c2c2c]",
        "[&_h5]:font-serif [&_h5]:font-normal [&_h5]:leading-tight [&_h5]:my-6 [&_h5]:py-0 [&_h5]:px-0 [&_h5]:text-[#2c2c2c]",
        "[&_h6]:font-serif [&_h6]:font-normal [&_h6]:leading-tight [&_h6]:my-6 [&_h6]:py-0 [&_h6]:px-0 [&_h6]:text-[#2c2c2c]",
        // Paragraph styles
        "[&_p]:my-0 [&_p]:mb-4 [&_p]:indent-6 [&_p:first-child]:indent-0",
        // Link styles
        "[&_a]:text-[#1a73e8] [&_a]:no-underline [&_a]:border-b [&_a]:border-dotted [&_a]:border-[#1a73e8] [&_a:visited]:text-[#6a1b9a] [&_a:visited]:border-[#6a1b9a] [&_a:hover]:underline [&_a:hover]:border-solid",
        // List styles
        "[&_ul]:my-4 [&_ul]:pl-8 [&_ol]:my-4 [&_ol]:pl-8 [&_li]:my-1",
        // Blockquote styles
        "[&_blockquote]:my-4 [&_blockquote]:mx-8 [&_blockquote]:py-2 [&_blockquote]:px-4 [&_blockquote]:border-l-4 [&_blockquote]:border-[#e0e0e0] [&_blockquote]:bg-[#fafafa] [&_blockquote]:italic",
        // Code styles
        "[&_code]:bg-[#f5f5f5] [&_code]:border [&_code]:border-[#e0e0e0] [&_code]:rounded-sm [&_code]:font-mono [&_code]:text-sm [&_code]:py-0.5 [&_code]:px-1",
        "[&_pre]:bg-[#f5f5f5] [&_pre]:border [&_pre]:border-[#e0e0e0] [&_pre]:rounded [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-snug [&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:p-4",
        className
      )}
    >
      {children}
    </div>
  );
}
