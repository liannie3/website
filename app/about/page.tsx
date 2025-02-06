"use client";

import Header from "@/components/Header";
import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-8 gap-8 px-4 sm:p-4 font-solanel">
      <Header />
      
      <main className="flex flex-col gap-0 row-start-2 items-center w-[700px] sm:items-start">
        
        <section className="flex flex-col sm:flex-row max-w-full gap-8 sm:gap-12 ml-auto items-center">
          <div className="flex flex-col gap-4">
            <p className="">
              Howdy! I’m Annie Li, an electrical engineering student at Texas A&M University. My current interests are VLSI design (specifically in the physical design and verification fields) and machine learning, especially the intersection of the two. I’m also organizing hackathons at <a href="https://tamuhack.org" target="_blank"><u>TAMUhack</u></a>, researching at the <a href="https://seth.engr.tamu.edu/" target="_blank"><u>SETH Lab</u></a>, and incoming at <a href="https://www.hpe.com/us/en/home" target="_blank"><u>HPE</u></a> for summer 2025.
            </p>
            <p>
              In my free time I like drawing, cooking, and visiting cafes. 
            </p>
          </div>
          <div className="">
            <Image
              src="/annie.png"
              alt="annie"
              width={700}
              height={1400}
              className="mr-2"
            />
          </div>
        </section>
      </main>
      
      <footer className="px-4">
        <div className="grid grid-cols-10 w-full">
          <div className="col-start-1 col-span-4 lg:col-span-3 flex items-center space-x-1 mb-0">
            <a 
              href="https://www.linkedin.com/in/liannie3"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block a11y-focus">LINKEDIN, 
              <span className="block h-[1px] bg-[#111f5b] w-0 group-hover:w-full transition-all ease-in-out duration-300"></span>
            </a>
            <Link 
              href="/Annie_Li_Resume.pdf"
              target="_blank"
              className="inline-block a11y-focus group">RESUME, 
              <span className="block h-[1px] bg-[#111f5b] w-0 group-hover:w-full transition-all ease-in-out duration-300"></span>
            </Link>
            <a 
              href="https://github.com/liannie3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block a11y-focus group">GITHUB
              <span className="block h-[1px] bg-[#111f5b] w-0 group-hover:w-full transition-all ease-in-out duration-300"></span>
            </a>
          </div>
          <div className="col-start-1 col-span-4 md:col-start-7 md:col-span-4 ml-auto flex items-center space-x-1 sm:space-x-1 w-full sm:justify-end">
            <span className="whitespace-nowrap">SAY HI!</span>
              <Link 
                href="mailto:liannie003@gmail.com"
                className="cursor-mail inline-block a11y-focus group">LIANNIE003@GMAIL.COM
              </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
