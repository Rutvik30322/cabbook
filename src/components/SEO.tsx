import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({ title, description, image, url }: SEOProps) {
  const [location] = useLocation();
  const siteTitle = "Divyakshi Cabs";
  const fullTitle = `${title} | ${siteTitle}`;
  const siteUrl = "https://www.divyakshicabs.in";
  const currentUrl = url || `${siteUrl}${location}`;
  const defaultDesc = "Divyakshi Cabs Vadodara — Book taxi, outstation cabs, bus rental, tour packages, hotels & visa assistance. Trusted travel service since 10+ years. Call 82009 09915.";
  const fullDesc = description || defaultDesc;
  const defaultImage = `${siteUrl}/new-logo.png`;
  const fullImage = image || defaultImage;

  useEffect(() => {
    // Update Document Title
    document.title = fullTitle;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", fullDesc);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", fullTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", fullDesc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", currentUrl);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", fullImage);

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", fullTitle);

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", fullDesc);

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute("content", fullImage);

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute("content", currentUrl);

  }, [fullTitle, fullDesc, fullImage, currentUrl]);

  return null; // This component doesn't render anything
}
