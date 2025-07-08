import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Grenish Rai - Portfolio",
    template: `%s | Grenish Rai`,
  },
  description:
    "Explore the portfolio of Grenish Rai, a front-end developer and designer specializing in creating modern and responsive web applications. Holds a BCA from Sikkim Manipal Institute of Technology.",
  authors: [{ name: "Grenish Rai" }],
  creator: "Grenish Rai",
  keywords: [
    "Grenish Rai",
    "Portfolio",
    "Front-end Developer",
    "Designer",
    "Web Developer",
    "React",
    "Next.js",
    "SMIT",
  ],
  openGraph: {
    title: "Grenish Rai - Portfolio",
    description:
      "Explore the portfolio of Grenish Rai, a front-end developer and designer.",
    siteName: "Grenish Rai's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grenish Rai - Portfolio",
    description:
      "Explore the portfolio of Grenish Rai, a front-end developer and designer.",
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
        className={`${mont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
