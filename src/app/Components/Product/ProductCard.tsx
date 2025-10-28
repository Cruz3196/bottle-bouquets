// components/Product/ProductCard.tsx
"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
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

  // Check if it's a Cloudinary URL
  const isCloudinaryUrl =
    typeof imageUrl === "string" && imageUrl.includes("cloudinary.com");

  // Extract public_id properly from Cloudinary URL
  const getPublicId = (url: string): string | null => {
    try {
      // Format: https://res.cloudinary.com/{cloud_name}/image/upload/v{version}/{public_id}.{format}
      const parts = url.split("/upload/");
      if (parts.length < 2) return null;

      // Get everything after /upload/ and remove version prefix
      const afterUpload = parts[1];
      // Remove version number (v1234567890/)
      const withoutVersion = afterUpload.replace(/^v\d+\//, "");
      // Remove file extension
      const publicId = withoutVersion.split(".")[0];

      return publicId;
    } catch (error) {
      console.error("Error extracting public_id:", error);
      return null;
    }
  };

  const publicId =
    isCloudinaryUrl && typeof imageUrl === "string"
      ? getPublicId(imageUrl)
      : null;

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
            {isCloudinaryUrl && publicId ? (
              <CldImage
                src={publicId}
                alt={title}
                fill
                className="object-cover transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 50vw, 
                       25vw"
                onLoad={() => setIsLoading(false)}
              />
            ) : (
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
            )}
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
