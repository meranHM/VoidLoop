"use client"

import Image from "next/image"
import { forwardRef } from "react"

interface VinylProps {
    className?: string
    width: number
    height: number
}


const Vinyl = forwardRef<HTMLDivElement, VinylProps>(({ className, width, height }, ref) => {
    return (
        <div
            ref={ref}
            className={`z-30 pointer-events-none ${className || ""}`}
            id="vinyl"
        >
            <Image 
                src="/vinyl.png"
                alt="Vinyl image"
                width={width}
                height={height}
                className="size-full"
            />
        </div>
    )
})

Vinyl.displayName = "Vinyl"

export default Vinyl



