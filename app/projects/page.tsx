"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full gap-4">
      <div className="grid grid-rows-[20px_1fr_20px] w-full max-w-[740px] mx-auto items-center justify-items-center min-h-screen p-4 pb-8 gap-8 sm:p-4 font-solanel">
        <Header />
      
        <main className="flex flex-col gap-0 row-start-2 items-center sm:items-start w-full">
          <section className="justify-start">
              <h1 className="text-8xl">Projects</h1>
            </section>
            <section className="flex flex-col sm:flex-row max-w-full gap-8 sm:gap-12 items-center">
              <div className="flex flex-col gap-4">
                <p className="">
                Under construction!
                </p>
              </div>
              <div className="">
                
              </div>
            </section>
          </main>
          
        <Footer />
      </div>
    </div>
  );
}
