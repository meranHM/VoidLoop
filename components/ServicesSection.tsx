import SectionContainer from "./SectionContainer"

export default function ServicesSection() {
    return (
        <SectionContainer
            className="bg-rich-black flex-col"
        >
            <h2
                className="text-3xl mb-8"
            >
                Our Services
            </h2>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6"
            >
                <div className="card">
                    Service 1
                </div>
                <div className="card">
                    Service 2
                </div>
                <div className="card">
                    Service 3
                </div>
                <div className="card">
                    Service 4
                </div>
            </div>
        </SectionContainer>
    )
}