"use client"

import { RiCloseCircleLine } from "react-icons/ri"
import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

 
interface ServiceModalProps {
    title: string
    description: string
    handleClose: () => void
}

export default function ServiceModal({ title, description, handleClose }: ServiceModalProps) {
    const [isVisible, setIsVisible] = useState(true)

    const container = useRef<HTMLDivElement>(null)
    const content = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!container.current || !content.current) return

        gsap.timeline()
        .fromTo(container.current, { opacity: 0}, { opacity: 1, duration: 0.2 })
        .fromTo(content.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.3 })
        .fromTo(content.current.querySelectorAll("h3, p, button"), 
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.25, stagger: 0.1 }
        )
    }, { scope: container })

    const handleExit = () => {
        if (!container.current || !container.current) return

        gsap.timeline()
            .to(content.current, { opacity: 0, scale: 0.9, duration: 0.3 })
            .to(container.current, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    setIsVisible(false)
                    handleClose()
                }
            })
    }

    if (!isVisible) return null

    return (
        /* Overlay */
        <div
            className="fixed inset-0 flex items-center justify-center bg-rich-black/80 backdrop-blur-lg"
            ref={container}
            role="dialog"
            aria-modal="true"
        >
            {/* Content */}
            <div
                className="relative w-full max-w-2xl bg-rich-black border border-royal-gold mx-10 sm:mx-6 py-10 space-y-10 rounded-xl flex flex-col items-center justify-between"
                ref={content}
            >
                <h3
                    className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
                >
                    {title}
                </h3>
                <p
                    className="w-full max-w-[70%] text-lg md:text-xl"
                >
                    {description}
                </p>
                <button
                    onClick={handleExit}
                    className="cursor-pointer rounded-full"
                >
                    <RiCloseCircleLine 
                        className="text-royal-gold hover:text-royal-gold/80 transition-colors w-12 h-12"
                    />
                </button>
            </div>
        </div>
    )
}