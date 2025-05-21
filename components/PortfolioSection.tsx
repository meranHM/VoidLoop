"use client"

import SectionContainer from "./ui/SectionContainer"
import ProjectCard from "./ui/ProjectCard"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


export default function PortfolioSection() {
    const portfolioRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const portfolio = portfolioRef.current
        if (!portfolio) return

        const mainEl = document.querySelector("main")
        if (!mainEl) return

        const animateBg = (color: string) => {
            gsap.to(mainEl, {
                backgroundColor: color,
                duration: 0.3,
                ease: "power1.inOut",
            })
        }

        ScrollTrigger.create({
            trigger: portfolio,
            start: "top center",
            end: "bottom center",
            onEnter: () => animateBg("#1F1F1F"),
            onLeave: () => animateBg("#0B0C10"),
            onEnterBack: () => animateBg("#1F1F1F"),
            onLeaveBack: () => animateBg("#0B0C10")
        })

    }, { scope: portfolioRef })

    return (
        <SectionContainer
            className="flex-col"
            id="portfolio"
            ref={portfolioRef}
        >
            <div
                className="relative w-full px-6 py-4 sm:py-6 md:py-8 lg:py-12"
            >
                <div
                    className="flex flex-col justify-center items-center"
                >
                    <h2>
                        Our Portfolio
                    </h2>
                    <p
                        className="text-xl sm:text-xl md:text-2xl leading-8"
                    >
                        Showcasing completed projects...
                    </p>
                </div>
                <div
                    className="w-full flex flex-col lg:flex-row justify-evenly items-center p-6"
                >
                    <ProjectCard 
                        title="Granny's Home"
                        src="/hero-video.webm"
                    />
                    <ProjectCard 
                        title="Granny's Home"
                        src="/hero-video.webm"
                    />
                    <ProjectCard 
                        title="Granny's Home"
                        src="/hero-video.webm"
                    />
                </div>
            </div>
        </SectionContainer>
    )
}