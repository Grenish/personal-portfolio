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
  title: "Contact | Hire Grenish Rai - Front-End Developer",
  description:
    "Let's collaborate on your next project! Contact Grenish Rai for front-end development, React/Next.js projects, UI/UX design, or freelance opportunities. Available for hire.",
  keywords: [
    "hire front-end developer",
    "contact web developer",
    "freelance React developer",
    "Next.js developer for hire",
    "UI/UX designer contact",
    "web development services",
    "Grenish Rai contact",
    "hire JavaScript developer",
    "freelance web developer",
  ],
  openGraph: {
    title: "Contact Grenish Rai | Let's Build Something Amazing",
    description:
      "Ready to bring your ideas to life? Get in touch for front-end development, UI/UX design, or collaboration opportunities. Let's create exceptional digital experiences together.",
    url: "https://grenishrai.icu/contact",
    siteName: "Grenish Rai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Grenish Rai - Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Grenish Rai | Let's Work Together",
    description:
      "Available for front-end development projects, UI/UX design work, and collaboration. Let's build something amazing!",
    creator: "@grenish_rai",
    images: ["/og-contact.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://grenishrai.icu/contact",
  },
};
