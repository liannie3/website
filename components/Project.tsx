import Image from "next/image";

import Link from "next/link";
import { ReactNode } from "react";

interface ProjectProps {
  title: string;
  year?: string;
  desc: ReactNode;
  imgUrl: string;
  projectUrl: string;
  githubUrl?: string;
  itchUrl?: string;
}

function Project({
  title,
  year,
  desc,
  imgUrl,
  projectUrl,
  githubUrl,
  itchUrl,
}: ProjectProps) {
  return (
    <div className="flex flex-col justify-start">
      <div className="">
        <Link
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <Image
            src={imgUrl}
            alt={title}
            width={300}
            height={1400}
            className="mb-1 h-auto w-full"
          />
        </Link>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-row justify-between">
          <h2>
            <div className="inline uppercase">{title}</div>
            {year && <span> / {year}</span>}
          </h2>
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src="/github-icon.svg"
                alt="github icon"
                width={26}
                height={26}
                className="mt-1"
              />
            </Link>
          )}
          {itchUrl && (
            <Link href={itchUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src="/itchio-logo.svg"
                alt="itch.io icon"
                width={26}
                height={26}
                className="mt-1"
              />
            </Link>
          )}
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Project;
