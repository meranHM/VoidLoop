import SectionContainer from "./ui/SectionContainer"


export default function TestimonialsSection() {
    return (
        <SectionContainer
            className="bg-rich-black flex-col"
            id="testimonials"
        >
            <h2
                className="text-3xl mb-6"
            >
                Testimonials
            </h2>
            <p>What our clients say...</p>
        </SectionContainer>
    )
}