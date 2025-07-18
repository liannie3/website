import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Header() {
    const pathname = usePathname();
    return (
    <header className="w-full">
        <div className="flex flex-row gap-[8px] justify-between items-center w-full sm:items-start">
          <div className="flex items-center">
           <Link
            href="/secret"
            passHref
            className="inline-block a11y-focus group">
            <div className="relative w-[28px] h-[28px] mr-1">
              <Image
                src="/icon-v2.svg"
                alt="icon"
                fill
                className="transition-opacity duration-200 opacity-100 group-hover:opacity-0"
              />
              <Image
                src="/darkicon.svg"
                alt="icon"
                fill
                className="transition-opacity duration-200 opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>

            <Link 
              href="/" passHref
              className="inline-block a11y-focus group">ANNIE LI
              <span className="block h-[1px] bg-foreground w-0 group-hover:w-full transition-all ease-in-out duration-300"></span>
            </Link>
          </div>
          <div className="flex flex-row">
            <nav className="ml-auto flex space-x-[8px] md:space-x-[12px] w-full justify-end">
              <Link 
                href="/projects" passHref
                className={`inline-block a11y-focus group ${pathname === '/projects' ? 'font-bold' : ''}`}
              >PROJECTS
              <span className="block h-[1px] bg-foreground w-0 group-hover:w-full transition-all ease-in-out duration-300"></span>
              </Link>
              <Link 
                href="/visuals" passHref
                className={`inline-block a11y-focus group whitespace-nowrap ${pathname === '/visuals' ? 'font-bold' : ''}`}
              >VISUAL ARTS
              <span className="block h-[1px] bg-foreground w-0 group-hover:w-full transition-all ease-in-out duration-300"></span>
              </Link>
              <Link 
                href="/about" passHref
                className={`inline-block a11y-focus group ${pathname === '/about' ? 'font-bold' : ''}`}
              >ABOUT
              <span className="block h-[1px] bg-foreground w-0 group-hover:w-full transition-all ease-in-out duration-300"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    )
}
