"use client"

import { useRef, useEffect } from "react"
import { usePlayerStore } from "@/providers/player-store-provider"
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
}


export default function ProjectCard({ id, title, thumbnailSrc, audioSrc }: ProjectCardProps) {
    const isPlaying = usePlayerStore((state) => state.isPlaying)
    const currentTrackId = usePlayerStore((state) => state.currentTrackId)
    const setTrackId = usePlayerStore((state) => state.setTrackId)
    const pauseGlobal = usePlayerStore((state) => state.pause)
    const playGlobal = usePlayerStore((state) => state.play)
    const end = usePlayerStore((state) => state.end)
    const setAudioRef = usePlayerStore((state) => state.setAudioRef)
    const audioRefs = usePlayerStore((state) => state.audioRefs)

    const audioRef = useRef<HTMLAudioElement>(null)
    const vinylRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setAudioRef(id, audioRef.current)
    }, [audioRef.current])

    const toggleAudio = () => {
        const currentAudio = audioRef.current
        if (!currentAudio) return

        // Pausing any other audio if playying
        if (currentTrackId && currentTrackId !== id) {
            const prevAudio = audioRefs[currentTrackId]
            prevAudio?.pause()
            prevAudio!.currentTime = 0
        }

        if (currentTrackId === id && isPlaying) {
            currentAudio.pause()
        } else {
            setTrackId(id)
            currentAudio.play()
        }
    }

    // Syncing state with the audio playback
    const handlePlay = () => playGlobal()
    const handlePause = () => pauseGlobal()
    const handleEnded = () => end()

    // Animating Vinyl on play
    useGSAP(() => {
        const vinyl = vinylRef.current
        if (!vinyl) return

        const tl = gsap.timeline()
        if (isPlaying && currentTrackId === id) {
            tl.to(vinyl, {
                rotate: 360,
                duration: 15,
                repeat: -1,
                ease: "none",
            })
        }

    }, { scope: cardRef, dependencies: [isPlaying, currentTrackId], revertOnUpdate: true })

    return (
        <article
            className="relative w-[90%] lg:max-w-[350px] p-4 m-4 rounded-3xl min-h-96 flex flex-col items-center justify-center overflow-hidden shadow-md shadow-black hover:shadow-royal-gold/30 transition-shadow"
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
                        onClick={toggleAudio}
                        className="bg-off-white rounded-full text-rich-black px-3 py-2 text-sm cursor-pointer"
                    >
                        {isPlaying && currentTrackId === id ? "Pause" : "Play"}
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