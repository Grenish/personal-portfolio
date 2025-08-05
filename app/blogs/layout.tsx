import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`${mont.className} antialiased relative bg-gray-900 text-white`}
    >
      {children}
    </main>
  );
}

export const metadata: Metadata = {
  title: "Blog | Web Development Insights by Grenish Rai",
  description:
    "Explore articles on front-end development, React, Next.js, UI/UX design, and modern web technologies. Tips, tutorials, and insights from a passionate developer's journey.",
  keywords: [
    "web development blog",
    "front-end development articles",
    "React tutorials",
    "Next.js guides",
    "UI/UX design tips",
    "JavaScript blog",
    "TypeScript articles",
    "web development insights",
    "coding tutorials",
    "Grenish Rai blog",
  ],
  openGraph: {
    title: "Blog | Web Development Insights - Grenish Rai",
    description:
      "Dive into articles about React, Next.js, UI/UX design, and modern web development. Learn from real-world experiences and practical tutorials.",
    url: "https://grenishrai.icu/blog",
    siteName: "Grenish Rai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-blogs.png",
        width: 1200,
        height: 630,
        alt: "Grenish Rai's Web Development Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Web Development Insights - Grenish Rai",
    description:
      "Articles on React, Next.js, UI/UX design, and modern web development. Tips and tutorials for developers.",
    creator: "@grenish_rai",
    images: ["/og-blogs.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://grenishrai.icu/blog",
  },
};
