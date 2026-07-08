"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Project from "@/components/Project";

let introPlayed = false;

export default function Home() {
  const [skipIntro] = useState(() => introPlayed);
  useEffect(() => {
    introPlayed = true;
  }, []);

  return (
    <div className="w-full bg-background text-foreground">
      <div className="mx-auto flex min-h-dvh w-full max-w-[770px] flex-col items-center gap-8 p-4 font-solanel">
        <Header />
        <main className="flex w-full flex-grow flex-col items-start gap-4">
          <section className="justify-start">
            <h1 className="text-7xl">Projects</h1>
          </section>
          <section
            className={`flex max-w-[450px] flex-col items-start gap-8${
              skipIntro ? " projects-static" : ""
            }`}
          >
            <Project
              index={0}
              title="Tritone"
              year="2024"
              desc="Live audio locater and transcription IoT system for HoH individuals."
              imgUrl="/projects/tritone.png"
              projectUrl="https://github.com/skandrigi/hackutd24"
              iconSrc="/github-icon.svg"
              iconAlt="github icon"
              iconUrl="https://github.com/skandrigi/hackutd24"
            />

            <Project
              index={1}
              title="Merge"
              year="2024"
              desc="Interactive command line interface application designed to simplify and accelerate Git merge conflict resolution."
              imgUrl="/projects/merge.png"
              projectUrl="https://github.com/skandrigi/MergeCLI"
              iconSrc="/github-icon.svg"
              iconAlt="github icon"
              iconUrl="https://github.com/skandrigi/MergeCLI"
            />

            <Project
              index={2}
              title="TAMUhack 2026"
              desc="Event website for Texas A&M’s most fruitful hackathon!"
              imgUrl="/projects/th26.png"
              projectUrl="https://th26.tamuhack.org"
              iconSrc="/globe-icon.svg"
              iconAlt="website icon"
              iconUrl="https://th26.tamuhack.org"
            />

            <Project
              index={3}
              title="HowdyHack 2025"
              desc="Event website for Texas A&M’s beginner hackathon with a colorful skater twist!"
              imgUrl="/projects/hh25.png"
              projectUrl="https://hh25.tamuhack.org"
              iconSrc="/globe-icon.svg"
              iconAlt="website icon"
              iconUrl="https://hh25.tamuhack.org"
            />

            <Project
              index={4}
              title="Heartbreaker"
              year="2026"
              desc="Top-down game where you collect evidence to win your divorce, made for Chillenium 2026."
              imgUrl="/projects/hb.png"
              projectUrl="https://heartbreaker.justindtle.com"
              iconSrc="/itchio-logo.svg"
              iconAlt="itch.io icon"
              iconUrl="https://draydere.itch.io/heartbreaker"
            />

            <Project
              index={5}
              title="Dream Weaver"
              year="2025"
              desc="2D platformer game where you can grab objects out of your background, made for Chillenium 2025."
              imgUrl="/projects/dw.png"
              imgAlt="Dream Weaver"
              projectUrl="https://willowtree314.itch.io/dream-weaver"
              iconSrc="/itchio-logo.svg"
              iconAlt="itch.io icon"
              iconUrl="https://willowtree314.itch.io/dream-weaver"
            />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
