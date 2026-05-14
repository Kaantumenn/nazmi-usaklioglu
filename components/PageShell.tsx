export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  /** Örn. biyografi: sanatçı adı */
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="min-h-dvh w-full bg-black text-white">
      <div className="px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto w-full max-w-[40rem] text-left md:max-w-[44rem] lg:max-w-[52rem]">
          <div className="pb-[max(4rem,env(safe-area-inset-bottom))] pt-[max(6.5rem,calc(4.25rem+env(safe-area-inset-top)))] md:pb-20 md:pt-36">
            <h1
              className={
                "break-words text-3xl font-bold tracking-tight text-white md:text-[2.125rem] lg:text-4xl " +
                (subtitle ? "mb-2" : "mb-8")
              }
            >
              {title}
            </h1>
            {subtitle ? (
              <p className="mb-10 text-lg font-semibold text-white md:text-xl">
                {subtitle}
              </p>
            ) : null}
            {children ? (
              <div className="space-y-6 text-base font-normal leading-[1.8] text-white/80 md:text-[17px]">
                {children}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
