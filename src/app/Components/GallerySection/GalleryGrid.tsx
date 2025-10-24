import React from "react";
import GalleryCard from "./GalleryCard";
import { StaticImageData } from "next/image";

interface Product {
  id: string;
  title: string;
  imageUrl: string | StaticImageData;
}

interface GalleryGridProps {
  products: Product[];
  largeItemIds?: string[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  products,
  largeItemIds = [],
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-4">
      {products.map((item: Product) => (
        <GalleryCard
          key={item.id}
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          isLarge={largeItemIds.includes(item.id)}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
