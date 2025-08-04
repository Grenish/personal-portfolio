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
  title: "Blogs - Grenish Rai",
  description:
    "Read the latest blogs by Grenish Rai, a front-end developer and designer.",
  openGraph: {
    title: "Blogs - Grenish Rai",
    description: "Read the latest blogs by Grenish Rai.",
    siteName: "Grenish Rai's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs - Grenish Rai",
    description: "Read the latest blogs by Grenish Rai.",
  },
};
