"use client";
import React, { useEffect, useState, useRef } from "react";
import ProductList from "../Product/ProductList";
import ProductCardSkeleton from "../Skeleton/ProductCardSkeleton";
import { mockData } from "@/app/lib/db/mockData";
import { StaticImageData } from "next/image";

interface Product {
  id: string;
  title: string;
  imageUrl: string | StaticImageData; // Add StaticImageData here
}

const GallerySectionTwo = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProducts(mockData.slice(0, 8)); // Simulate fetching first 4 products
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen py-16 px-4 bg-base-100">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {/* Show skeletons while loading, else show products */}
          {loading ? (
            Array(8)
              .fill(0)
              .map((_, index) => <ProductCardSkeleton key={index} />)
          ) : (
            <ProductList products={products} />
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySectionTwo;
