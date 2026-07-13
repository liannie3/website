import Link from "next/link";
import Arrow from "@/components/Arrow";

export default function Footer() {
    return (
    <footer className="w-full">
      <div className="flex flex-col gap-[0.2em] items-start w-full sm:flex-row sm:justify-between">
        <div className="flex gap-[0.3em] uppercase">
          <a 
            href="https://github.com/liannie3"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-github a11y-focus group">GitHub<Arrow/>,
          </a>
          <a 
            href="https://www.linkedin.com/in/liannie3"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-linkedin group a11y-focus">LinkedIn<Arrow/>, 
          </a>
          <Link 
            href="/Annie_Li_Resume.pdf"
            target="_blank"
            className="cursor-resume a11y-focus group">Resume
          </Link>
        </div>
        <address className="flex gap-[0.3em] whitespace-nowrap text-[16px] not-italic">Say hi!<Link 
              href="mailto:liannie003@gmail.com"
              className="cursor-mail uppercase a11y-focus"
              target="_blank">liannie003@gmail.com
            </Link>
        </address>
      </div>
    </footer>
  )
}