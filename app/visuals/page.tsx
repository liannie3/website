import Image from "next/image";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="flex grow flex-col gap-2">
      <div className="inline-flex items-center">
        <h1 className="text-6xl sm:text-7xl">Illustration</h1>
        <Image
          src="/fishs.svg"
          alt="icon"
          width={70}
          height={70}
          className="ml-3 hidden w-16 sm:block"
        />
      </div>
      <p>
        Illustration, animation and life drawings. Under construction!
      </p>
      <section className="gallery-section">
        <Gallery />
      </section>
    </main>
  );
}
