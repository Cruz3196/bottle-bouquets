import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProductCardProps {
  imageUrl: string | StaticImageData;
  title: string;
  id: string | number;
}

const ProductCard = ({ imageUrl, title }: ProductCardProps) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden flex flex-col h-full">
        <figure className="w-full aspect-[12/16] bg-gray-100 flex items-center justify-center relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 25vw"
          />
        </figure>
      </div>
    </div>
  );
};

export default ProductCard;
