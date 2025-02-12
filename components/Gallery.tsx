
import Image from "next/image";
import { useState } from "react";

const images = [
    "/gallery/fence1.jpg",
    "/gallery/fence2.png",
    "/gallery/fence3.png",
    "/gallery/annie.png",
    "/gallery/pearls.jpg",
    "/gallery/google.png",
    "/gallery/sitting.jpeg",
    "/gallery/hk.png",
    "/gallery/chongqing.png",
    "/gallery/ping.jpeg",
    "/revrodeo.gif",
  ];

  export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="columns-2 md:columns-2 gap-4">
            {images.map((src, index) => (
                <div key={index} className="mb-4 break-inside-avoid cursor-pointer relative" onClick={() => setSelectedImage(src)}>
                    <Image 
                        src={src} 
                        alt={`Image ${index + 1}`} 
                        width={300} 
                        height={0} 
                        className="w-full h-auto object-cover" 
                    />
                    <div
                    className="absolute inset-0 overflow-hidden bg-[hsl(0,0%,0.4%,0.15)] opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </div>
            ))}

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
                    <div className="relative p-0 bg-white">
                        <Image 
                            src={selectedImage} 
                            alt="Selected" 
                            width={0} 
                            height={0} 
                            sizes="95vw"
                            className="max-w-[95vw] max-h-[95vh] w-auto h-auto"
                            layout="responsive" 
                        />
                    </div>
                </div>
            )}
        </div>
    );
}