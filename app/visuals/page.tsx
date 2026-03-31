"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full bg-background text-foreground">
      <div className="mx-auto flex min-h-dvh w-full max-w-[770px] flex-col items-center gap-8 p-4 font-solanel">
        <Header />
        <main className="flex w-full flex-grow flex-col items-start">
          <section className="flex justify-start">
            <h1 className="text-7xl">Illustration</h1>
            <Image
              src="/fishs.svg"
              alt="icon"
              width={70}
              height={70}
              className="ml-4 w-[55px] sm:w-[70px]"
            />
          </section>
          <section className="flex max-w-full flex-col items-center gap-4 sm:flex-row sm:gap-12">
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
