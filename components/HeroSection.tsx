import SectionContainer from "./SectionContainer"



export default function HeroSection() {
    return (
        <SectionContainer
            className="bg-rich-black"
            id="hero"
        >
            <div
                className="relative w-full px-4 pt-4 pb-10 md:pt-8 md:pb-16 lg:pt-12 lg:pb-24"
            >
                <div
                    className="relative border border-royal-gold rounded-3xl overflow-hidden min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center justify-center"
                >
                    {/* Video Background */}
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                    >
                        <video 
                            className="object-cover w-full h-full"
                            src="/hero-video.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>

                    {/* Foreground Layer */}
                    <div
                        className="relative z-10 text-off-white text-center px-4 max-w-3xl"
                    >
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold"
                        >
                            Welcome to VoidLoop
                        </h1>
                        <p
                            className="mt-4 text-base sm:text-lg md:text-xl text-muted-gray"
                        >
                            Elevate your music with world-class production.
                        </p>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}