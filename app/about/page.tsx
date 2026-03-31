"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-background text-foreground">
      <div className="mx-auto flex min-h-dvh w-full max-w-[770px] flex-col items-center gap-8 p-4 font-solanel">
        <Header />
        <main className="flex w-full flex-grow flex-col justify-center gap-2">
          <section className="flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
            <div className="flex w-auto flex-col gap-4">
              <p className="">
                Howdy! I’m Annie and I’m a student studying electrical
                engineering at Texas A&M University. I’m primarily interested in
                CPU architecture and low-level systems. I also organize
                hackathons at{" "}
                <span className="hover-bg">
                  <a
                    href="https://tamuhack.org"
                    target="_blank"
                    style={{ fontWeight: 500 }}
                  >
                    <>TAMUhack↗&#xFE0E;</>
                  </a>
                </span>{" "}
                and research vulnerabilities on processor designs at the{" "}
                <span className="hover-bg">
                  <a
                    href="https://seth.engr.tamu.edu/"
                    target="_blank"
                    style={{ fontWeight: 500 }}
                  >
                    <>SETH Lab↗&#xFE0E;</>
                  </a>
                </span>
                .
              </p>
              <p>
                Outside of this I love drawing, playing the piano/guitar,
                playing single-player games and trying new coffee shops!
              </p>
            </div>
            <Image
              src="/annie-sticker.png"
              alt="annie"
              width={200}
              height={1000}
              loading="eager"
              className="ease mr-4 h-auto transition duration-300 hover:scale-105"
            />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
