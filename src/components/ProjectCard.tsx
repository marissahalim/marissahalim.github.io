import { Link } from 'react-router-dom';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export function ProjectCard({ title, description, image, link }: ProjectCardProps) {
    return <Link to={link} className="bg-neutral-primary-soft block max-w-md rounded-base">
        <img className="rounded w-full h-84 object-cover" src={image} alt={title} />
        <div className="p-2">
            <h5 className="m-6 text-2xl font-semibold tracking-tight text-heading text-center">{title}</h5>
            <p className="mb-4 text-body text-justify">{description}</p>
        </div>
    </Link>;
}