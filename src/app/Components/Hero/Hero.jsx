"use client";
import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import Image from "next/image";
import { Imperial_Script } from "next/font/google";
import Logo from "../../public/images/Logo.png";
const imperial = Imperial_Script({
  subsets: ["latin"],
  weight: ["400"],
});
const Hero = () => {
  // Animation for heading
  const headingSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: config.slow,
  });
  // Animation for paragraph
  const paragraphSpring = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: config.slow,
    delay: 300,
  });
  return (
    <div className="hero flex items-center justify-center py-12 lg:py-6 px-4 min-h-[90vh] lg:min-h-[80vh]">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <animated.h1 style={headingSpring}>
              <svg viewBox="0 0 500 150">
                <path
                  id="curve"
                  d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                />
                <text
                  width="500"
                  className={`${imperial.className} text-5xl sm:text-5xl`}
                  style={{
                    stroke: "#c2f6ff",
                    strokeWidth: "1.5px",
                    paintOrder: "stroke fill",
                  }}
                >
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    Welcome to Bottle Bouquets
                  </textPath>
                </text>
              </svg>
            </animated.h1>
            {/* this is where the image is going to be  */}
            <animated.div style={headingSpring} className="flex justify-center">
              <div className="w-80 h-auto mx-1 sm:mx-5 lg:w-96 ">
                <Image
                  src={Logo}
                  alt="Bottle Bouquets Logo"
                  className="w-full h-auto rounded-md"
                  width={500}
                  height={512}
                />
              </div>
            </animated.div>
            <animated.p style={paragraphSpring} className="py-6 text-lg">
              Give a gift that surprises & delights! Each bouquet is hand
              crafted. Bottle bouquets are made with real flowers & a drinkable
              bottle.
            </animated.p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
