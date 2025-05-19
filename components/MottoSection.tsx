import SectionContainer from "./SectionContainer"


export default function MottoSection() {
    return (
        <SectionContainer
            className="bg-charcoal-black flex-col"
            id="motto"
        >
            <h2
                className="text-3xl mb-4"
            >
                Motto Section
            </h2>
            <p
                className="text-xl max-w-2xl text-center"
            >
                &quot;This is a scrolling sentence about the company.&quot;
            </p>
        </SectionContainer>
    )
}