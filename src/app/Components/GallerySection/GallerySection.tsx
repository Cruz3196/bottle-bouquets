"use client";
import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import GalleryGrid from "./GalleryGrid";
import { mockData } from "@/app/lib/db/mockData";

const GallerySection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  // Animation for title
  const titleSpring = useSpring({
    opacity: hasAnimated ? 1 : 0,
    transform: hasAnimated ? "translateY(0px)" : "translateY(-30px)",
    config: config.slow,
  });

  // Animation for grid
  const gridSpring = useSpring({
    opacity: hasAnimated ? 1 : 0,
    transform: hasAnimated ? "translateY(0px)" : "translateY(20px)",
    config: config.gentle,
    delay: 200,
  });

  return (
    <div className="container mx-auto px-4 py-10">
      <animated.h2
        style={titleSpring}
        className="font-bold text-3xl sm:text-4xl text-center mb-8"
      >
        Gallery
      </animated.h2>
      <animated.div style={gridSpring}>
        <GalleryGrid products={mockData} largeItemIds={["3", "5"]} />
      </animated.div>
    </div>
  );
};

export default GallerySection;
