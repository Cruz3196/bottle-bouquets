// GallerySection.tsx (already a server component)
import React from "react";
import ProductList from "../Product/ProductList";
import { fetchCloudinaryImages } from "../../lib/cloudinaryFetch";

const GallerySection = async () => {
  // Fetch ALL images (no tag filter)
  const products = await fetchCloudinaryImages({
    maxResults: 8,
  });

  return (
    <section className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {products.length === 0 ? (
          <div className="text-center text-red-500 mb-4">
            No images found in Cloudinary
          </div>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          <ProductList products={products} />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
