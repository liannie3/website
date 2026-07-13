import Image from "next/image";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="flex w-full flex-grow flex-col items-start gap-2">
      <section className="flex justify-start">
        <h1 className="text-6xl sm:text-7xl">Illustration</h1>
        <Image
          src="/fishs.svg"
          alt="icon"
          width={70}
          height={70}
          className="ml-[12px] hidden sm:block w-16"
        />
      </section>
      <section className="flex max-w-full flex-col items-center gap-4 sm:flex-row sm:gap-12">
        <div className="flex flex-col gap-2">
          <p className="">
            Illustration, animation and life drawings. Under construction!
          </p>
        </div>
      </section>
      <section className="gallery-section">
        <Gallery />
      </section>
    </main>
  );
}
