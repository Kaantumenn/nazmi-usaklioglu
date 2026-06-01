"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/biyografi", label: "Biyografi" },
  { href: "/galeri", label: "Galeri" },
  { href: "/muzik", label: "Müzik" },
  { href: "/etkinlik", label: "Etkinlik" },

] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMenuOpen(false));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black">
      <div className="relative border-b border-white/10 md:border-b-0">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-4 pt-[max(0.875rem,env(safe-area-inset-top))] pb-3.5 md:gap-6 md:px-10 md:py-5 lg:px-14">
          <Link
            href="/"
            className="flex min-w-0 max-w-[min(100%,20rem)] shrink items-center gap-2 transition-opacity hover:opacity-80 sm:max-w-none md:gap-3"
          >
            <span className="relative block h-8 w-8 shrink-0 md:h-24 md:w-24">
              <Image
                src="/n_u_logo.png"
                alt="Nazmi Uşaklıoğlu logosu"
                fill
                className="object-contain"
                sizes="80px"
                priority
                unoptimized
              />
            </span>
            <span
              className="font-extralight tracking-[0.22em] text-white sm:tracking-[0.35em]"
              style={{ fontSize: "clamp(0.6rem, 2.8vw, 1.125rem)" }}
            >
              NAZMİ UŞAKLIOĞLU
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex h-11 min-h-11 w-11 min-w-11 touch-manipulation items-center justify-center rounded-md text-white md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? "Menüyü kapat" : "Menüyü aç"}</span>
            {menuOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>

          <nav
            className="hidden flex-wrap items-center justify-end gap-x-5 gap-y-2 text-[11px] font-light uppercase tracking-[0.2em] text-white/95 md:flex md:gap-x-7 md:text-xs"
            aria-label="Ana menü"
          >
            {nav.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={
                    active
                      ? "text-white underline decoration-white/40 underline-offset-8"
                      : "text-white/80 transition-colors hover:text-white"
                  }
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <nav
          id="mobile-menu"
          aria-hidden={!menuOpen}
          className={
            menuOpen
              ? "absolute left-0 right-0 top-full border-t border-white/10 bg-black shadow-lg shadow-black/40 md:hidden"
              : "hidden md:hidden"
          }
        >
          <div className="mx-auto max-h-[min(70vh,calc(100dvh-5.5rem))] max-w-[1600px] overflow-y-auto overscroll-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-1">
            <ul className="flex flex-col">
              {nav.map(({ href, label }) => {
                const active = isActive(pathname, href);
                return (
                  <li key={href} className="border-b border-white/10 last:border-b-0">
                    <Link
                      href={href}
                      className={
                        "flex min-h-12 touch-manipulation items-center justify-center py-3 text-[13px] font-light uppercase tracking-[0.18em] " +
                        (active
                          ? "text-white underline decoration-white/40 underline-offset-8"
                          : "text-white/85 active:bg-white/5")
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
