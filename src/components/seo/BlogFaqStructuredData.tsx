import { extractBlogFaqItems } from "@/lib/blogContentEnhance";
import { JsonLd } from "./JsonLd";

export function BlogFaqStructuredData({ content }: { content: string }) {
  const items = extractBlogFaqItems(content);

  if (items.length === 0) return null;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}
