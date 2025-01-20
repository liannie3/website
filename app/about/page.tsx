"use client";
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-8 gap-16 sm:p-4 font-solanel">
      <header className="px-4">
        <div className="grid grid-cols-10 w-full">
          <div className="col-start-1 col-span-4 lg:col-span-3 flex items-center">
            <Image
              src="/icon.png"
              alt="icon"
              width={24}
              height={24}
              className="mr-2"
            />
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
              <span className="block h-[1px] bg-[#111f5b] w-0 group-hover:w-full transition-all ease-in-out duration-300"></span>
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
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
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
                className="cursor-[url('/mail.svg'), pointer] inline-block a11y-focus group">LIANNIE003@GMAIL.COM
              </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
