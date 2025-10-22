"use client";
import React, { useEffect, useState } from 'react'
import ProductList from '../Product/ProductList';
import { mockData } from '@/app/lib/db/mockData';
import ProductCardSkeleton from '../Skeleton/ProductCardSkeleton';

interface Product {
    id: string;
    title: string;
    imageUrl: string;
}

const Shop = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // using the effect hook to simulate data fetching
    useEffect(() => {
        setLoading(true);
        // creating a time out to simulate an API call
        const timer = setTimeout(() => {
            setProducts(mockData);
            setLoading(false);
        }, 2000); // setting the delay to 5 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="min-h-screen py-16 px-4 bg-base-100">
            <div className="container mx-auto max-w-7xl">
                <h2 className="font-bold text-3xl sm:text-4xl text-center mb-12">Our Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                        {loading ? (
                            // Show same number of skeletons as you have products
                            Array(mockData.length).fill(0).map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))
                            ) : (
                            <ProductList products={products} />
                        )}
                    </div>
            </div>
        </section>
    )
}

export default Shop


// created a variable timer that holds the timeout() function. inside the function, we set the product state to our mock data, and we ensure that the data after 5 seconds, we cancel the timer using the clearTimeout() function to avoid memory leaks.