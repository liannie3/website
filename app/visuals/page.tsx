"use client";
import Link from 'next/link';
import Image from "next/image";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-8 gap-8 px-4 sm:p-4 font-solanel">
      <Header />
      
      <main className="flex flex-col gap-0 row-start-2 items-center w-[700px] gap-[8px] sm:items-start">
      <section className="justify-start">
          <h1 className="text-8xl">Illustration</h1>
        </section>
        <section className="flex flex-col sm:flex-row max-w-full gap-8 sm:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <p className="">
            Under construction!
            </p>
            <Gallery />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
