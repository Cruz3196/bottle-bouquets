import React from 'react';

interface GalleryCardProps {
    id: string;
    title: string;
    imageUrl: string;
    isLarge?: boolean;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ id, title, imageUrl, isLarge = false }) => {
    const boxStyle = `bg-neutral-100 border-2 rounded-xl p-2 flex items-center justify-center overflow-hidden`;

    return (
        <div
            className={`${boxStyle} ${
                isLarge ? 'lg:col-span-1 lg:row-span-2' : ''
            }`}
        >
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover rounded-lg"
            />
        </div>
    );
};

export default GalleryCard;