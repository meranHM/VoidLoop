import SectionContainer from "./ui/SectionContainer"


export default function ContactSection() {
    return (
        <SectionContainer
            className="bg-charcoal-black flex-col"
            id="contact"
        >
            <h2>Contact Us</h2>
            <form
                className="flex flex-col gap-4 w-full max-w-md"
            >
                <input 
                    type="text"
                    placeholder="Name"
                    className="p-2 rounded bg-gray-700"
                />
                <input 
                    type="email"
                    placeholder="Email"
                    className="p-2 rounded bg-gray-700"
                />
                <textarea 
                    placeholder="Message"
                    className="p-2 rounded bg-gray-700"
                    rows={4}
                />
                <button
                    className="bg-royal-gold py-2 rounded text-rich-black"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </SectionContainer>
    )
}