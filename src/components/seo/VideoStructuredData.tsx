import { JsonLd } from "./JsonLd";

const SITE_URL = "https://apexbatch.com";

type VideoStructuredDataProps = {
  pagePath: string;
  videoId: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
};

/**
 * Makes the video discoverable in the initial server HTML even when visitors
 * choose whether to open the YouTube player.
 */
export function VideoStructuredData({
  pagePath,
  videoId,
  name,
  description,
  thumbnailUrl,
  uploadDate,
}: VideoStructuredDataProps) {
  const pageUrl = `${SITE_URL}${pagePath}`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "@id": `${pageUrl}#video-${videoId}`,
        name,
        description,
        thumbnailUrl,
        uploadDate,
        contentUrl: watchUrl,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
        isFamilyFriendly: true,
      }}
    />
  );
}
