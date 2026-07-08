import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ProjectProps {
  title: string;
  year?: string;
  desc: ReactNode;
  imgUrl: string;
  imgAlt?: string;
  projectUrl: string;
  iconSrc?: string;
  iconAlt?: string;
  iconUrl?: string;
  index?: number;
}

function Project({
  title,
  year,
  desc,
  imgUrl,
  imgAlt,
  projectUrl,
  iconSrc,
  iconAlt,
  iconUrl,
  index = 0,
}: ProjectProps) {
  return (
    <div
      className="project-card flex flex-col justify-start"
      style={{ animationDelay: `${0.25 + index * 0.15}s` }}
    >
      <div className="">
        <Link
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <Image
            src={imgUrl}
            alt={imgAlt || title}
            width={800}
            height={450}
            className="mb-1 h-auto w-full object-cover"
          />
        </Link>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-row justify-between">
          <h2>
            <div className="inline uppercase">{title}</div>
            {year && <span> / {year}</span>}
          </h2>

          {iconUrl && iconSrc && (
            <Link href={iconUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src={iconSrc}
                alt={iconAlt || "Project icon"}
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
