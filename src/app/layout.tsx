import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clico.global"),
  title: "Clico | Revenue Flow OS",
  description:
    "Clico is the operating system for revenue-critical flows. Design, govern, and ship onboarding, checkout, and support with confidence.",
  applicationName: "Clico",
  keywords: [
    "Clico",
    "revenue",
    "checkout orchestration",
    "onboarding",
    "risk automation",
    "payments",
    "customer experience",
    "commerce platform",
    "fraud prevention",
    "localization",
    "global expansion",
  ],
  authors: [{ name: "Clico Team", url: "https://clico.dev" }],
  creator: "Clico",
  publisher: "Clico",
  category: "Technology",
  openGraph: {
    title: "Clico | Revenue Flow OS",
    description:
      "Design, govern, and ship onboarding, checkout, and support with confidence.",
    url: "https://clico.dev",
    siteName: "Clico",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Clico" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clico | Revenue Flow OS",
    description:
      "Design, govern, and ship onboarding, checkout, and support with confidence.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://clico.global",
    languages: {
      "en-US": "https://clico.global",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Clico",
      url: "https://clico.dev",
      logo: "https://clico.dev/og-image.svg",
      sameAs: [
        "https://www.linkedin.com/company/clico",
        "https://twitter.com/clico",
      ],
      description:
        "Clico is the operating system for revenue-critical flows, letting teams design, govern, and ship onboarding, checkout, and support with confidence.",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "hello@clico.dev",
          areaServed: "GLOBAL",
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Clico Revenue Flow OS",
      operatingSystem: "Web",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        description: "Book a live session to see Clico on your stack.",
      },
      url: "https://clico.dev",
      description:
        "Design, govern, and ship onboarding, checkout, and support with confidence using Clico's orchestration and telemetry.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Clico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clico is a revenue flow operating system that lets product, ops, and risk teams design, govern, and ship onboarding, checkout, and support without breaking the stack.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to launch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most teams calibrate and ship their first market in weeks, with automated playbooks, guardrails, and monitoring configured for their stack.",
          },
        },
        {
          "@type": "Question",
          name: "Does Clico support global compliance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Clico provides localized playbooks, tax logic, fraud controls, and audit-ready change history so you can expand quickly while staying compliant.",
          },
        },
        {
          "@type": "Question",
          name: "How does pricing work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing is tailored to your volume and markets. Book a session and we will map a plan to your goals.",
          },
        },
      ],
    },
  ];

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
