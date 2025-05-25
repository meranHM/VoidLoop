"use client"

import Image from "next/image"
import { forwardRef } from "react"

interface VinylProps {
    className?: string
}


const Vinyl = forwardRef<HTMLDivElement, VinylProps>(({ className }, ref) => {
    return (
        <div
            ref={ref}
            className={`w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] z-30 pointer-events-none ${className || ""}`}
            id="vinyl"
        >
            <Image 
                src="/vinyl.png"
                alt="Vinyl image"
                width={450}
                height={450}
                className="w-full h-auto"
            />
        </div>
    )
})

Vinyl.displayName = "Vinyl"

export default Vinyl



