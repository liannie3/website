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
              <div className="flex flex-col gap-4">
                <p className="">
                  Howdy! I’m Annie and I’m an undergraduate student studying Electrical Engineering at Texas A&M University. My current interests are VLSI design (specifically in the digital design and verification fields) and machine learning. I’m also organizing hackathons at <a href="https://tamuhack.org" target="_blank"><u>TAMUhack</u></a>, researching vulnerabilities on hardware at the <a href="https://seth.engr.tamu.edu/" target="_blank"><u>SETH Lab</u></a>, and interning at <a href="https://www.hpe.com/us/en/home" target="_blank"><u>HPE</u></a> for summer 2025.
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
