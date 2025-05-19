"use client"

import { useState, useEffect } from "react"


export function useTypewriter(words: string[], loop = true, delay = 1500) {
    const [index, setIndex] = useState(0)
    const [text, setText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        const currentWord = words[index % words.length]
        const typingSpeed = isDeleting ? 50 : 100

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.slice(0, charIndex + 1))
                setCharIndex((prev) => prev + 1)
                if (charIndex === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), delay)
                }
            } else {
                setText(currentWord.slice(0, charIndex - 1))
                setCharIndex((prev) => prev - 1)
                if (charIndex === 0) {
                    setIsDeleting(false)
                    setIndex((prev) => (prev + 1) % words.length)
                }
            }
        }, typingSpeed)

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, index, delay, words])

    return text
}