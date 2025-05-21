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
            className={`card ${className || ""}`}
            data-animate={dataAnimate}
            onClick={handleOpenModal}
        >
            {title}
        </button>
    )
}