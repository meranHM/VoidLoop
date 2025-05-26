"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import ClientOnly from "../ClientOnly"
import Vinyl from "./Vinyl"

interface ProjectCardProps {
    src: string
    title: string
    audioSrc: string
}


export default function ProjectCard({ src, title, audioSrc }: ProjectCardProps) {
    const [isPlaying, setIsPlaying] = useState(false)

    const audioRef = useRef<HTMLAudioElement>(null)
    const vinylRef = useRef<HTMLDivElement>(null)

    const toggleAudio = () => {
        const audio = audioRef.current
        if (!audio) return

        if (isPlaying) {
            audio.pause()
        } else {
            audio.play()
        }
    }

    // Syncing state with the audio playback
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)

    console.log(isPlaying)
    return (
        <article
            className="relative w-[90%] lg:max-w-[350px] p-4 m-4 rounded-3xl min-h-96 flex flex-col items-center justify-center overflow-hidden shadow-md shadow-black hover:shadow-royal-gold/30 transition-shadow"
        >
            {/* Image Background */}
            <div
                className="absolute inset-0 z-0 overflow-hidden"
            >
                <Image 
                    src={src}
                    alt={`${title} thumbnail`}
                    width={350}
                    height={384}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Foreground layer */}
            <div
                className="absolute inset-0 z-10 overflow-hidden flex flex-col items-center justify-between p-4"
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
                    width={120}
                    height={120}
                    className=""
                />

                {/* Audio Controls */}
                <div>
                    <button
                        onClick={toggleAudio}
                        className="bg-off-white rounded-full text-rich-black px-3 py-2 text-sm cursor-pointer"
                    >
                        {isPlaying ? "Pause" : "Play"}
                    </button>
                    <ClientOnly >
                        <audio 
                            ref={audioRef}
                            src={audioSrc}
                            preload="auto"
                            onPlay={handlePlay}
                            onPause={handlePause}
                            onEnded={handleEnded}
                        />
                    </ClientOnly>
                </div>
            </div>
        </article>
    )
}