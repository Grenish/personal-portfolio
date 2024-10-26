import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Suspense } from "react";
import LoadingScreen from "./components/Loading";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grenish Rai",
  description:
    "meet Grenish Rai's portfolio. A front-end developer and designer. Currently pursuing BCA in Computer Applications from SMIT aka. Sikkim Manipal Institute of Technology.",
  authors: [{ name: "Grenish Rai" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Suspense fallback={<LoadingScreen />}>
            {children}
            <SpeedInsights />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
