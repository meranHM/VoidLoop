"use client"

import Image from "next/image"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


export default function Vinyl() {
    const vinylRef = useRef(null)

    useGSAP(() => {
        const vinyl = vinylRef.current

        gsap.set(vinyl, {
            opacity: 0
        })

        // Vinyl's idle animation
        gsap.to(vinyl, {
            rotate: 360,
            duration: 10,
            ease: "linear",
            repeat: -1,
        })

        //Transforming vinyl position and size between sections
        gsap.timeline({
            scrollTrigger: {
                trigger: "#motto",
                start: "43% center",
                end: "90% center",
                /* markers: true, */
                toggleActions: "play none none reverse",
                pin: true
            },
        }).to(vinyl, {
            xPercent: -90,
            yPercent: -45,
            opacity: 1,
            duration: 0.5,
            ease: "power1.in"
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: "#services",
                start: "top center",
                end: "center center",
                scrub: true,
        },
        }).to(vinyl, {
            scale: 0.5,
            x: 0,
            y: 100,
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: "#portfolio",
                start: "top center",
                end: "bottom center",
                scrub: true,
        },
        }).to(vinyl, {
            scale: 0.75,
            x: 0,
            y: -200,
        })
        
        gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
                end: "bottom center",
                scrub: true,
        },
        }).to(vinyl, {
            scale: 0.5,
            x: 100,
            y: 100,
        })
        
        
        gsap.timeline({
            scrollTrigger: {
                trigger: "#testimonials",
                start: "top center",
                end: "bottom center",
                scrub: true,
        },
        }).to(vinyl, {
            scale: 0.75,
            x: 300,
            y: -200,
        })
        
        
        gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",
                end: "bottom center",
                scrub: true,
        },
        }).to(vinyl, {
            scale: 0.5,
            x: 0,
            y: 100,
        })
        
    }, [])

    return (
        <div
            ref={vinylRef}
            className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] fixed top-1/2 left-1/3 z-30 pointer-events-none"
            id="vinyl"
        >
            <Image 
                src="/vinyl.png"
                alt="Vinyl image"
                width={720}
                height={720}
                className="w-full h-auto"
            />
        </div>
    )
}