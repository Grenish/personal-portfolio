import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grenish Rai | Full Stack Developer & UI/UX Designer Portfolio",
    template: `%s - Grenish Rai`,
  },
  description:
    "Full stack developer and UI/UX designer crafting exceptional digital experiences with React, Next.js, Node.js, and modern web technologies. BCA graduate from Sikkim Manipal Institute of Technology. View projects, skills, and professional journey.",
  authors: [{ name: "Grenish Rai" }],
  creator: "Grenish Rai",
  keywords: [
    "Grenish Rai",
    "Full Stack Developer",
    "Front-end Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript",
    "Portfolio",
    "SMIT",
    "Sikkim Manipal",
    "BCA Graduate",
    "Web Design",
    "Responsive Design",
    "Modern Web Applications",
    "Frontend Engineer",
    "Backend Engineer",
    "Full Stack Engineer",
  ],
  openGraph: {
    title: "Grenish Rai | Full Stack Developer & UI/UX Designer",
    description:
      "Passionate full stack developer and designer creating modern, responsive web applications. Explore my portfolio showcasing React, Next.js, Node.js projects and design work.",
    url: "https://grenishrai.icu",
    siteName: "Grenish Rai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Grenish Rai - Full Stack Developer & Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grenish Rai | Full Stack Developer & UI/UX Designer",
    description:
      "Passionate about creating exceptional digital experiences with React, Next.js, Node.js, and modern web technologies. View my portfolio and projects.",
    creator: "@grenishrai",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://grenishrai.icu", // Add your actual domain
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mont.className} antialiased relative bg-gray-900 text-white`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
