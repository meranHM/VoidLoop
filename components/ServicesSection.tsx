"use client"

import SectionContainer from "./ui/SectionContainer"
import ServiceCard from "./ui/ServiceCard"
import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { services } from "@/constants"
import { Service } from "@/constants/types"
import ServiceModal from "./modals/ServiceModal"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)


export default function ServicesSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedService, setSelectedService] = useState<Service | null>(null)

    const servicesRef = useRef(null)

    useGSAP(() => {
        const services = servicesRef.current
        if (!services) return

        // ServiceCards animations
        gsap.timeline({
            scrollTrigger: {
                trigger: services,
                start: "15% center",
                end: "bottom center",
                toggleActions: "play none none reverse",
            }
        }).from("[data-animate='service-card']", {
            scale: 0.5,
            opacity: 0,
            duration: 0.5,
            stagger: {
                each: 0.1,
                from: "random",
                ease: "power2.inOut",
            }
        })

        // SolKey animations
        gsap.fromTo("#solkey", {
            skewX: 0,
        },
        {
            skewX: -8,
            scrollTrigger: {
                trigger: services,
                start: "top center",
                end: "center center",
                scrub: true,
            }
        }
    )

    }, { scope: servicesRef })

    // Handling opening and closing modals
    const handleOpenModal = (service: Service) => {
        if (selectedService || isModalOpen) return

        setSelectedService(service)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        if (!selectedService || !isModalOpen) return

        setSelectedService(null)
        setIsModalOpen(false)
    }


    return (
        <SectionContainer
            className="relative flex-col lg:flex-row"
            id="services"
            ref={servicesRef}
        >
            <div
                className="relative w-full flex justify-center items-center py-4 sm:py-6 md:py-8 lg:py-12"
            >
                <article
                    className="w-full flex flex-col justify-start gap-6"
                >
                    <div
                        className="text-left"
                    >
                        <h2>
                            Our Experties
                        </h2>
                        <p
                            className="text-xl sm:text-xl md:text-2xl leading-8"
                        >
                            We are a team of dedicated<br />
                            music producers<br />
                            with a passion about<br />
                            sound and how it should feel...
                        </p>
                    </div>
                    <div
                        className="w-full flex flex-col sm:flex-row items-center justify-center md:space-x-8"
                    >
                        <p
                            className="text-muted-gray text-nowrap mr-6 md:mr-4 mb-4 md:mb-0"
                        >
                            Click for More Info <span className="hidden sm:inline">-&gt;</span> 
                        </p>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-3 justify-center"
                            >
                                {services.map((service) => (
                                    <ServiceCard
                                        key={service.id}
                                        id={service.id}
                                        title={service.title}
                                        dataAnimate="service-card"
                                        className="text-sm lg:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-off-white to-royal-gold"
                                        handleOpenModal={() => handleOpenModal(service)}
                                    />
                                ))}
                            </div>
                    </div>
                    {selectedService && (
                        <ServiceModal 
                            handleClose={handleCloseModal}
                            title={selectedService.title}
                            description={selectedService.description}
                        />
                    )}
                </article>
            </div>
            <div
                className="w-2/3 mr-10 z-0"
                id="solkey"
            >
                <Image 
                    src="/solkey.svg"
                    alt="Sol Key"
                    width={450}
                    height={550}
                    className="size-full"
                />
            </div>
        </SectionContainer>
    )
}