"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Project from "@/components/Project";
import Arrow from "@/components/Arrow";

let introPlayed = false;

export default function Home() {
  const [skipIntro] = useState(() => introPlayed);
  useEffect(() => {
    introPlayed = true;
  }, []);

  return (
    <main className="flex w-full flex-grow flex-col items-start gap-2">
      <section className="justify-start">
        <h1 className="text-7xl">Projects</h1>
      </section>
      <div className="flex flex-col gap-2">
          <p className="">
            Under construction!
          </p>
        </div>
      <section
        className={`flex max-w-[450px] flex-col items-start gap-8${
          skipIntro ? " projects-static" : ""
        }`}
      >
        <Project
          index={0}
          title="Heartbreaker"
          year="2026"
          desc={
            <>
              Top-down game where you collect evidence to win your divorce, made
              for{" "}
              <span className="hover-bg">
                <a
                  href="https://chillennium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 500 }}
                >
                  <>Chillennium 2026<Arrow /></>
                </a>
              </span>
              .
            </>
          }
          imgUrl="/projects/hb.webp"
          iconSrc="/itchio-logo.svg"
          iconAlt="itch.io icon"
          iconUrl="https://draydere.itch.io/heartbreaker"
          accentColor="#A0AED9"
          details={[
            "A 2-player game where you race to gossip with the local aliens about your ex! Town is small, so word gets around fast.",
            'The theme of this game jam was "Nah, I\'d win." But is winning always the solution? Maybe you can find another way...',
            <Image
              key="shot"
              src="/projects/hb-s.webp"
              alt="screenshot"
              width={800}
              height={450}
              className="h-auto w-full"
            />,
          ]}
        />
        <Project
          index={1}
          title="TAMUhack 2026"
          desc="Event website for Texas A&M’s most fruitful hackathon!"
          imgUrl="/projects/th26.webp"
          iconSrc="/globe-icon.svg"
          iconAlt="website icon"
          iconUrl="https://th26.tamuhack.org"
          accentColor="#FDF7E7"
        />

        <Project
          index={2}
          title="HowdyHack 2025"
          desc="Event website for Texas A&M’s beginner hackathon with a colorful skater twist!"
          imgUrl="/projects/hh25.webp"
          iconSrc="/globe-icon.svg"
          iconAlt="website icon"
          iconUrl="https://hh25.tamuhack.org"
          accentColor="#C6F5FC"
          details="Learned the importance of making illustration-based components web-friendly."
        />

        <Project
          index={3}
          title="Dream Weaver"
          year="2025"
          desc="2D platformer game where you can grab objects out of your background, made for Chillennium 2025."
          imgUrl="/projects/dw.webp"
          imgAlt="Dream Weaver"
          iconSrc="/itchio-logo.svg"
          iconAlt="itch.io icon"
          iconUrl="https://willowtree314.itch.io/dream-weaver"
          accentColor="#DBCFCC"
          details={[
            "My first game jam, first time using Godot, first time making a game, etc. Basically everything that could've went wrong, went wrong. We overestimated how much of our game we'd be able to build in 48 hours, despite mentors telling us that 3 unique, fleshed-out levels with different mechanics and assets was definitely outside of our scope. ",
            "Then we underestimated how long Godot export takes, so we didn't even submit our project in time.",
          ]}
        />
        <Project
          index={4}
          title="Tritone"
          year="2024"
          desc="Live audio locater and transcription IoT system for HoH individuals."
          imgUrl="/projects/tritone.webp"
          iconSrc="/github-icon.svg"
          iconAlt="github icon"
          iconUrl="https://github.com/skandrigi/hackutd24"
          accentColor="#F5EFEA"
        />

        <Project
          index={5}
          title="Merge"
          year="2024"
          desc="Interactive command line interface application designed to simplify and accelerate Git merge conflict resolution."
          imgUrl="/projects/merge.webp"
          iconSrc="/github-icon.svg"
          iconAlt="github icon"
          iconUrl="https://github.com/skandrigi/MergeCLI"
          accentColor="#f7f4ee"
        />
      </section>
    </main>
  );
}
