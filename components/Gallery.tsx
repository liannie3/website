import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/gallery/mock_trial.mp4",
  "/gallery/latios.png",
  "/gallery/fence1.jpg",
  "/gallery/fence2.png",
  "/gallery/fence3.png",
  "/gallery/annie.png",
  "/gallery/baseball.PNG",
  "/gallery/chicago.JPEG",
  "/gallery/diver1.PNG",
  "/gallery/diver2.jpg",
  "/gallery/fiya.JPEG",
  "/gallery/cruise.PNG",
  "/gallery/google.png",
  "/gallery/hk.png",
  "/gallery/chongqing.png",
  "/gallery/ping.jpeg",
  "/gallery/sitting.jpeg",
  "/gallery/revicon.jpeg",
  "/gallery/revlogo.jpeg",
  "/gallery/revrodeo.mp4",
  "/gallery/tigerrun.mp4",
  "/gallery/revwalk.mp4",
  "/gallery/idle.mp4",
];

const isVideo = (src: string) => src.endsWith(".mp4");

let introPlayed = false;

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
          {column.map((src, rowIndex) => (
            <div
              key={src}
              className="gallery-item relative cursor-pointer"
              style={{ animationDelay: `${0.25 + rowIndex * 0.15}s` }}
              onClick={() => setSelectedImage(src)}
            >
              {isVideo(src) ? (
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-auto w-full object-cover"
                />
              ) : (
                <Image
                  src={src}
                  alt={`Image ${rowIndex * 2 + colIndex + 1}`}
                  width={300}
                  height={0}
                  className="h-auto w-full object-cover"
                />
              )}
              <div className="absolute inset-0 overflow-hidden bg-[hsl(0,0%,0.4%,0.15)] opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </div>
          ))}
        </div>
      ))}

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative bg-white p-0">
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
      )}
    </div>
  );
}
