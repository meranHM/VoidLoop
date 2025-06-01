"use client"

import { musicNotes } from "@/constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const NUM_ITEM = 30

// Repeat music notes array to reach desired number of elements
const repeatedImages: string[] = Array.from({ length: NUM_ITEM }, (_, i) => musicNotes[i % musicNotes.length])


export default function FloatingNotes() {
    const notesRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const noteEls = gsap.utils.toArray<HTMLImageElement>(".note", notesRef.current)
        if (!noteEls.length) return

        gsap.from(".note", {
            y: 100,
            opacity: 0,
            stagger: {
                amount: 0.5,
                from: "random",
                repeat: -1,
                yoyo: true,
            }
        })

    }, { scope: notesRef })

    return (
        <div
            className="w-full flex space-x-6"
            ref={notesRef}
        >
            {repeatedImages.map((img, index) => (
                <img 
                    key={index}
                    src={img}
                    alt={`Note ${index + 1}`}
                    className="note w-12 h-12"

                />
            ))}
        </div>
    )
}