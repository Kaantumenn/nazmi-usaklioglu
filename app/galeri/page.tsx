import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galeri",
};

export default function GaleriPage() {
  return (
    <div className="min-h-dvh w-full bg-black text-white">
      <div className="mx-auto w-full max-w-[1920px] px-4 pt-[max(6.5rem,calc(4.25rem+env(safe-area-inset-top)))] pb-6 sm:px-8 md:px-10 md:pb-10 md:pt-36">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:mb-6 md:text-[2.125rem] lg:text-4xl">
          Galeri
        </h1>
        <GalleryGrid />
      </div>
    </div>
  );
}
