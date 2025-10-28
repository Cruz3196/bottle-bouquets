import React from "react";
import ProductList from "../Product/ProductList";
import { fetchCloudinaryImages } from "../../lib/cloudinaryFetch";
const Shop = async () => {
  // Fetch only images with "Shop" tag
  const products = await fetchCloudinaryImages({
    tags: ["Shop"],
    maxResults: 4,
  });
  return (
    <section className="flex items-center justify-center py-12 lg:py-6 px-4 bg-white min-h-[60vh] lg:min-h-[70vh]">
      <div className="container mx-auto max-w-7xl">
        {products.length === 0 ? (
          <div className="text-center text-red-500 mb-4">
            No shop images found
          </div>
        ) : null}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          <ProductList products={products} />
        </div>
      </div>
    </section>
  );
};
export default Shop;
