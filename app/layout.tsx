import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Nazmi Uşakoğlu",
    template: "%s | Nazmi Uşakoğlu",
  },
  description: "Nazmi Uşakoğlu — resmî site",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-dvh bg-black font-sans text-white">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
