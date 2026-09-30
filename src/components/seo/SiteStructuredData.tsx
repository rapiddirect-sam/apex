import { JsonLd } from "./JsonLd";

const SITE_URL = "https://apexbatch.com";
const LOGO_URL = "https://apex-batch-images.s3.us-east-1.amazonaws.com/apexbatch-logo2.png";
const DESCRIPTION = "ApexBatch provides precision manufacturing services for custom metal and plastic parts, supporting prototype validation, pilot production, batch manufacturing, and repeat production";

export function SiteStructuredData() {
  return <JsonLd data={[{
    "@context": "https://schema.org", "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "ApexBatch", url: SITE_URL, logo: { "@type": "ImageObject", url: LOGO_URL }, description: DESCRIPTION, email: "info@apexbatch.com", telephone: "+86 13302480516", address: { "@type": "PostalAddress", streetAddress: "2nd Floor, Building F, 52 Huangpu Road, Shangliao Community, Xinqiao Street, Baoan District", addressLocality: "Shenzhen", addressRegion: "Guangdong", addressCountry: "CN" }, areaServed: "Worldwide", sameAs: ["https://www.facebook.com/profile.php?id=61587352472100", "https://www.linkedin.com/company/apexbatch/", "https://www.youtube.com/@apexbatch_official", "https://www.instagram.com/apexbatch/", "https://x.com/ApexBatch"], contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: "info@apexbatch.com", telephone: "+86 13302480516", availableLanguage: ["English", "Chinese"], areaServed: "Worldwide" },
  }, { "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "ApexBatch", url: SITE_URL, description: DESCRIPTION, publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: "en" }]} />;
}
