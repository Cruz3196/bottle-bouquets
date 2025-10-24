import React from "react";
import { StaticImageData } from "next/image";

interface GalleryCardProps {
  id: string;
  title: string;
  imageUrl: string | StaticImageData;
  isLarge?: boolean;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  id,
  title,
  imageUrl,
  isLarge = false,
}) => {
  const boxStyle = `bg-neutral-100 border-2 rounded-xl p-1 flex items-center justify-center overflow-hidden`;

  // Convert StaticImageData to string if needed
  const imageSrc = typeof imageUrl === "string" ? imageUrl : imageUrl.src;

  return (
    <div
      className={`${boxStyle} ${isLarge ? "lg:col-span-1 lg:row-span-2" : ""}`}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-contain rounded-lg" // Changed to object-contain
      />
    </div>
  );
};

export default GalleryCard;
