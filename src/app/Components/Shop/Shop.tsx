'use client';
import React, { useEffect, useState, useRef } from 'react'
import ProductList from '../Product/ProductList';
import ProductCardSkeleton from '../Skeleton/ProductCardSkeleton';
import { mockData } from '@/app/lib/db/mockData';

interface Product {
    id: string;
    title: string;
    imageUrl: string;
}

const Shop = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasStartedLoading, setHasStartedLoading] = useState<boolean>(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Start loading when section becomes visible
                    if (entry.isIntersecting && !hasStartedLoading) {
                        setHasStartedLoading(true);
                        setLoading(true);
                        
                        const timer = setTimeout(() => {
                            setProducts(mockData.slice(0, 4));
                            setLoading(false);
                        }, 2000);

                        return () => clearTimeout(timer);
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 20% visible
                rootMargin: '0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasStartedLoading]);

    return (
        <section ref={sectionRef} className="min-h-screen py-16 px-4 bg-base-100">
            <div className="container mx-auto max-w-7xl">
                <h2 className="font-bold text-3xl sm:text-4xl text-center mb-12">Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {/* Show skeletons while loading, else show products */}
                    {loading ? (
                        Array(4).fill(0).map((_, index) => (
                            <ProductCardSkeleton key={index} />
                        ))
                    ) : (
                        <ProductList products={products} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Shop;

// using the useEffect hook, in our hook we create a variable timer that holds the setTimeout() function. Inside the function, we set the products state to the first 4 items from the mockData array after a delay of 5 seconds (5000 milliseconds). We also set the loading state to false after the data is "fetched". The cleanup function clears the timer when the component unmounts to prevent memory leaks.