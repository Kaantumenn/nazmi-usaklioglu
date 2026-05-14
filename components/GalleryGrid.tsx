import Image from "next/image";

/** Görseller: `public/images/nazmi-1.jpeg` … `nazmi-6.jpeg` */
const GALLERY_IMAGES = [
  {
    src: "/images/nazmi-1.jpeg",
    alt: "Nazmi Uşakoğlu",
    layout: "md:col-span-1 md:row-start-1",
  },
  {
    src: "/images/nazmi-2.jpeg",
    alt: "Nazmi Uşakoğlu",
    layout: "md:col-span-2 md:row-start-1",
  },
  {
    src: "/images/nazmi-3.jpeg",
    alt: "Nazmi Uşakoğlu",
    layout: "md:col-span-2 md:row-start-2",
  },
  {
    src: "/images/nazmi-4.jpeg",
    alt: "Nazmi Uşakoğlu",
    layout: "md:col-span-1 md:row-start-2",
  },
  {
    src: "/images/nazmi-5.jpeg",
    alt: "Nazmi Uşakoğlu",
    layout: "md:col-span-1 md:row-start-3",
    /** Alt sol: kadrajı hafif yukarı / merkez */
    imageClass: "object-cover object-[50%_42%]",
  },
  {
    src: "/images/nazmi-6.jpeg",
    alt: "Nazmi Uşakoğlu",
    layout: "md:col-span-2 md:row-start-3",
    /** Alt sağ (geniş): kişi fotoğrafta solda; kırpmayı % ile kaydırıp kutuda daha dengeli göster */
    imageClass: "object-cover object-[30%_center]",
  },
] as const;

type GalleryItem = (typeof GALLERY_IMAGES)[number];

export function GalleryGrid() {
  return (
    <div className="mx-auto w-full max-w-[1920px]">
      <div
        className="
          grid grid-cols-1 gap-[10px] bg-black
          md:grid-cols-3 md:grid-rows-[1fr_1fr_1fr] md:gap-[10px]
          md:min-h-[min(92vh,calc(100svh-10.5rem))]
          md:max-h-[min(96vh,calc(100svh-8rem))]
        "
      >
        {GALLERY_IMAGES.map((item: GalleryItem, index) => (
          <figure
            key={item.src}
            className={[
              "relative min-h-[28svh] w-full min-w-0 overflow-hidden bg-neutral-900",
              "md:h-full md:min-h-0",
              item.layout,
            ].join(" ")}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1536px) 50vw, 33vw"
              className={
                "imageClass" in item && item.imageClass
                  ? item.imageClass
                  : "object-cover object-center"
              }
              priority={index === 0}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
