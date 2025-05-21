import SectionContainer from "./ui/SectionContainer"


export default function PortfolioSection() {
    return (
        <SectionContainer
            className="bg-charcoal-black flex-col"
            id="portfolio"
        >
            <h2
                className="text-3xl mb-6"
            >
                Portfolio
            </h2>
            <p>Showcasing completed projects...</p>
        </SectionContainer>
    )
}