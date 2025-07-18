"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full gap-4">
      <div className="flex flex-col w-full max-w-[770px] mx-auto items-center min-h-dvh p-4 gap-8 font-solanel">
      <Header />
      <main className="flex flex-col flex-grow items-start w-full">
        <section className="justify-start flex">
          <h1 className="text-7xl sm:text-8xl">Illustration</h1>
          <Image
            src="/fishs.svg"
            alt="icon"
            width={70}
            height={70}
            className="ml-4 w-[55px] sm:w-[70px]"
          />
        </section>
        <section className="flex flex-col sm:flex-row max-w-full gap-4 sm:gap-12 items-center">
          <div className="flex flex-col gap-2">
            <p className="">
            Illustration, character and life drawings. Under construction!
            </p>
            <Gallery />
          </div>
        </section>
      </main>
      
      <Footer />
      </div>
    </div>
  );
}
