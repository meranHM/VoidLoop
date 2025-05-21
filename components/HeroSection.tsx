"use client"

import SectionContainer from "./ui/SectionContainer"
import { useTypewriter } from "@/lib/hooks/useTypewriter"
import { useRef } from "react"


export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null)
    const text = useTypewriter(["production", "composing", "mix & mastering", "tuning", "sound design"])


    return (
        <SectionContainer
            ref={heroRef}
            id="hero"
        >
            <div
                className="relative w-full px-10 pt-4 pb-10 md:pt-8 md:pb-16 lg:pt-12 lg:pb-36"
            >
                <div
                    className="relative rounded-3xl overflow-hidden min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh] flex flex-col items-center justify-center"
                >
                    {/* Video Background */}
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                    >
                        <video 
                            className="object-cover w-full h-full"
                            src="/hero-video.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>

                    {/* Foreground Layer */}
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4 backdrop-blur-xs font-playfair"
                    >
                        <div
                            className="mb-32 p-4 rounded-md"
                        >
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl font-bold"
                            >
                                Welcome to VoidLoop
                            </h1>
                            <p
                                className="mt-4 px-2 rounded text-base sm:text-lg md:text-xl text-off-white/80"
                            >
                                Elevate your music with world-class production.
                            </p>
                        </div>
                        <p
                            className="absolute left-[3%] bottom-[5%] uppercase text-left text-2xl sm:text-3xl md:text-5xl leading-relaxed text-off-white"
                        >
                            Pundits of<br />
                            &quot;{text}&quot;<span className="animate-blink">|</span>
                        </p>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}