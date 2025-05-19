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
            xPercent: -50,
            yPercent: -50,
            opacity: 0,
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
                start: "100px center",
                end: "center center",
                scrub: true,
                markers: true,
            },
        }).to(vinyl, {
            scale: 0.75,
            x: 0,
            y: -200,
            opacity: 1,
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: "#services",
                start: "top center",
                end: "center center",
                scrub: true,
                markers: true,
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
                markers: true,
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
                markers: true,
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
                markers: true,
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
                markers: true,
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
            className="fixed top-1/2 left-1/2 z-30 pointer-events-none"
            id="vinyl"
        >
            <Image 
                src="/vinyl.png"
                alt="Vinyl image"
                width={350}
                height={350}
                className="w-full h-auto"
            />
        </div>
    )
}