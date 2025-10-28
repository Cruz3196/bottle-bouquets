"use client";
import React, { useState, useEffect } from "react";
import { useSpring, useTrail, animated, config } from "@react-spring/web";
import HeroSection from "../../public/images/HeroSection.png";

const HeroContact = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  // Animation for overlay (fade in)
  const overlaySpring = useSpring({
    opacity: hasAnimated ? 0.6 : 0,
    config: config.slow,
  });

  // Staggered animations for content
  const contentItems = ["heading", "paragraph", "button"];

  const contentTrail = useTrail(contentItems.length, {
    opacity: hasAnimated ? 1 : 0,
    transform: hasAnimated ? "translateY(0px)" : "translateY(30px)",
    config: config.slow,
  });

  return (
    <div className="container mx-auto">
      <div
        className="hero min-h-[40vh]"
        style={{
          backgroundImage: `url(${HeroSection.src})`,
        }}
      >
        <animated.div
          style={overlaySpring}
          className="hero-overlay bg-opacity-60"
        ></animated.div>

        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <animated.h1
              style={contentTrail[0]}
              className="mb-5 text-5xl font-bold text-white"
            >
              Get in Touch
            </animated.h1>

            <div className="text-center mb-12 max-w-3xl">
              <div className="space-y-3 text-lg">
                <animated.p
                  style={contentTrail[1]}
                  className="mb-5 text-white font-semibold"
                >
                  Hello Lovelies! Please reach out if you have any questions.
                </animated.p>
                <animated.p
                  style={contentTrail[2]}
                  className="text-white font-semibold"
                >
                  If you want to place an order, please include as much detail
                  as possible (such as bottle type, date needed by, flower/color
                  preferences if any, & occasion).
                </animated.p>
                <animated.p
                  style={contentTrail[2]}
                  className="text-white font-semibold"
                >
                  I will reach out to you to confirm the order, inform of
                  pricing/payment and any specifications needed.
                </animated.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
