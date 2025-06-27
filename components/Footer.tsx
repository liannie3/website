import Link from "next/link";

export default function Header() {
    return (
    <footer className="w-full">
        <div className="flex sm:flex-row flex-col gap-[8px] row-start-3 justify-between items-center w-full sm:items-start">
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
    )
}