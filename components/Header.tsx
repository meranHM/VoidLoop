"use client"

import { useState,useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { navLinks } from "@/constants"
import gsap from "gsap"
import { TiThMenu,  } from "react-icons/ti"
import { MdClose } from "react-icons/md"


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const navbarContainer = useRef(null)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const navLinkEls = navLinks.map((link, index) => (
        <Link
            key={index}
            href={link.url}
            className="text-off-white hover:underline"
            data-animate="link"
        >
            {link.title}
        </Link>
    ))

    /* Side Navbar Animations */
    useEffect(() => {
        if (isMenuOpen) {
            const ctx = gsap.context(() => {
                gsap.from("[data-animate='overlay']", 
                    { opacity: 0, duration: 0.5 },
                )
            
                gsap.from("[data-animate='side-navbar']",
                    {x: 300, opacity: 1}
                )

                gsap.fromTo("[data-animate='link']",
                    {
                        x: 300, 
                        opacity: 0, 
                    },
                    {
                        duration: 0.5,
                        x: 0,
                        opacity: 1,
                        stagger: {
                            each: 0.1
                        }
                    }
                )
            }, navbarContainer)

            return () => ctx.revert()
        }
    }, [isMenuOpen])

    return (
        <header
            className="fixed top-0 right-0 left-0 bg-transparent md:bg-charcoal-black items-center p-1 justify-center border-b border-royal-gold shadow-sm shadow-muted-gray z-50"
        >
            <div
                className="w-full max-w-[90%] flex justify-between"
                 ref={navbarContainer}
            >
                <div>
                    <Image 
                        src="/voidloop-logo.png"
                        alt="VoidLoop logo"
                        width={250}
                        height={250}
                        className="w-18 h-18"
                    />
                </div>

                {/* Hamburger Menu Button */}
                <div
                    className="md:hidden fixed top-8 right-4 z-50"
                >
                    <button
                        className="p-1 rounded-lg backdrop-blur-md bg-royal-gold hover:bg-royal-gold/80 cursor-pointer"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <MdClose size={28}/> : <TiThMenu size={28}/>}
                    </button>
                </div>

                {/* Desktop Navbar */}
                <nav
                    className="hidden md:flex mx-auto items-center gap-6 p-4 text-lg"
                >
                    {navLinkEls}
                </nav>

                {/*Animated Mobile Navbar */}
                {isMenuOpen && (
                    <>
                        {/* Overlay */}
                        <div
                            className="fixed inset-0 backdrop-blur-md z-30 md:hidden"
                            onClick={toggleMenu}
                            data-animate="overlay"
                        />
                        {/* Side Navbar */}
                        <div
                            className="fixed top-0 right-0 h-full w-1/3 bg-charcoal-black z-40 p-4 text-off-white md:hidden"
                            data-animate="side-navbar"
                        >
                            <nav
                                className="flex flex-col gap-6 text-xl"
                            >
                                {navLinkEls}
                            </nav>
                        </div>
                    </>
                )}
            </div>
        </header>
    )
}