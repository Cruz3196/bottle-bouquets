// app/page.tsx
import { Suspense } from "react";
import Hero from "./Components/Hero/Hero";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import ProductCardSkeleton from "./Components/Skeleton/ProductCardSkeleton";

function ShopLoading() {
  return (
    <section className="flex items-center justify-center py-12 lg:py-6 px-4 bg-white min-h-[60vh] lg:min-h-[70vh]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      <Suspense fallback={<ShopLoading />}>
        <Shop />
      </Suspense>

      <About />
    </div>
  );
}
