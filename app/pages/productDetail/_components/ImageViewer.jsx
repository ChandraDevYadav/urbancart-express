"use client";
import { useState } from "react";
import Image from "next/image";

export default function ImageViewer() {
  const defaultImage = "/DM.png"; // Default main image
  const [mainImage, setMainImage] = useState(defaultImage); // State for the main image

  const smallImages = [
    { src: "/HO1.png", alt: "Thumbnail 1" },
    { src: "/HO2.png", alt: "Thumbnail 2" },
    { src: "/HO3.png", alt: "Thumbnail 3" },
    { src: "/HO4.png", alt: "Thumbnail 4" },
  ];

  return (
    <div>
      <ul className="flex gap-2 py-3">
        <li className="text-[#141414] font-medium text-sm border-r-2 my-2 border-[#BBBBBB] pr-2">
          Home
        </li>
        <li className="text-[#141414] font-medium text-sm border-r-2 my-2 border-[#BBBBBB] pr-2">
          Men
        </li>
        <li className="text-[#999999] font-medium text-sm my-2">
          Black Oversize Large Size Comfortable Cotton T-Shirt
        </li>
      </ul>

      <div className="relative w-full max-w-[469px] h-auto mb-5">
        <Image
          src={mainImage} // Use the state for the main image
          width={600}
          height={600}
          className="w-[600px] h-[500px] object-cover"
          alt="Main Product"
          priority
        />
      </div>

      <ul className="flex gap-5 mt-5">
        {smallImages.map((image) => (
          <li key={image.alt} className="relative w-[63px] h-[81px]">
            <Image
              src={image.src}
              width={63}
              height={81}
              className="rounded-[3px] border-[1.5px] cursor-pointer object-cover transition-transform duration-75 hover:scale-100"
              alt={image.alt}
              onMouseEnter={() => setMainImage(image.src)} // Set main image on hover
              onMouseLeave={() => setMainImage(defaultImage)} // Revert to default image on mouse leave
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
