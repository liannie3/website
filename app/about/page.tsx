"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background text-foreground w-full">
      <div className="flex flex-col w-full max-w-[770px] mx-auto items-center min-h-dvh p-4 gap-8 font-solanel">
        <Header />
          <main className="flex flex-col flex-grow gap-2 justify-center w-full">
            <section className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center">
              <div className="flex flex-col w-auto gap-4">
                <p className="">
                  Howdy! I’m Annie and I’m an undergraduate student studying electrical engineering at Texas A&M University. I’m interested in computer architecture (specifically the design & verification fields) and low-level systems. I was a hardware intern at <span className="hover-bg">
                  <a href="https://hpe.com" target="_blank" style={{ fontWeight: 500 }}>
                  <>HPE↗&#xFE0E;</></a></span> this past summer. I also organize hackathons at <span className="hover-bg">
                  <a href="https://tamuhack.org" target="_blank" style={{ fontWeight: 500 }}>
                  <>TAMUhack↗&#xFE0E;</></a></span> and research vulnerabilities on processor designs at the <span className="hover-bg">
                  <a href="https://seth.engr.tamu.edu/" target="_blank" 
                  style={{ fontWeight: 500 }}><>SETH Lab↗&#xFE0E;</></a></span>.
                </p>
                <p>
                  Outside of this I love drawing, playing the piano/guitar, listening to new music and trying new coffee shops! 
                </p>
              </div>
              <Image
                  src="/annie-sticker.png"
                  alt="annie"
                  width={200}
                  height={1000}
                  loading="eager"
                  className="h-auto mr-4 transition duration-300 ease hover:scale-105"
                />
            </section>
          </main>
        <Footer />
      </div>
    </div>
  );
}
