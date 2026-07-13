import Link from "next/link";
import Arrow from "@/components/Arrow";

export default function Footer() {
    return (
    <footer className="w-full">
      <div className="flex flex-col gap-[0.2em] items-start w-full sm:flex-row sm:justify-between">
        <div className="flex gap-[0.3em] text-[16px] uppercase">
          <a 
            href="https://github.com/liannie3"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-github a11y-focus group">GitHub<Arrow/>,<span className="block h-[1px] w-0 bg-foreground transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </a>
          <a 
            href="https://www.linkedin.com/in/liannie3"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-linkedin group a11y-focus">LinkedIn<Arrow/>,<span className="block h-[1px] w-0 bg-foreground transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </a>
          <Link 
            href="/Annie_Li_Resume.pdf"
            target="_blank"
            className="cursor-resume a11y-focus group">Resume<span className="block h-[1px] w-0 bg-foreground transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
        </div>
        <address className="flex gap-[0.3em] whitespace-nowrap text-[16px] not-italic">Say hi!<Link 
              href="mailto:liannie003@gmail.com"
              className="cursor-mail uppercase a11y-focus group"
              target="_blank">liannie003@gmail.com<span className="block h-[1px] w-0 bg-foreground transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </Link>
        </address>
      </div>
    </footer>
  )
}