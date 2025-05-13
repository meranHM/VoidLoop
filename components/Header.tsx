import Image from "next/image";

export default function Header() {
    return (
        <header
            className="w-full bg-charcoal-black flex items-center p-1 justify-between border-b border-muted-gray"
        >
            <div>
                <Image 
                    src="/voidloop-logo.png"
                    alt="VoidLoop logo"
                    width={150}
                    height={150}
                    className="w-16 h-16"
                />
            </div>
            <div>
                <Image 
                    src="/vinyl.png"
                    alt="Vinyl image"
                    width={150}
                    height={150}
                    className="w-16 h-16"
                />
            </div>
        </header>
    )
}