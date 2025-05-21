interface ServiceCardProps {
    id: string
    className?: string
    title: string
    dataAnimate: string
    handleOpenModal: () => void
}


export default function ServiceCard({ id, className, title, dataAnimate, handleOpenModal }: ServiceCardProps) {
    return (
        <button
            id={id}
            className={`card ${className || "text-transparent bg-clip-text bg-gradient-to-r from-off-white to-royal-gold"}`}
            data-animate={dataAnimate}
            onClick={handleOpenModal}
        >
            {title}
        </button>
    )
}