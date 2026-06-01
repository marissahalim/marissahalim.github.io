import projectData from '../projects.json';
import { ProjectCard } from "./ProjectCard";

export function Projects() {
    return <div className="flex flex-col gap-6 pt-16 items-center" id="Projects">
        <p className="text-4xl text-center">Projects</p>
        <div className="grid grid-cols-2 gap-8 max-w-4xl w-full">
            {projectData.projects.map((project: { id: number; title: string; description: string; image: string; link: string }) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                />
            ))}
        </div>
    </div>
}