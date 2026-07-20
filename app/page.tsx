import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 grow items-center justify-center sm:items-start">
      <section className="flex flex-col">
        <div className="">
          <Image
            src="/loafer.webp"
            alt="placeholder cat that sits there and does nothing"
            width={125}
            height={100}
            className="opacity-95"
            loading="eager"
          />
        </div>
      </section>
    </main>
  );
}
