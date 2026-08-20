import { Metadata } from "next";
import BlogListClient from "@/components/blog/BlogListClient";

export const metadata: Metadata = {
  title: "Market Insights & Strategic Briefings | Tubudeem Investment Nigeria",
  description:
    "Explore strategic research, real estate market reports, private equity analysis, and agribusiness infrastructure intelligence across Nigeria and West Africa.",
  openGraph: {
    title: "Market Insights & Strategic Briefings | Tubudeem Investment Nigeria",
    description:
      "Capital perspectives, macroeconomic analysis, real estate growth corridors, and venture debt insights.",
    url: "https://tubudeem.com/blog",
    siteName: "Tubudeem Investment Nigeria Limited",
    images: [
      {
        url: "https://tubudeem.com/images/blog_real_estate.jpg",
        width: 1200,
        height: 630,
        alt: "Tubudeem Investment Market Intelligence",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogListClient />;
}
