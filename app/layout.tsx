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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
