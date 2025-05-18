
interface SectionContainerProps {
    children: React.ReactNode
    className?: string
}

export default function SectionContainer({ children, className }: SectionContainerProps) {
    return (
        <section
            className={`min-h-screen w-full text-off-white flex items-center justify-center ${className || ""}`}
        >
            {children}
        </section>
    )
}