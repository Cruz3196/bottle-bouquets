import React from "react";
import HeroGallery from "../Components/Hero/HeroGallery";
// import GallerySection from '../Components/GallerySection/GallerySection';
import GallerySectionTwo from "../Components/GallerySection/GallerySectionTwo";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <HeroGallery />
      {/* <GallerySection /> */}
      <GallerySectionTwo />
    </div>
  );
};

export default GalleryPage;
