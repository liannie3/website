"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Project from "@/components/Project";
import hbShot from "@/public/projects/hb-s.webp";
import hbBlooberFamily from "@/public/projects/hb-bloober-family.webp";
import hbEmotions from "@/public/projects/hb-emotions.webp";
import hbFountain from "@/public/projects/hb-fountain.webp";
import landingBag from "@/public/projects/th26/landing-bag.png";
import seals from "@/public/projects/th26/question-seals.png";
import tigers from "@/public/projects/th26/laptop-tigers.png";
import landingBox from "@/public/projects/th26/landing-box.png";
import stickerLemon from "@/public/projects/th26/sticker-lemon.png";
import stickerStamp from "@/public/projects/th26/sticker-stamp.png";
import navbarGif from "@/public/projects/th26/navbar.gif";
import scrollGif from "@/public/projects/th26/scroll.gif";
import hardware from "@/public/projects/th25/hardware.png"
import scooter from "@/public/projects/th25/scooter.png";
import monitor from "@/public/projects/th25/monitor.png";
import headphones from "@/public/projects/th25/headphones.png";
import footer from "@/public/projects/th25/footer.png";
import umbrella from "@/public/projects/th25/umbrella.png";
import stickerDrafts from "@/public/projects/th26/sticker-drafts.png";
import tomatoCat from "@/public/projects/th26/tomato-cat.png";
import hh25sketch from "@/public/projects/hh25/concept.png";
import stickerBoard from "@/public/projects/hh25/sticker-board.png";
import bunny from "@/public/projects/hh25/bunny.png";
import tiger from "@/public/projects/hh25/tiger.png";

let introPlayed = false;

