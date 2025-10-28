// components/Product/ProductCard.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Loader2 } from "lucide-react";
import ImageViewer from "../ImageViewer/ImageViewer";

interface ProductCardProps {
  imageUrl: string | StaticImageData;
  title: string;
  id: string | number;
}

const ProductCard = ({ imageUrl, title }: ProductCardProps) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden flex flex-col h-full cursor-pointer transition-shadow">
          <figure
            className="w-full aspect-[12/16] bg-gray-100 flex items-center justify-center relative"
            onClick={() => setIsViewerOpen(true)}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
              </div>
            )}
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 
                   (max-width: 1200px) 50vw, 
                   25vw"
              onLoad={() => setIsLoading(false)}
            />
          </figure>
        </div>
      </div>
      <ImageViewer
        imageUrl={imageUrl}
        title={title}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </>
  );
};

export default ProductCard;
