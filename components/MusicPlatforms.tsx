import Image from "next/image";

/**
 * Görseller: `public/music_logo/` — sadece logo görselleri (tıklanabilir).
 */
const platforms = [
  { name: "Spotify", href: "https://open.spotify.com/", src: "/music_logo/spotify.png" },
  { name: "Apple Music", href: "https://music.apple.com/", src: "/music_logo/apple_music.png" },
  { name: "YouTube", href: "https://www.youtube.com/@NAZM%C4%B0U%C5%9EAKLIO%C4%9ELU", src: "/music_logo/youtube.png" },
  { name: "Shazam", href: "https://www.shazam.com/", src: "/music_logo/shazam.png" },
  { name: "YouTube Music", href: "https://music.youtube.com/", src: "/music_logo/youtube_music.png" },
  { name: "fizy", href: "https://www.fizy.com/", src: "/music_logo/fizy.png" },
] as const;

export function MusicPlatforms() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 px-2 md:gap-x-10">
      {platforms.map((p) => (
        <li key={p.name}>
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.name}
            className="inline-block transition-opacity hover:opacity-85"
          >
            <Image
              src={p.src}
              alt=""
              width={400}
              height={120}
              className="h-16 w-auto max-h-20 max-w-[min(100%,20rem)] object-contain md:h-20 md:max-h-24 md:max-w-[22rem]"
              sizes="(max-width: 768px) 320px, 400px"
              unoptimized
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
