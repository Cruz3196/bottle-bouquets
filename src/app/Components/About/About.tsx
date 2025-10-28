"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSpring, useTrail, animated, config } from "@react-spring/web";
import Link from "next/link";
// import Image from "next/image";
import Video from "../VideoComponent/video";
import { Instagram } from "lucide-react";
import { Imperial_Script } from "next/font/google";

const imperial = Imperial_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger animation when section is 20% visible
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.6, // Trigger when 60% of the section is visible
        rootMargin: "0px", // No offset
      }
    );

    // Store the current ref value in a variable
    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    // Cleanup - use the stored variable instead of sectionRef.current
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  // Animation for text content (staggered) - REDUCED translateX values
  const textTrail = useTrail(4, {
    opacity: hasAnimated ? 1 : 0,
    transform: hasAnimated ? "translateX(0px)" : "translateX(-20px)",
    config: config.gentle,
  });

  // Animation for image - REDUCED translateX values
  const imageSpring = useSpring({
    opacity: hasAnimated ? 1 : 0,
    transform: hasAnimated
      ? "translateX(0px) scale(1)"
      : "translateX(20px) scale(0.9)",
    config: config.slow,
  });

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center py-12 lg:py-6 px-4 min-h-[100vh] lg:min-h-[80vh] overflow-hidden"
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        {/* about content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl w-full">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <animated.h1
              style={textTrail[0]}
              className={`${imperial.className} font-bold text-6xl sm:text-7xl md:text-7xl lg:text-8xl mb-4 text-center lg:text-start`}
            >
              Florals by Jazz
            </animated.h1>

            <animated.p
              style={textTrail[1]}
              className="py-2 text-base leading-7 sm:leading-8 text-center lg:text-start"
            >
              Hello Lovelies! Welcome to our page, we customize bottle bouquets.
              These are hand crafted & can be perfect for any occasion:
              Birthdays, Anniversaries, holidays, graduations, just because and
              so much more 😀
            </animated.p>

            <animated.p
              style={textTrail[2]}
              className="py-2 text-base leading-7 sm:leading-8 text-center lg:text-start"
            >
              If you'd like to follow our journey, click on the link below and
              follow our Instagram page, Thank you for your support!
            </animated.p>

            {/* Instagram link with text */}
            <animated.div
              style={textTrail[3]}
              className="flex flex-row justify-center lg:justify-start items-center gap-4 mt-6"
            >
              <Link
                href="/gallery"
                className="btn bg-buttonHovered hover:bg-main"
              >
                View Gallery
              </Link>
              <div className="flex items-center gap-2 text-gray-600">
                <span>Follow my journey:</span>
                <a
                  href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </animated.div>
          </div>

          {/* Responsive Image */}
          <animated.div
            style={imageSpring}
            className="order-1 lg:order-2 flex justify-center w-full"
          >
            <div className="stack w-full max-w-96 h-auto">
              {/* <Image
                src="https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg"
                alt="Florist shop"
                width={384}
                height={512}
                className="rounded-lg shadow-lg object-cover"
              /> */}
              <Video />
              <div className="bg-buttonHovered grid place-content-center rounded-box h-full rotate-90">
                2
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default About;
