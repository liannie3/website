"use client";
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-8 gap-8 px-4 sm:p-4 font-solanel">
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
      
      <main className="flex flex-col gap-0 row-start-2 items-center w-[700px] gap-[8px] sm:items-start">
      <section className="justify-start">
          <h1 className="text-8xl">Projects</h1>
        </section>
        <section className="flex flex-col sm:flex-row max-w-full gap-8 sm:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <p className="">
            Under construction!
            </p>
          </div>
          <div className="">
            
          </div>
        </section>
      </main>
      
      <footer className="px-4">
        <div className="grid grid-cols-10 w-full">
          <div className="col-start-1 col-span-4 lg:col-span-3 flex items-center space-x-1 mb-0">
            <a 
              href="https://www.linkedin.com/in/liannie3"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block a11y-focus">LINKEDIN, 
              <span className="block h-[1px] bg-[#111f5b] w-0 group-hover:w-full transition-all ease-in-out duration-300"></span>
            </a>
            <Link 
              href="/Annie_Li_Resume.pdf"
              target="_blank"
              className="inline-block a11y-focus group">RESUME, 
              <span className="block h-[1px] bg-[#111f5b] w-0 group-hover:w-full transition-all ease-in-out duration-300"></span>
            </Link>
            <a 
              href="https://github.com/liannie3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block a11y-focus group">GITHUB
              <span className="block h-[1px] bg-[#111f5b] w-0 group-hover:w-full transition-all ease-in-out duration-300"></span>
            </a>
          </div>
          <div className="col-start-1 col-span-4 md:col-start-7 md:col-span-4 ml-auto flex items-center space-x-1 sm:space-x-1 w-full sm:justify-end">
            <span className="whitespace-nowrap">SAY HI!</span>
              <Link 
                href="mailto:liannie003@gmail.com"
                className="cursor-mail inline-block a11y-focus group">LIANNIE003@GMAIL.COM
              </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
