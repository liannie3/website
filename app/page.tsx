"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-8 gap-8 px-32 sm:p-4 font-solanel">
      <Header />
      <main className="flex flex-col gap-0 row-start-2 items-center px-72 sm:items-start">
        <section className="flex flex-col gap-4 sm:gap-12">
          <div className="">
          <Image
            src="/revrodeo.gif"
            alt="annie"
            width={600}
            height={400}
            className="mr-2 opacity-95"
          />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
