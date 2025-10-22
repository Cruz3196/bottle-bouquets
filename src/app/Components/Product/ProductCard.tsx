import React from 'react';

interface ProductCardProps {
    imageUrl: string;
    title: string;
    id: string | number;
}

const ProductCard = ({ imageUrl, title }: ProductCardProps) => {
    return (
        // this is the width container for the product card
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            {/* this is the product card */}
            <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden flex flex-col h-full">
                {/* this is for the image in the product card */}
                <figure className="w-full aspect-[9/16] bg-gray-100 flex items-center justify-center">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="object-cover w-full h-full"
                    />
                </figure>
            </div>
        </div>
    );
};

export default ProductCard;