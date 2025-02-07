import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const images = [
    "/gallery/fence1.jpg",
    "/gallery/fence2.png",
    "/gallery/pearls.jpg",
    "/gallery/ping.jpeg",
    "/gallery/sitting.jpeg",
  ];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((src, index) => (
            <div 
                key={index} 
                className="relative cursor-pointer" 
                onClick={() => setSelectedImage(src)}
            >
                <Image 
                    src={src} 
                    alt={`Image ${index + 1}`} 
                    width={300} 
                    height={0} 
                    layout="responsive"
                    className="w-full h-auto" 
                />
                <div
                    className="absolute inset-0 overflow-hidden bg-[hsl(0,0%,0.4%,0.15)] opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
            </div>
        ))}

        {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
            <div className="relative p-4 bg-white">
                <Image src={selectedImage} alt="Selected" width={600} height={400} className="rounded-md" />
            </div>
            </div>
        )}
        </div>
    )
}