"use client"

import SectionContainer from "./ui/SectionContainer"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


export default function MottoSection() {
    const mottoRef = useRef(null)
    const mottoBoxRef = useRef(null)

    useGSAP(() => {
        const motto = mottoRef.current
        const mottoBox = mottoBoxRef.current

        gsap.timeline({
            scrollTrigger: {
                trigger: motto,
                start: "30% center",
                end: "bottom center",
                toggleActions: "play none none reverse"
            }
        }).from(mottoBox, {
            scale: 0.75,
            x: -500,
            ease: "power1.in"
        })

    }, {scope: mottoRef})

    return (
        <SectionContainer
            className="bg-charcoal-black"
            id="motto"
            ref={mottoRef}
        >
            <div
                className="relative w-full flex justify-end items-center px-10 pt-4 pb-10 md:pt-8 md:pb-16 lg:pt-12 lg:pb-32"
            >
                <div
                    className="w-full md:w-[45%] p-6 sm:p-8 md:p-12 lg:p-16 text-center md:text-right border border-royal-gold rounded-4xl shadow-sm shadow-muted-gray"
                    ref={mottoBoxRef}
                >
                    <h2
                        className="text-off-white uppercase text-4xl md:text-5xl lg:text-6xl flex flex-col justify-center py-8"
                    >
                        <span className="text-royal-gold">Music</span>
                        <span className="text-royal-gold">talks</span>
                        <span><span className="text-lg md:text-2xl mr-2 lowercase">to</span>souls</span>
                        <span className="text-nowrap">not minds</span>
                    </h2>
                    <p
                        className="mt-6 text-lg sm:text-xl md:text-2xl italic text-muted-gray text-nowrap"
                    >
                        VoidLoop Records
                    </p>
                </div>
            </div>
        </SectionContainer>
    )
}