import type { Author, BlogPost } from "@/types/blog";
import { JsonLd } from "./JsonLd";

const SITE_URL = "https://apexbatch.com";

export function ArticleStructuredData({ post, author }: { post: BlogPost; author: Author | null }) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const person = author ? { "@type": "Person", name: author.name, ...(author.bio ? { description: author.bio } : {}), ...(author.avatarUrl ? { image: author.avatarUrl } : {}), ...(author.website ? { url: author.website } : {}), sameAs: [author.socialLinkedin, author.socialTwitter].filter(Boolean) } : { "@id": `${SITE_URL}/#organization` };
  return <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", "@id": `${url}#article`, mainEntityOfPage: { "@id": `${url}#webpage` }, headline: post.title, ...(post.excerpt ? { description: post.excerpt } : {}), ...(post.featuredImage ? { image: { "@type": "ImageObject", url: post.featuredImage, contentUrl: post.featuredImage } } : {}), ...(post.publishedAt ? { datePublished: post.publishedAt.toISOString() } : {}), dateModified: post.updatedAt.toISOString(), author: person, publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: "en" }} />;
}
