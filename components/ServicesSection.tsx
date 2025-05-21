"use client"

import SectionContainer from "./ui/SectionContainer"
import ServiceCard from "./ui/ServiceCard"
import { useRef, useState } from "react"
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { services } from "@/constants"
import { Service } from "@/constants/types"
import ServiceModal from "./modals/ServiceModal"

gsap.registerPlugin(ScrollTrigger)


export default function ServicesSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedService, setSelectedService] = useState<Service | null>(null)

    const servicesRef = useRef(null)

    useGSAP(() => {
        const services = servicesRef.current

        // Section animations
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

    }, { scope: servicesRef })

    // Handling opening and closing modals
    const handleOpenModal = (service: Service) => {
        if (selectedService || isModalOpen) return

        setSelectedService(service)
        setIsModalOpen(true)
        disablePageScroll()
    }

    const handleCloseModal = () => {
        if (!selectedService || !isModalOpen) return

        setSelectedService(null)
        setIsModalOpen(false)
        enablePageScroll()
    }


    return (
        <SectionContainer
            className="bg-rich-black flex-col"
            id="services"
            ref={servicesRef}
        >
            <div
                className="relative w-full flex justify-start items-center px-10 pt-4 pb-10 md:pt-8 md:pb-16 lg:pt-12 lg:pb-32"
            >
                <article
                    className="w-full p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-start gap-6"
                >
                    <div
                        className="text-left"
                    >
                        <h2
                            className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4"
                        >
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
                        className="w-full flex flex-col sm:flex-row items-center justify-center md:space-x-8 pt-12 sm:mt-4 md:mt-8"
                    >
                        <p
                            className="text-muted-gray text-nowrap mb-4 sm:mb-0"
                        >
                            Tap to Know More <span className="hidden sm:inline">-&gt;</span> 
                        </p>
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-3 sm:self-end text-center"
                        >
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    id={service.id}
                                    title={service.title}
                                    dataAnimate="service-card"
                                    className=""
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
        </SectionContainer>
    )
}