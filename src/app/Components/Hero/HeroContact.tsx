'use client'
import React, { useState, useEffect } from 'react'
import { useSpring, useTrail, animated, config } from '@react-spring/web'

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
    const contentItems = ['heading', 'paragraph', 'button'];
    
    const contentTrail = useTrail(contentItems.length, {
        opacity: hasAnimated ? 1 : 0,
        transform: hasAnimated ? 'translateY(0px)' : 'translateY(30px)',
        config: config.slow,
    });

    return (
        <div className="container mx-auto">
            <div
                className="hero min-h-[40vh]"
                style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
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
                            className="mb-5 text-5xl font-bold"
                            >
                            Contact Page
                        </animated.h1>
                        
                        <animated.p 
                            style={contentTrail[1]}
                            className="mb-5"
                            >
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </animated.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroContact;