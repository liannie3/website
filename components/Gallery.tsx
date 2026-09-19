"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import images from "./gallery.json";

const isVideo = (src: string) => src.endsWith(".mp4");

const GALLERY_SIZES = "(max-width: 768px) 45vw, 360px";

let introPlayed = false;

function GalleryVideo({
  src,
  w,
  h,
}: {
  src: string;
  w: number;
  h: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "100px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      src={src}
      width={w}
      height={h}
      loop
      muted
      playsInline
      preload="metadata"
      className="h-auto w-full object-cover"
    />
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [skipIntro] = useState(() => introPlayed);
  useEffect(() => {
    introPlayed = true;
  }, []);

  const columns = [
    images.filter((_, i) => i % 2 === 0),
    images.filter((_, i) => i % 2 === 1),
  ];

  return (
    <div className={`flex gap-4${skipIntro ? " gallery-static" : ""}`}>
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-1 flex-col gap-4">
          {column.map((item, rowIndex) => (
            <div
              key={item.src}
              className="gallery-item relative cursor-pointer"
              style={{ animationDelay: `${0.25 + rowIndex * 0.15}s` }}
              onClick={() => setSelectedImage(item.src)}
            >
              {isVideo(item.src) ? (
                <GalleryVideo src={item.src} w={item.w} h={item.h} />
              ) : (
                <Image
                  src={item.src}
                  alt={`Image ${rowIndex * 2 + colIndex + 1}`}
                  width={item.w}
                  height={item.h}
                  sizes={GALLERY_SIZES}
                  className="h-auto w-full object-cover"
                />
              )}
              <div className="absolute inset-0 overflow-hidden bg-[hsl(0,0%,0.4%,0.15)] opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </div>
          ))}
        </div>
      ))}

      {selectedImage && (
        <dialog
          ref={dialogRef}
          aria-label="Gallery preview"
          tabIndex={-1}
          className="fixed inset-0 m-0 h-dvh max-h-none w-dvw max-w-none border-0 bg-black/80 p-0"
          onCancel={(event) => {
            event.preventDefault();
            setSelectedImage(null);
          }}
        >
          <div
            className="flex h-full w-full items-center justify-center"
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelectedImage(null);
            }}
          >
            <div className="relative bg-white">
              {isVideo(selectedImage) ? (
                <video
                  src={selectedImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-auto max-h-[95vh] w-auto max-w-[95vw] object-contain"
                />
              ) : (
                <Image
                  src={selectedImage}
                  alt="Selected"
                  width={1200}
                  height={1200}
                  sizes="95vw"
                  className="h-auto max-h-[95vh] w-auto max-w-[95vw] object-contain"
                />
              )}
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