export default function Home() {
  const [skipIntro] = useState(() => introPlayed);
  useEffect(() => {
    introPlayed = true;
  }, []);

  return (
    <main className="flex grow flex-col gap-2">
      <h1 className="text-7xl">Projects</h1>
      <p>Under construction!</p>
      <div
        className={`flex max-w-[32rem] flex-col gap-8 ${
          skipIntro ? "projects-static" : ""
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
            "Heartbreaker is a 2-player game where the other player is your vengeful alien ex.",

            "Your divorce case is coming up soon and you've had the wonderful idea of writing a hit piece on your ex to swing public opinion in your favor. Unfortunately for you, they're trying to do the same. ",
            <Image
              src={hbShot}
              alt="Game screenshot"
              className="h-auto w-full"
            />,
            "To write this hit piece, you'll need to collect some dirt on them from the local aliens. Town is small, so word gets around fast—talk to people as quickly as you can.",

            "Heartbreaker was made in 48 hours by 2 developers, 1 writer, and 1 illustrator (me!). Making a cast of quirky aliens to populate town was super fun, but my favorites ended up being the players' family, shown below.",

            <Image
              src={hbBlooberFamily}
              alt="Bloober family art"
              className="h-auto w-full"
            />,
            "Meet the dysfunctional Bloober family! Left to right: Zill, Zerica, Zlessing, Zustin.",

            "My team couldn't come up with a game idea we liked until the jam was more than halfway over. Somehow this happens every time. Our first concept was a series of minigames that you play against your partner. Then we remembered our last game jam where we completely overscoped and weren't even able to complete a level, and scaled it down a bit.",
            "We settled on just having you walk around and talk to people to collect evidence. That was pretty boring on its own, so we added emotions as a player feedback mechanism.",
            <Image
              src={hbEmotions}  
              alt="Emotion icons for both players"
              className="h-auto w-full"
            />,
            "These icons were churned out on my friend's couch about 2 hours before the deadline 🙂",

            "Emotions affect your evidence-gathering ability, and different people will give you different emotions. Talking to your friend makes you feel better than talking to, say, your ex's coworker.",

            "Our goal was to make the player actually pay attention to who they choose to talk to.",

            <Image
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
          details={[
            <p><b>Roles:</b> Design Lead, Illustration, Development</p>,
            "I led a team of 6 designers in creating a visual identity and web experience for TAMUhack 2026. Our goal was to help prospective hackers quickly understand the event and apply, while giving the experience a playful identity that felt distinctly TAMUhack and not like other hackathons.",
            "I wanted the site to reward exploration without slowing down visitors who arrived for specific information or links. To achieve this, we used lightweight hover and scroll interactions to add personality while preserving a clear path to the date, location, and application.",
            <Image
              src={scrollGif}
              alt="Gif showing the text animations that appear as you scroll down the page"
              unoptimized
              className="h-auto w-full"
            />,
            "I defined the interaction direction and implemented several scroll animations with GSAP. Animations supported the hierarchy of information by directing the user toward important content, like the application button or event location. We avoided motion that distracted from the content or served no clear purpose.",
            "We iterated through multiple landing screen designs before eventually settling on the simplest one with the least visual clutter, so that the event information would be the first thing visitors saw.",
            <Image
              src={landingBag}
              alt="Landing screen draft featuring fruits emerging from a shopping bag"
              className="h-auto w-full"
            />,
            "Our second idea was to put the fruits in a crate and make them draggable with collision physics, but we decided that that interaction wasn't worth the heavy strain a physics engine would put on older devices.",
            <Image
              src={landingBox}
              alt="Landing screen draft featuring fruits in a fruit crate"
              className="h-auto w-full"
            />,
            "For our navbar, I wanted to try something new after using a simpler navbar for the past 2 events. A teammate proposed turning the navigation into a postcard. I advocated for the interaction to expand on hover/keyboard focus for desktop and on tap for touch devices, keeping event information one interaction away across input methods.",
            <Image
              src={navbarGif}
              alt="Gif showing the navbar's hover states"
              unoptimized
              className="h-auto w-full"
            />,
            "I divided the site into sections assigned to different people, held recurring critiques, and maintained the shared visual direction across six designers. Because I also contributed to implementation, I could flag expensive interactions or scenes early and help the team adjust designs before handoff.",
            "Mobile layouts were implemented after desktop, but because each section was designed with reusable components in mind, translating our layouts to mobile viewports was near-seamless.",
            "We shipped the website in time for registration to 20K+ visitors and 500+ applications received in the first month. The project taught me to evaluate expressive interactions against their effect on hierarchy, performance, and input accessibility.",
            <p><b>Asset Design</b></p>,
            <div className ="flex items-start gap-4">
            <Image
              src={tigers}
              alt="Drawing of orange tigers around a laptop"
              className="h-auto w-[40%]"
            />
            <Image
              src={seals}
              alt="Drawing of blueberry seals that look confused"
              className="h-auto w-[40%]"
            />
            </div>,
            <div className ="flex items-start gap-4">
            <Image
              src={stickerLemon}
              alt="Drawing of lemon-shaped sticker with little mango birds inside"
              className="h-auto w-[40%]"
            />
            <Image
              src={stickerStamp}
              alt="Drawing of stamp-shaped sticker with a tomato cat inside"
              className="h-auto w-[40%]"
            />
            </div>,
            <div className ="flex items-start gap-4">
            <Image
              src={stickerDrafts}
              alt="Sketches of stickers of crates with fruit animals inside"
              className="h-auto w-[60%]"
            />
            <Image
              src={tomatoCat}
              alt="Drawing of a tomato cat jumping happily"
              className="h-auto w-[40%]"
            />
            </div>
          ]}
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
          details={[
            "Learned the importance of making illustration-based components web-friendly.",
            <p><b>Asset Design</b></p>,
            <div className ="flex items-start gap-4">
            <Image
              src={bunny}
              alt="Drawing of angry-looking bunny on a skateboard"
              className="h-auto w-[40%]"
            />
            <Image
              src={tiger}
              alt="Drawing of a chill tiger wearing jorts"
              className="h-auto w-[40%]"
            />
            <Image
              src={stickerBoard}
              alt="Sticker of a skateboard with a tiger sticking it's tongue out"
              className="h-auto w-[20%]"
            />
            </div>,
            <div className ="flex items-start gap-4">
            <Image
              src={hh25sketch}
              alt="Character design sketches of the tiger and bunny "
              className="h-auto w-[90%]"
            />
            </div>,
          ]}
        />

        <Project
          index={3}
          title="Dream Weaver"
          year="2025"
          desc={
            <>
              2D platformer game where you can grab objects out of your
              background, made for{" "}
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
          title="TAMUhack 2025"
          desc="Event website for Texas A&M’s most fruitful hackathon!"
          imgUrl="/projects/th25.png"
          iconSrc="/globe-icon.svg"
          iconAlt="website icon"
          iconUrl="https://th25.tamuhack.org"
          accentColor="#FFFFFF"
          details={[
            <p><b>Roles:</b> Web Design, Brand Design</p>,
            <div className ="flex items-start gap-4">
            <Image
              src={footer}
              alt="Drawing of orange tigers around a laptop"
              className="h-auto w-[40%]"
            />
            <Image
              src={hardware}
              alt="Drawing of blueberry seals with a question mark"
              className="h-auto w-[40%]"
            />
            </div>,
                        <div className ="flex items-start gap-4">
            <Image
              src={scooter}
              alt="Drawing of orange tigers around a laptop"
              className="h-auto w-[40%]"
            />
            <Image
              src={headphones}
              alt="Drawing of blueberry seals with a question mark"
              className="h-auto w-[40%]"
            />
            </div>,
                        <div className ="flex items-start gap-4">
            <Image
              src={monitor}
              alt="Drawing of orange tigers around a laptop"
              className="h-auto w-[40%]"
            />
            <Image
              src={umbrella}
              alt="Drawing of blueberry seals with a question mark"
              className="h-auto w-[40%]"
            />
            </div>
          ]}
        />
        <Project
          index={5}
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
          index={6}
          title="Merge"
          year="2024"
          desc="Interactive command line interface application designed to simplify and accelerate Git merge conflict resolution."
          imgUrl="/projects/merge.webp"
          iconSrc="/github-icon.svg"
          iconAlt="github icon"
          iconUrl="https://github.com/skandrigi/MergeCLI"
          accentColor="#f7f4ee"
        />
      </div>
    </main>
  );
}
