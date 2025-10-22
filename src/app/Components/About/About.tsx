'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useSpring, useTrail, animated, config } from '@react-spring/web'
import Link from 'next/link'

const About = () => {
    const [hasAnimated, setHasAnimated] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Trigger animation when section is 20% visible
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true)
                    }
                })
            },
            {
                threshold: 0.6, // Trigger when 60% of the section is visible
                rootMargin: '0px' // No offset
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        // Cleanup
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [hasAnimated])

    // Animation for the section title
    const titleSpring = useSpring({
        opacity: hasAnimated ? 1 : 0,
        transform: hasAnimated ? 'translateY(0px)' : 'translateY(-30px)',
        config: config.slow,
    })

    // Animation for text content (staggered)
    const textTrail = useTrail(4, {
        opacity: hasAnimated ? 1 : 0,
        transform: hasAnimated ? 'translateX(0px)' : 'translateX(-50px)',
        config: config.gentle,
    })

    // Animation for image
    const imageSpring = useSpring({
        opacity: hasAnimated ? 1 : 0,
        transform: hasAnimated ? 'translateX(0px) scale(1)' : 'translateX(50px) scale(0.9)',
        config: config.slow,
    })

    return (
        <section ref={sectionRef} className="min-h-screen px-4 py-16 bg-base-200">
            <div className='container mx-auto flex flex-col items-center justify-center h-full'>
                {/* this is the title of the about section */}
                <animated.h2 
                    style={titleSpring}
                    className="font-bold text-3xl sm:text-4xl mb-8"
                >
                    About Section
                </animated.h2>
                
                {/* about content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl w-full">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <animated.h1 
                            style={textTrail[0]}
                            className="font-bold text-2xl sm:text-4xl md:text-5xl mb-4 text-center md:text-start"
                        >
                            Florist Shop
                        </animated.h1>
                        
                        <animated.p 
                            style={textTrail[1]}
                            className="py-2 text-base leading-7 sm:leading-8 text-center md:text-start"
                        >
                            With a passion for creating innovative and user-friendly applications. After several years in the automotive industry as a service technician, I decided to make a career change and pursue a career in software development. I have been self learning for about two years, and recently decided to study computer science through online programs, with a goal of earning a bachelor's degree in computer science.
                        </animated.p>
                        
                        <animated.p 
                            style={textTrail[2]}
                            className="py-2 text-base leading-7 sm:leading-8 text-center md:text-start"
                        >
                            I am comfortable working with React, Node.js, and MongoDB. I also have experience in HTML, CSS, and JavaScript. I am always eager to learn new technologies.
                        </animated.p>
                        
                        {/* button for read more */}
                        <animated.div 
                            style={textTrail[3]}
                            className='text-center md:text-start'
                        >
                            <Link href="/gallery" className="btn btn-primary mt-4">
                                View Gallery
                            </Link>
                        </animated.div>
                    </div>
                
                    {/* Responsive Image */}
                    <animated.div 
                        style={imageSpring}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="stack w-60 h-auto mx-1 sm:mx-5 lg:w-96">
                            <img
                                src="https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg"
                                alt="Florist shop"
                                className="w-full h-auto rounded-md rotate-6 sm:rotate-8 shadow-lg"
                            />
                        </div>
                    </animated.div>
                </div>
            </div>
        </section>
    )
}

export default About