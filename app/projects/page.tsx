"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full gap-4">
      <div className="flex flex-col w-full max-w-[770px] mx-auto items-center min-h-dvh p-4 gap-8 font-solanel">
        <Header />
        <main className="flex flex-col flex-grow gap-4 items-start w-full">
          <section className="justify-start">
            <h1 className="text-7xl sm:text-8xl">Projects</h1>
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
                  alt="Tritone"
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
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
