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
            <section className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-center">
              <div className="flex flex-col w-auto gap-4">
                <p className="">
                  Howdy! I’m Annie and I’m an undergraduate student studying Electrical Engineering at Texas A&M University. I’m primarily interested in ASIC design verification and embedded systems development. 
                  I also organize hackathons at <span className="hover-bg">
                  <a href="https://tamuhack.org" target="_blank" style={{ fontWeight: 500 }}>
                  <>TAMUhack↗&#xFE0E;</></a></span> and research vulnerabilities on SoC designs at the <span className="hover-bg">
                  <a href="https://seth.engr.tamu.edu/" target="_blank" 
                  style={{ fontWeight: 500 }}><>SETH Lab↗&#xFE0E;</></a></span>.
                </p>
                <p>
                  Outside of this I’m passionate about anything related to art and design,  learning new instruments and trying new coffee shops. 
                </p>
              </div>
              <Image
                  src="/annie-sticker.png"
                  alt="annie"
                  width={250}
                  height={1000}
                  className="h-auto transition duration-300 ease hover:scale-105"
                />
            </section>
          </main>
        <Footer />
      </div>
    </div>
  );
}
