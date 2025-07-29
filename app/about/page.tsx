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
            <section className="flex flex-col sm:flex-row gap-8 sm:gap-20 items-center">
              <div className="flex flex-col gap-4">
                <p className="">
                  Howdy! I’m Annie and I’m an undergraduate student studying Electrical Engineering 
                  at Texas A&M University. I’m primarily interested in VLSI design (specifically 
                  digital design and verification) and embedded systems. I also organize
                  hackathons at <span className="hover-bg">
                  <a href="https://tamuhack.org" target="_blank" style={{ fontWeight: 500 }}>
                  <>TAMUhack↗&#xFE0E;</></a></span> and research 
                  vulnerabilities on hardware at 
                  the <span className="hover-bg">
                  <a href="https://seth.engr.tamu.edu/" target="_blank" 
                  style={{ fontWeight: 500 }}><>SETH Lab↗&#xFE0E;</></a></span>.
                </p>
                <p>
                  In my free time I like drawing, cooking, and visiting coffee shops!
                </p>
              </div>
              <div className="w-[140px] sm:w-[500px]">
                <Image
                  src="/annie.png"
                  alt="annie"
                  width={700}
                  height={1400}
                  className="w-full h-auto"
                />
              </div>
            </section>
          </main>
        <Footer />
      </div>
    </div>
  );
}
