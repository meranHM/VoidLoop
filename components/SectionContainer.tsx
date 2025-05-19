
interface SectionContainerProps {
    children: React.ReactNode
    className?: string
    id: string
}

export default function SectionContainer({ children, className, id }: SectionContainerProps) {
    return (
        <section
            className={`min-h-screen w-full text-off-white flex items-center justify-center ${className || ""}`}
            id={id}
        >
            {children}
        </section>
    )
}