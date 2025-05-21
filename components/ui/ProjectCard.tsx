interface ProjectCardProps {
    src: string
    title: string
    description?: string
    className?: string
}


export default function ProjectCard({ src, title, description, className }: ProjectCardProps) {
    return (
        <article
            className={`max-w-96 rounded-2xl p-6 flex flex-col justify-center items-center space-y-4 ${className || ""}`}
        >
            <div>
                <h3
                    className="text-nowrap lg:text-3xl"
                >
                    {title}
                </h3>
                {description && <p>{description}</p>}
            </div>
            <div
                className="rounded-2xl overflow-hidden"
            >
                <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="size-full object-cover"
                />
            </div>
        </article>
    )
}