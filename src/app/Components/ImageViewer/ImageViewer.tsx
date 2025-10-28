// components/ImageViewer/ImageViewer.tsx
"use client";
import React, { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { X, Loader2 } from "lucide-react";
import { StaticImageData } from "next/image";

interface ImageViewerProps {
  imageUrl: string | StaticImageData;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageViewer = ({
  imageUrl,
  title,
  isOpen,
  onClose,
}: ImageViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  // Check if imageUrl is a string (Cloudinary public_id) or StaticImageData
  const isCloudinaryId = typeof imageUrl === "string";

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      setIsLoading(true);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close viewer"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-[5]">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      )}

      {/* Image Container */}
      <div
        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          {isCloudinaryId ? (
            <CldImage
              src={imageUrl as string}
              alt={title}
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
              onLoad={() => setIsLoading(false)}
            />
          ) : (
            <Image
              src={imageUrl as StaticImageData}
              alt={title}
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
              onLoad={() => setIsLoading(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
