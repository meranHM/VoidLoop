import { Service, Project } from "./types"

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

// Services
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

// Projects
export const projects: Project[] = [
    {
        id: "after",
        title: "After",
        audioSrc: "/portfolio-songs/abhor/After.mp3",
        thumbnailSrc: "/portfolio-songs/abhor/project-thumbnail.webp",
    },
    {
        id: "house-of-rising",
        title: "House of Rising",
        audioSrc: "/portfolio-songs/grannys-home/House-of-rising.mp3",
        thumbnailSrc: "/portfolio-songs/grannys-home/project-thumbnail.webp",
    },
    {
        id: "devil",
        title: "Devil",
        audioSrc: "/portfolio-songs/abyss/Devil.mp3",
        thumbnailSrc: "/portfolio-songs/abhor/project-thumbnail.webp",
    },
]

// Animated notes
export const musicNotes = [
    "/music-notes/note-1.svg",
    "/music-notes/note-2.svg",
    "/music-notes/note-3.svg",
    "/music-notes/note-4.svg",
    "/music-notes/note-5.svg",
]