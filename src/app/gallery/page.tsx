import { Suspense } from "react";
import GallerySection from "../Components/GallerySection/GallerySection";
import ProductCardSkeleton from "../Components/Skeleton/ProductCardSkeleton";
import HeroGallery from "../Components/Hero/HeroGallery";

function GalleryLoading() {
  return (
    <section className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeroGallery />
      <Suspense fallback={<GalleryLoading />}>
        <GallerySection />
      </Suspense>
    </div>
  );
}
