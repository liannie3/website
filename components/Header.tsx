import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Header() {
    const pathname = usePathname();
    return (
    <header className="px-4">
        <div className="grid grid-cols-10 w-full">
          <div className="col-start-1 col-span-4 lg:col-span-3 flex items-center">
           <Link
              href="/secret" passHref
              className="inline-block a11y-focus">
              <Image
                src="/icon.png"
                alt="icon"
                width={24}
                height={24}
                className="mr-2"
              />
            </Link>
            <Link 
              href="/" passHref
              className="hidden sm:inline-block a11y-focus">ANNIE LI
            </Link>
          </div>
          <div className="col-start-7 col-span-4">
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
