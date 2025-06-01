"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import ClientOnly from "../ClientOnly"
import Vinyl from "./Vinyl"

interface ProjectCardProps {
    id: string
    title: string
    thumbnailSrc: string
    audioSrc: string
    isPlaying: boolean
    onPlay: () => void
    onStop: () => void
}


export default function ProjectCard({ title, thumbnailSrc, audioSrc, onPlay, onStop, isPlaying }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const vinylRef = useRef<HTMLDivElement>(null)
    const audioRef = useRef<HTMLAudioElement>(null)

    // Playing/Pausing the audio depending on if any other song is playing or not
    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        if (isPlaying) {
            audio.play()
        } else {
            audio.pause()
            audio.currentTime = 0
        }``
    }, [isPlaying])

    //Handling Pause/Play function for play/pause button
    const handleToggle = () => {
        if (isPlaying) {
            onStop()
        } else {
            onPlay()
        }
    }

    // Animating Vinyl on play and stopping it on pause/end
    useGSAP(() => {
        const vinyl = vinylRef.current
        if (!vinyl) return

        // Killling the tween on pause/end
        const ctx = gsap.context(() => {
            if (isPlaying) {
                gsap.to(vinyl, {
                    rotate: 360,
                    duration: 15,
                    repeat: -1,
                    ease: "none",
                })
            } else {
                gsap.killTweensOf(vinyl)
                gsap.set(vinyl, { rotate: 0 })
            }
        }, cardRef)

        return () => ctx.revert()
    }, { scope: cardRef, dependencies: [isPlaying]})

    return (
        <article
            className={`relative w-[90%] lg:max-w-[350px] p-4 m-4 rounded-3xl min-h-96 flex flex-col items-center justify-center overflow-hidden shadow-md shadow-black hover:shadow-royal-gold/30 transition-shadow ${isPlaying ? "shadow-royal-gold/30" : ""}`}
        >
            {/* Image Background */}
            <div
                className="absolute inset-0 z-0 overflow-hidden"
            >
                <Image 
                    src={thumbnailSrc}
                    alt={`${title} thumbnail`}
                    width={787}
                    height={384}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Foreground layer */}
            <div
                className="absolute inset-0 z-10 overflow-hidden flex flex-col items-center justify-between p-4"
                ref={cardRef}
            >
                <div
                    className="text-center flex flex-col justify-between"
                >
                    <h3
                        className="text-nowrap text-2xl font-semibold text-off-white"
                    >
                        {title}
                    </h3>

                </div>

                <Vinyl
                    width={240}
                    height={240}
                    ref={vinylRef}
                    className="w-32 h-32"
                />

                {/* Audio Controls */}
                <div>
                    <button
                        onClick={handleToggle}
                        className="bg-transparent rounded-full text-rich-black p-1 text-sm cursor-pointer hover:shadow hover:shadow-off-white transition-shadow active:scale-95 focus-visible:outline-none focus-visible:shadow focus-visible:shadow-off-white"
                    >
                        {isPlaying 
                            ? <Image src="/icons/pause-button.webp" alt="Pause button" width={64} height={64} />
                            : <Image src="/icons/play-button.webp" alt="Play button" width={64} height={64} />
                        }
                    </button>
                    <ClientOnly >
                        <audio 
                            ref={audioRef}
                            src={audioSrc}
                            onEnded={onStop}
                        />
                    </ClientOnly>
                </div>
            </div>
        </article>
    )
}