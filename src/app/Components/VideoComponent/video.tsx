"use client";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function Video() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-md z-10">
          <Loader2 className="w-12 h-12 text-gray-400 animate-spin" />
        </div>
      )}

      <CldVideoPlayer
        src="Bottle-Bouquets"
        muted
        loop
        className="w-full h-auto rounded-md shadow-lg"
        width={400}
        height={500}
        onMetadataLoad={() => setIsLoading(false)}
        onDataLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
