import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_URL = "https://www.schaller-psychotherapie.de";

export function SEO({ title, description, path = "/" }: SEOProps) {
  const url = `${SITE_URL}${path}`;

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Praxis für Psychotherapie Schaller",
    url: SITE_URL,
  };

  const jsonLdSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Praxis für Psychotherapie Schaller",
    url: SITE_URL,
  };

  const jsonLdPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(jsonLdOrg)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdSite)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdPage)}</script>
    </Helmet>
  );
}
