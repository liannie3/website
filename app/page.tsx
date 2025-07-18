"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground w-full">
      <div className="flex flex-col w-full max-w-[770px] mx-auto items-center min-h-dvh p-4 gap-8 font-solanel">
        <Header />
          <main className="flex flex-col gap-2 flex-grow items-center justify-center sm:items-start">
            <section className="flex flex-col">
              <div className="">
              <Image
                src="/loafer.svg"
                alt="placeholder cat that sits there and does nothing"
                width={150}
                height={100}
                className="opacity-95"
              />
              </div>
            </section>
          </main>
          
        <Footer />
      </div>
    </div>
  );
}
