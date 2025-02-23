import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Header() {
    const pathname = usePathname();
    return (
    <header className="w-full">
        <div className="flex flex-row gap-[8px] row-start-1 justify-between items-center w-full sm:items-start">
          <div className="flex items-center">
           <Link
              href="/secret" passHref
              className="inline-block a11y-focus">
              <Image
                src="/icon.svg"
                alt="icon"
                width={28}
                height={28}
                className="mr-1"
              />
            </Link>
            <Link 
              href="/" passHref
              className="hidden sm:inline-block a11y-focus">ANNIE LI
            </Link>
          </div>
          <div className="flex flex-row">
            <nav className="ml-auto flex space-x-[8px] md:space-x-[12px] w-full justify-end">
              <Link 
                href="/projects" passHref
                className={`inline-block a11y-focus group ${pathname === '/projects' ? 'font-bold' : ''}`}
              >PROJECTS
              </Link>
              <Link 
                href="/visuals" passHref
                className={`inline-block a11y-focus whitespace-nowrap ${pathname === '/visuals' ? 'font-bold' : ''}`}
              >VISUAL ARTS
              </Link>
              <Link 
                href="/about" passHref
                className={`inline-block a11y-focus ${pathname === '/about' ? 'font-bold' : ''}`}
              >ABOUT
              </Link>
            </nav>
          </div>
        </div>
      </header>
    )
}
