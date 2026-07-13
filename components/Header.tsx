"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full">
      <div className="flex w-full flex-row justify-between items-start">
        <div className="flex items-center">
          <Link
            href="/secret"
            passHref
            className="a11y-focus group "
          >
            <div className="relative mr-1.5 h-[24px] w-[24px]">
              <Image
                src="/icon-v4.svg"
                alt="icon"
                fill
                className="opacity-100 transition-opacity duration-200 group-hover:opacity-0"
                loading="eager"
              />
              <Image
                src="/icon-v4-dark.svg"
                alt="dark icon"
                fill
                className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </div>
          </Link>
          <h1 aria-label="Annie Li - home">
            <Link href="/" passHref className="a11y-focus">
              <svg
                viewBox="0 0 52 11"
                className="block h-[18px] w-[85px]"
                fill="none"
                aria-hidden="true"
              >
                <path d="M26.3691 3L26.0003 9.92351" stroke="currentColor" strokeWidth="0.92" />
                <path d="M29.9303 4.95042C37.1153 7.10116 34.5593 -0.650623 30.2607 4.26228C27.0052 7.983 31.5937 9.85139 35.2171 7.85262" stroke="currentColor" strokeWidth="0.92" />
                <path d="M10 2.38379L10.4333 9.31712" stroke="currentColor" strokeWidth="0.92" />
                <path d="M10.2168 5.04112C12.2324 1.33048 16.3629 1.1349 15.0803 9.53294" stroke="currentColor" strokeWidth="0.92" />
                <path d="M17.6611 2.19238L18.0268 9.13425" stroke="currentColor" strokeWidth="0.92" />
                <path d="M17.8838 5.04112C19.8994 1.33048 24.0299 1.1349 22.7473 9.53294" stroke="currentColor" strokeWidth="0.92" />
                <path d="M50.3633 3L50.0004 9.92383" stroke="currentColor" strokeWidth="0.92" />
                <circle cx="50.8667" cy="0.866667" r="0.866667" fill="currentColor" />
                <path d="M1.30017 4.02736C2.94379 1.74719 6.15503 0.98956 6.79927 5.07447M6.79927 5.07447C6.96325 6.11419 7.01128 6.82442 6.80945 8.61323C3.92472 10.468 2.45426 9.55637 1.97575 8.85647C1.06783 7.5285 4.11402 3.24394 6.79927 5.07447Z" stroke="currentColor" strokeWidth="0.92" strokeLinejoin="round" />
                <path d="M44.0316 2.09151C42.9592 4.08314 42.0933 6.63401 42.0381 7.65246C42.3917 8.74995 46.1887 8.5005 47.8008 8.50236" stroke="currentColor" strokeWidth="0.92" strokeLinejoin="round" />
                <circle cx="26.8667" cy="0.866667" r="0.866667" fill="currentColor" />
              </svg>
            </Link>
          </h1>
        </div>
        <nav className="flex flex-col items-end sm:flex-row sm:items-center sm:gap-[0.7em]">
            <Link
              href="/projects"
              passHref
              className={`a11y-focus group ${pathname === "/projects" ? "font-bold" : ""}`}
            >
              Projects
              <span className="block h-[1px] w-0 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/visuals"
              passHref
              className={`a11y-focus group whitespace-nowrap ${pathname === "/visuals" ? "font-bold" : ""}`}
            >
              Visual Arts
              <span className="block h-[1px] w-0 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              passHref
              className={`a11y-focus group ${pathname === "/about" ? "font-bold" : ""}`}
            >
              About
              <span className="block h-[1px] w-0 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
    </header>
  );
}
