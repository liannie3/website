"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-background text-foreground">
      <div className="mx-auto flex min-h-dvh w-full max-w-[770px] flex-col items-center gap-8 p-4 font-solanel">
        <Header />
        <main className="flex w-full flex-grow flex-col items-start gap-4">
          <section className="justify-start">
            <h1 className="text-7xl">Projects</h1>
          </section>
          <section className="flex max-w-[450px] flex-col items-start gap-8">
            <div className="flex flex-col justify-start">
              <div className="">
                <Link
                  href="https://github.com/skandrigi/hackutd24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <Image
                    src="/projects/tritone.png"
                    alt="Tritone"
                    width={300}
                    height={1400}
                    className="h-auto w-full"
                  />
                </Link>
              </div>
              <div className="flex w-full flex-col">
                <div className="flex w-full flex-row justify-between">
                  <h2 className="">TRITONE / 2024</h2>
                  <Link
                    href="https://github.com/skandrigi/hackutd24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
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
                  Live audio locater and transcription IoT system for HoH
                  individuals.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <div className="">
                <Link
                  href="https://github.com/skandrigi/MergeCLI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="a11y-focus inline-block"
                >
                  <Image
                    src="/projects/merge.png"
                    alt="Merge"
                    width={500}
                    height={1400}
                    className=""
                  />
                </Link>
              </div>
              <div className="flex w-full flex-col">
                <div className="flex w-full flex-row justify-between">
                  <h2 className="">MERGE / 2024</h2>
                  <Link
                    href="https://github.com/skandrigi/MergeCLI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="a11y-focus inline-block"
                  >
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
                  Interactive command line interface application designed to
                  simplify and accelerate Git merge conflict resolution.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <div className="">
                <Link
                  href="https://th26.tamuhack.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="a11y-focus inline-block"
                >
                  <Image
                    src="/projects/th26.png"
                    alt="TAMUhack 2026"
                    width={500}
                    height={1400}
                    className=""
                  />
                </Link>
              </div>
              <div className="flex w-full flex-col">
                <div className="flex w-full flex-row justify-between">
                  <h2 className="">TAMUHACK 2026</h2>
                  <Link
                    href="https://th26.tamuhack.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="a11y-focus inline-block"
                  >
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
                  Event website for Texas A&M’s most fruitful hackathon!
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <div className="">
                <Link
                  href="https://hh25.tamuhack.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="a11y-focus inline-block"
                >
                  <Image
                    src="/projects/hh25.png"
                    alt="HowdyHack 2025"
                    width={500}
                    height={1400}
                    className=""
                  />
                </Link>
              </div>
              <div className="flex w-full flex-col">
                <div className="flex w-full flex-row justify-between">
                  <h2 className="">HOWDYHACK 2025</h2>
                  <Link
                    href="https://hh25.tamuhack.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="a11y-focus inline-block"
                  >
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
                  Event website for Texas A&M’s beginner hackathon with a
                  colorful skater twist!
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <div className="">
                <Link
                  href="https://heartbreaker.justindtle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="a11y-focus inline-block"
                >
                  <Image
                    src="/projects/hb.png"
                    alt="Heartbreaker"
                    width={500}
                    height={1400}
                    className=""
                  />
                </Link>
              </div>
              <div className="flex w-full flex-col">
                <div className="flex w-full flex-row justify-between">
                  <h2 className="">HEARTBREAKER / 2026</h2>
                  <Link
                    href="https://draydere.itch.io/heartbreaker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="a11y-focus inline-block"
                  >
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
                  Top-down game where you collect evidence to win your divorce,
                  made for{" "}
                  <span className="hover-bg">
                    <a
                      href="https://itch.io/jam/chillennium-2026"
                      target="_blank"
                      style={{ fontWeight: 500 }}
                    >
                      <>Chillenium 2026↗&#xFE0E;</>
                    </a>
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <div className="">
                <Link
                  href="https://willowtree314.itch.io/dream-weaver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="a11y-focus inline-block"
                >
                  <Image
                    src="/projects/dw.png"
                    alt="Dream Weaver"
                    width={500}
                    height={1400}
                    className=""
                  />
                </Link>
              </div>
              <div className="flex w-full flex-col">
                <div className="flex w-full flex-row justify-between">
                  <h2 className="">DREAM WEAVER / 2025</h2>
                  <Link
                    href="https://willowtree314.itch.io/dream-weaver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="a11y-focus inline-block"
                  >
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
                  2D platformer game where you can grab the objects out of your
                  background, made for{" "}
                  <span className="hover-bg">
                    <a
                      href="https://itch.io/jam/chillennium-2025"
                      target="_blank"
                      style={{ fontWeight: 500 }}
                    >
                      <>Chillenium 2025↗&#xFE0E;</>
                    </a>
                  </span>
                  .
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
