import Link from "next/link";

export default function Header() {
    return (
    <footer className="w-full">
        <div className="flex flex-col sm:flex-row gap-[8px] items-start sm:justify-between w-full sm:items-start">
          <nav className="flex items-center space-x-1 mb-0">
            <a 
              href="https://www.linkedin.com/in/liannie3"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-linkedin group inline-block a11y-focus">LinkedIn, 
              </a>
            <Link 
              href="/Annie_Li_Resume.pdf"
              target="_blank"
              className="cursor-resume inline-block a11y-focus group">Resume, 
              </Link>
            <a 
              href="https://github.com/liannie3"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-github inline-block a11y-focus group">GitHub
              </a>
          </nav>
          <div className="col-start-1 col-span-4 md:col-start-7 md:col-span-4 ml-auto flex items-center space-x-1 sm:space-x-1 w-full sm:justify-end">
            <h3 className="whitespace-nowrap">Say hi! <Link 
                href="mailto:liannie003@gmail.com"
                className="cursor-mail inline-block uppercase a11y-focus group"
                target="_blank">liannie003@gmail.com
              </Link>
            </h3>
          </div>
        </div>
      </footer>
    )
}