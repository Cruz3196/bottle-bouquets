import React from 'react';

const ProductCardSkeleton = () => {
    return (
        <div className="skeleton max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
            <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden flex flex-col h-full">
                <div className="w-full aspect-[9/16] bg-gray-300 animate-pulse"></div>
            </div>
        </div>
    )
}

export default ProductCardSkeleton