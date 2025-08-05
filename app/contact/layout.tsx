import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function ContactLayout({
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
  title: "Contact - Grenish Rai",
  description:
    "Get in touch with Grenish Rai, a front-end developer and designer.",
  openGraph: {
    title: "Contact - Grenish Rai",
    description: "Get in touch with Grenish Rai.",
    siteName: "Grenish Rai's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Grenish Rai",
    description: "Get in touch with Grenish Rai.",
  },
};
