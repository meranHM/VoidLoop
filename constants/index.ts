import { Service } from "./types"

// Header
export const navLinks = [
    {
        title: "Home",
        url: "/home",
    },
    {
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        title: "Services",
        url: "/services",
    },
    {
        title: "Contact",
        url: "/contact",
    },
]

// Services Section
export const services: Service[] = [
    {
        id: "production",
        title: "Production",
        description: "We produce your music from scratch, crafting unique soundscapes tailored to your style.",
    },
    {
        id: "recording",
        title: "Recording",
        description: "High-quality recording sessions with professional equipment and sound engineers.",
    },
    {
        id: "mix-mastering",
        title: "Mix & Mastering",
        description: "Get your track sounding polished and industry-ready with expert mix & mastering.",
    },
    {
        id:"scoring",
        title: "Scoring",
        description: "Custom scores for film, games, and media with cinematic depth and emotion.",
    },
]