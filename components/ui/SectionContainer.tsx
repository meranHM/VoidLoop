import { forwardRef } from "react"

interface SectionContainerProps {
    children: React.ReactNode
    className?: string
    id: string
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
    ({ children, className, id }, ref) => {
        return (
            <section
                ref={ref}
                className={`min-h-screen w-full text-off-white flex items-center justify-center ${className || ""}`}
                id={id}
            >
                {children}
            </section>
        )
    }
)

SectionContainer.displayName = "SectionContainer"

export default SectionContainer


