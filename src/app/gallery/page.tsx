import React from 'react';
import HeroGallery from '../Components/Hero/HeroGallery';
import GallerySection from '../Components/GallerySection/GallerySection';

const GalleryPage = () => {
    return (
    <div className="min-h-screen">
        <HeroGallery />
        <GallerySection />
    </div>
    )
}

export default GalleryPage