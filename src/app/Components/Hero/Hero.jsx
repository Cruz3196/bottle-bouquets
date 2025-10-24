'use client'
import React from 'react'
import { useSpring, animated, config } from '@react-spring/web'

const Hero = () => {
  // Animation for heading
    const headingSpring = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: config.slow,
    })

    // Animation for paragraph
    const paragraphSpring = useSpring({
        from: { opacity: 0, transform: 'translateY(30px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: config.slow,
        delay: 300,
    })

    // Animation for button
    const buttonSpring = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: config.wobbly,
        delay: 600,
    })

return (
<div className="hero bg-base-200 flex items-center justify-center py-12 lg:py-6 px-4 min-h-[100vh] lg:min-h-[80vh]">
    <div className="container mx-auto">
        <div className="text-center">
            <div className="max-w-2xl mx-auto">
            <animated.h1 
                style={headingSpring}
                className="text-5xl font-bold"
            >
                Hello there
            </animated.h1>
            
            <animated.p 
                style={paragraphSpring}
                className="py-6 text-lg"
            >
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </animated.p>
            
            <animated.button 
                style={buttonSpring}
                className="btn btn-primary"
            >
                Get Started
            </animated.button>
            </div>
        </div>
    </div>
</div>
)
}

export default Hero