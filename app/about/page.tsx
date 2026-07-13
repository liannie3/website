"use client";

import Image from "next/image";
import Arrow from "@/components/Arrow";

export default function Home() {
  return (
    <main className="flex w-full flex-grow flex-col justify-center gap-2">
      <section className="flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
        <div className="flex w-auto flex-col gap-4">
          <p className="">
            Howdy! I'm Annie and I study electrical engineering
            at Texas A&M University. I'm primarily interested in CPU architecture 
            and embedded systems.  </p><p>
            I currently work on validating SOCs at <span className="hover-bg">
              <a
                href="https://apple.com"
                target="_blank"
                className="whitespace-nowrap"
                style={{ fontWeight: 500 }}
              >
                <>Apple<Arrow /></>
              </a>
            </span>
            {" "}and design for hackathons at{" "}
            <span className="hover-bg">
              <a
                href="https://tamuhack.org"
                target="_blank"
                className="whitespace-nowrap"
                style={{ fontWeight: 500 }}
              >
                <>TAMUhack<Arrow /></>
              </a>
            </span>
            
            . Previously I did hardware bringup at{" "}
            <span className="hover-bg">
              <a
                href="https://hpe.com/"
                target="_blank"
                className="whitespace-nowrap"
                style={{ fontWeight: 500 }}
              >
                <>HPE<Arrow /></>
              </a>
            </span>
             {" "} and researched vulnerabilities on processor designs at the{" "}
            <span className="hover-bg">
              <a
                href="https://seth.engr.tamu.edu/"
                target="_blank"
                className="whitespace-nowrap"
                style={{ fontWeight: 500 }}
              >
                <>SETH Lab<Arrow /></>
              </a>
            </span>
            .
          </p>
          <p>
            Outside of this I love drawing, single-player games, playing the piano/guitar
             and trying new coffee shops!
          </p>
        </div>
        <Image
          src="/annie-sticker.png"
          alt="annie"
          width={200}
          height={1000}
          loading="eager"
          className="mr-4 h-auto"
        />
      </section>
    </main>
  );
}
