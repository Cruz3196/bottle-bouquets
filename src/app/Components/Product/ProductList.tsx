import React from "react";
import ProductCard from "../Product/ProductCard";
import { StaticImageData } from "next/image";

interface Product {
  id: string;
  imageUrl: string | StaticImageData; // Update this
  title: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          id={product.id}
        />
      ))}
    </>
  );
};

export default ProductList;
