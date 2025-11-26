"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background text-foreground w-full">
      <div className="flex flex-col w-full max-w-[770px] mx-auto items-center min-h-dvh p-4 gap-8 font-solanel">
        <Header />
        <main className="flex flex-col flex-grow gap-4 items-start w-full">
          <section className="justify-start">
            <h1 className="text-7xl">Projects</h1>
          </section>
          <section className="flex flex-col max-w-[450px] gap-8 items-start">
            <div className="flex flex-col justify-start">
              <div className="">
                <Link
                    href="https://github.com/skandrigi/hackutd24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="">
                <Image
                  src="/gallery/projects/tritonebg.png"
                  alt="Tritone"
                  width={300}
                  height={1400}
                  className="w-full h-auto"
                />
                </Link>
                </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-row w-full justify-between">
                  <h2 className="">
                    TRITONE / 2024
                  </h2>
                  <Link
                    href="https://github.com/skandrigi/hackutd24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="">
                    <Image
                      src="/github-icon.svg"
                      alt="github icon"
                      width={26}
                      height={26}
                      className="mt-1"
                    />
                  </Link>
                </div>
                <p className="">
                  A live audio locater and transcription IoT system for HoH individuals. 
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <div className="">
                <Link
                    href="https://github.com/skandrigi/MergeCLI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block a11y-focus">
                <Image
                  src="/gallery/projects/mergebg.png"
                  alt="Merge"
                  width={500}
                  height={1400}
                  className=""
                />
                </Link>
                </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-row w-full justify-between">
                  <h2 className="">
                    MERGE / 2024
                  </h2>
                  <Link
                    href="https://github.com/skandrigi/MergeCLI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block a11y-focus">
                    <Image
                      src="/github-icon.svg"
                      alt="github icon"
                      width={26}
                      height={26}
                      className="mt-1"
                    />
                  </Link>
                </div>
                <p className="">
                  An interactive command line interface application designed to simplify and accelerate Git merge conflict resolution. 
                </p>
              </div>
            </div>
          
          <div className="flex flex-col justify-start">
              <div className="">
                <Link
                    href="https://willowtree314.itch.io/dream-weaver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block a11y-focus">
                <Image
                  src="/gallery/projects/dwbg.png"
                  alt="Dream Weaver"
                  width={500}
                  height={1400}
                  className=""
                />
                </Link>
                </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-row w-full justify-between">
                  <h2 className="">
                    DREAM WEAVER / 2025
                  </h2>
                  <Link
                    href="https://willowtree314.itch.io/dream-weaver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block a11y-focus">
                    <Image
                      src="/itchio-logo.svg"
                      alt="itch.io icon"
                      width={26}
                      height={26}
                      className="mt-1"
                    />
                  </Link>
                </div>
                <p className="">
                  A 2D platformer game where you can grab the objects out of your background, made for <span className="hover-bg">
                  <a href="https://itch.io/jam/chillennium-2025" target="_blank" style={{ fontWeight: 500 }}>
                  <>Chillenium 2025↗&#xFE0E;</></a></span>. My first ever game jam project!
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-start">
              <div className="">
                <Link
                    href="https://hh25.tamuhack.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block a11y-focus">
                <Image
                  src="/hh25.png"
                  alt="HowdyHack 2025"
                  width={500}
                  height={1400}
                  className=""
                />
                </Link>
                </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-row w-full justify-between">
                  <h2 className="">
                    HOWDYHACK 2025
                  </h2>
                  <Link
                    href="https://hh25.tamuhack.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block a11y-focus">
                    <Image
                      src="/globe-icon.svg"
                      alt="globe icon"
                      width={26}
                      height={26}
                      className="mt-1"
                    />
                  </Link>
                </div>
                <p className="">
                  The event website for Texas A&M’s beginner hackathon with a colorful skater twist!
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
