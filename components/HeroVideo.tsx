type HeroVideoProps = {
  className?: string;
};

/**
 * Arka plan: `public/videos/hero.mp4` ve isteğe bağlı `hero.webm`.
 * Varsayılan `min-h-[100svh]`: en az bir tam ekran; ana sayfada footer ilk karede altta kalır.
 */
export function HeroVideo({ className }: HeroVideoProps) {
  return (
    <div
      className={[
        "relative w-full min-h-[100svh] overflow-hidden bg-black",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Arka plan videosu"
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
