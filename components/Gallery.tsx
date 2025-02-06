import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const images = [
    "/annie.png",
    "/annie3.png",
    "/guy.png",
  ];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {images.map((src, index) => (
            <div key={index} className="cursor-pointer" onClick={() => setSelectedImage(src)}>
            <Image src={src} alt={`Image ${index + 1}`} width={300} height={200} className="" />
            </div>
        ))}

        {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
            <div className="relative p-4 bg-white rounded-lg">
                <Image src={selectedImage} alt="Selected" width={600} height={400} className="rounded-md" />
            </div>
            </div>
        )}
        </div>
    )
}