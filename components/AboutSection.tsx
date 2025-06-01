"use client"

import SectionContainer from "./ui/SectionContainer"
import { useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import FloatingNotes from "./FloatingNotes"

gsap.registerPlugin(SplitText, ScrollTrigger)

export default function AboutSection() {
    const aboutRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const about = aboutRef.current
        if (!about) return

        const split = SplitText.create(".split", { type: "words, chars" })

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: about,
                start: "top center",
                end: "center center",
                toggleActions: "play none none reverse",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: {
                amount: 0.5,
                from: "center"
            }
        })

    }, { scope: aboutRef, revertOnUpdate: true })


    return (
        <SectionContainer
            className="flex-col"
            id="about"
            ref={aboutRef}
        >
            <div
                className="w-full flex flex-col justify-center items-center px-6"
            >
                <div
                    className="flex flex-col items-center max-w-[90%] lg:max-w-[650px] overflow-hidden"
                >
                    <h2 className="split text-center mb-8">
                        VoidLoop
                    </h2>
                    <p
                        className="split text-center uppercase text-xl sm:text-2xl md:text-3xl leading-12"
                    >
                        our studio is a haven for<br />
                        <span className="special-text">sonic craftsmanship</span>.<br />
                        We don&apos;t just produce sound, we <span className="special-text">shape</span> emotion,<br />
                        helping emerging artists bring their stories to life with<br /> 
                        <span className="special-text">depth, clarity, and soul</span>.
                    </p>
                </div>
                
            </div>
        </SectionContainer>
    )
}