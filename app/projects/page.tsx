"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full gap-4">
      <div className="grid grid-rows-[20px_1fr_20px] w-full max-w-[770px] mx-auto items-center justify-items-center min-h-screen p-4 pb-8 gap-8 sm:p-4 font-solanel">
        <Header />
        <main className="flex flex-col align-top gap-2 row-start-2 items-start w-full">
          <section className="justify-start">
            <h1 className="text-8xl">Projects</h1>
          </section>
          <section className="flex flex-col max-w-full gap-8 sm:gap-4 items-start">
            <div className="flex flex-col justify-start">
              <div className="">
                <Image
                  src="/gallery/projects/tritonebg.png"
                  alt="Tritone"
                  width={300}
                  height={1400}
                  className="w-full h-auto"
                />
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
                    className="inline-block a11y-focus">
                    <Image
                      src="/github-icon.svg"
                      alt="github icon"
                      width={24}
                      height={24}
                      className=""
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
                <Image
                  src="/gallery/projects/mergebg.png"
                  alt="Tritone"
                  width={500}
                  height={1400}
                  className=""
                />
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
                      width={28}
                      height={28}
                      className=""
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
