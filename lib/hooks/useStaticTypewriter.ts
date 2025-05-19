"use client"

import { useEffect, useState } from "react"


export function useStaticTypewriter(text: string, speed: number = 100) {
    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        let index = 0
        
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(index))
            index++

            if (index === text.length) {
                clearInterval(interval)
            }
        }, speed)

        return () => clearInterval(interval)
    }, [text, speed])

    return displayedText
}