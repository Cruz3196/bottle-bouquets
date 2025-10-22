import React from 'react'
import ProductCard from '../Product/ProductCard'

interface Product {
    id: string;
    imageUrl: string;
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