"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Project from "@/components/Project";
import hbShot from "@/public/projects/hb-s.webp";
import hbBlooberFamily from "@/public/projects/hb-bloober-family.png";
import hbEmotions from "@/public/projects/hb-emotions.png";
import hbFountain from "@/public/projects/hb-fountain.png";

let introPlayed = false;

export default function Home() {
  const [skipIntro] = useState(() => introPlayed);
  useEffect(() => {
    introPlayed = true;
  }, []);

  return (
    <main className="flex w-full grow flex-col items-start gap-2">
      <section className="justify-start">
        <h1 className="text-7xl">Projects</h1>
      </section>
      <div className="flex flex-col gap-2">
          <p className="">
            Under construction!
          </p>
        </div>
      <section
        className={`flex max-w-[32rem] flex-col items-start gap-8 ${
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
                >
                  <>Chillennium 2026</>
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
            'Heartbreaker is a 2-player game where the other player is your vengeful alien ex.',
            
            'Your divorce case is coming up soon and you\'ve had the wonderful idea of writing a hit piece on your ex to swing public opinion in your favor. Unfortunately for you, they\'re trying to do the same. ',
            <Image
              key="shot"
              src={hbShot}
              alt="Game screenshot"
              className="h-auto w-full"
            />,
            'To write this hit piece, you\'ll need to collect some dirt on them from the local aliens. Town is small, so word gets around fast—talk to people as quickly as you can.',

            'Heartbreaker was made in 48 hours by 2 developers, 1 writer, and 1 illustrator (me!). Making a cast of quirky aliens to populate town was super fun, but my favorites ended up being the players\' family, shown below.',

            <Image
              key="shot"
              src={hbBlooberFamily}
              alt="Bloober family art"
              className="h-auto w-full"
            />,
            'Meet the dysfunctional Bloober family! Left to right: Zill, Zerica, Zlessing, Zustin.',
            
            'My team couldn\'t come up with a game idea we liked until the jam was more than halfway over. Somehow this happens every time. Our first concept was a series of minigames that you play against your partner. Then we remembered our last game jam where we completely overscoped and weren\'t even able to complete a level, and scaled it down a bit.',
            'We settled on just having you walk around and talk to people to collect evidence.',
            'That was pretty boring on its own, so we added a player feedback mechanism: emotions.',
            
            <Image
              key="shot"
              src={hbEmotions}
              alt="Emotion icons for both players"
              className="h-auto w-full"
            />,
            'These icons were churned out on my friend\'s couch about 2 hours before the deadline 🙂',
            
            'Emotions affect your evidence-gathering ability, and different people will give you different emotions. Talking to your friend makes you feel better than talking to, say, your ex\'s coworker.',
            
            'Our goal was to make the player actually pay attention to who they choose to talk to.',

            <Image
              key="shot"
              src={hbFountain}
              alt="Fountain and alien art"
              className="h-auto w-full"
            />,
            'The theme of this game jam was "Nah, I\'d win," so yes, you can win this game. But is winning really the best resolution here? Play to the end and find out!',
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
          desc={
            <>
            2D platformer game where you can grab objects out of your background, made for{" "}
              <span className="hover-bg">
                <a
                  href="https://chillennium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <>Chillennium 2025</>
                </a>
              </span>
              .
            </>
          }
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
