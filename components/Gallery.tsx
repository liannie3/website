import Image from "next/image";
import { useState } from "react";

const images = [
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
  "/gallery/revrodeo.gif",
  "/gallery/tigerrun.GIF",
  "/gallery/revwalk.GIF",
  "/gallery/idle.GIF",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="columns-2 gap-4 md:columns-2">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative mb-4 cursor-pointer break-inside-avoid"
          onClick={() => setSelectedImage(src)}
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={300}
            height={0}
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 overflow-hidden bg-[hsl(0,0%,0.4%,0.15)] opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </div>
      ))}

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative bg-white p-0">
            <Image
              src={selectedImage}
              alt="Selected"
              width={1200}
              height={1200}
              sizes="95vw"
              className="h-auto max-h-[95vh] w-auto max-w-[95vw] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
