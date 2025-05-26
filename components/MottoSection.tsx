"use client"

import SectionContainer from "./ui/SectionContainer"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Vinyl from "./ui/Vinyl"

gsap.registerPlugin(ScrollTrigger)


export default function MottoSection() {
    const mottoRef = useRef<HTMLSelectElement>(null)
    const mottoBoxRef = useRef<HTMLDivElement>(null)
    const mottoVinylRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const motto = mottoRef.current
        const mottoBox = mottoBoxRef.current
        const vinyl = mottoVinylRef.current

        gsap.timeline({
            scrollTrigger: {
                trigger: motto,
                start: "30% center",
                end: "bottom center",
                toggleActions: "play none none reverse",
            }
            })
            .from(mottoBox, {
                scale: 0.75,
                x: -500,
                ease: "power1.in",
            })

            gsap.timeline({
                scrollTrigger: {
                    trigger: motto,
                    start: "30% center",
                    end: "bottom center",
                    toggleActions: "play pause reverse pause",
                }
            })
            .to(vinyl, {
                rotate: 360,
                duration: 10,
                repeat: -1,
                ease: "none",
            })
            

    }, {scope: mottoRef})

    return (
        <SectionContainer
            id="motto"
            ref={mottoRef}
        >
            <div
                className="relative w-full flex justify-end items-center px-10 py-4 sm:py-6 md:py-8 lg:py-12"
            >

                <Vinyl 
                    ref={mottoVinylRef}
                    className="left-1/3 -translate-x-1/3 hidden md:inline w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]"
                    width={450}
                    height={450}
                />

                <div
                    className="w-full md:w-[45%] p-6 sm:p-8 md:p-12 lg:p-16 text-center md:text-right border border-royal-gold rounded-4xl shadow-sm shadow-muted-gray"
                    ref={mottoBoxRef}
                >
                    <h2
                        className="text-off-white uppercase text-4xl lg:text-6xl flex flex-col justify-center py-8"
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