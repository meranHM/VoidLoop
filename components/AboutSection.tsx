import SectionContainer from "./SectionContainer"


export default function AboutSection() {
    return (
        <SectionContainer
            className="bg-rich-black flex-col mt-16"
            id="about"
        >
            <h2
                className="text-3xl mb-4"
            >
                About Us
            </h2>
            <p
                className="max-w-xl text-center"
            >
                We are a team of dedicated music producers passionate about sound...
            </p>
        </SectionContainer>
    )
}