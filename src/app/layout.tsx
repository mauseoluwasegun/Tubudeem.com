import type { Metadata } from "next";
import "./globals.css";
import { COMPANY_CONFIG } from "@/lib/config";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tubudeem.com"),
  title: `${COMPANY_CONFIG.name} | Investing in Opportunities. Building Lasting Value.`,
  description: `${COMPANY_CONFIG.name} identifies opportunities across real estate, businesses, financial markets, agriculture and strategic investments in Nigeria and West Africa.`,
  keywords: [
    "Tubudeem Investment Nigeria Limited",
    "Tubudeem Investment",
    "Real Estate Investment Nigeria",
    "Business Expansion Capital Lagos",
    "Financial Markets Nigeria",
    "Agricultural Investments Lagos",
    "Lawson Street Onikan",
    "RC 6907732",
  ],
  authors: [{ name: COMPANY_CONFIG.name }],
  creator: COMPANY_CONFIG.name,
  publisher: COMPANY_CONFIG.name,
  openGraph: {
    title: `${COMPANY_CONFIG.name} | Strategic Capital & Growth`,
    description: COMPANY_CONFIG.supportingMessage,
    siteName: COMPANY_CONFIG.name,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/hero_architecture.jpg",
        width: 1200,
        height: 630,
        alt: COMPANY_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_CONFIG.name} | Building Lasting Value`,
    description: COMPANY_CONFIG.supportingMessage,
    images: ["/images/hero_architecture.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InvestmentOrDeposit",
    name: COMPANY_CONFIG.name,
    legalName: COMPANY_CONFIG.name,
    identifier: COMPANY_CONFIG.rcNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 49, Lawson Street, Off Moloney, Onikan",
      addressLocality: "Lagos State",
      addressCountry: "NG",
    },
    description: COMPANY_CONFIG.supportingMessage,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-ivory text-brand-body min-h-screen flex flex-col font-sans selection:bg-brand-purple selection:text-brand-ivory antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
