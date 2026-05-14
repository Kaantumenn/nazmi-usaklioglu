import type { Metadata } from "next";
import { MusicPlatforms } from "@/components/MusicPlatforms";

export const metadata: Metadata = {
  title: "Müzik",
};

/** YouTube klibi kimlikleri (watch?v= sonrası) */
const MUSIC_VIDEOS = [
  { id: "NqgjIwf2fhk", title: "Klip 1" },
  { id: "lnPtjOFegUY", title: "Klip 2" },
  { id: "7TNTkuPQ8kY", title: "Klip 3" },
] as const;

function MusicVideos() {
  const [first, ...rest] = MUSIC_VIDEOS;
  return (
    <div className="flex flex-col gap-10 md:gap-12">
      <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${first.id}?rel=0`}
          title={first.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="eager"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {rest.map((video) => (
          <div
            key={video.id}
            className="relative aspect-video w-full min-w-0 overflow-hidden"
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MuzikPage() {
  return (
    <main className="min-h-dvh bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-[max(6.5rem,calc(4.25rem+env(safe-area-inset-top)))] md:px-8 md:pb-24 md:pt-36">
        <MusicVideos />
        <h2 className="mb-10 mt-14 text-center text-2xl font-bold tracking-tight md:mb-12 md:mt-16 md:text-3xl">
          Platformlar
        </h2>
        <MusicPlatforms />
      </div>
    </main>
  );
}
