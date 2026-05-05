import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full">
      <h3>
        <div className="flex w-full flex-row justify-between gap-[8px] sm:items-start">
          <div className="flex items-center">
            <Link
              href="/secret"
              passHref
              className="a11y-focus group inline-block"
            >
              <div className="relative mb-1 mr-1.5 h-[22px] w-[22px]">
                <Image
                  src="/icon-v4.svg"
                  alt="icon"
                  fill
                  className="opacity-100 transition-opacity duration-200 group-hover:opacity-0"
                  loading="eager"
                />
                <Image
                  src="/dark-icon.svg"
                  alt="dark icon"
                  fill
                  className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </div>
            </Link>

            <Link href="/" passHref className="a11y-focus group inline-block">
              ANNIE LI
              <span className="block h-[1px] w-0 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </div>
          <div className="flex flex-row items-center">
            <nav className="ml-auto flex w-full items-center justify-end space-x-[8px] md:space-x-[12px]">
              <Link
                href="/projects"
                passHref
                className={`a11y-focus group inline-block ${pathname === "/projects" ? "font-bold" : ""}`}
              >
                PROJECTS
                <span className="block h-[1px] w-0 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
              <Link
                href="/visuals"
                passHref
                className={`a11y-focus group inline-block whitespace-nowrap ${pathname === "/visuals" ? "font-bold" : ""}`}
              >
                VISUAL ARTS
                <span className="block h-[1px] w-0 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                passHref
                className={`a11y-focus group inline-block ${pathname === "/about" ? "font-bold" : ""}`}
              >
                ABOUT
                <span className="block h-[1px] w-0 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
        </div>
      </h3>
    </header>
  );
}
