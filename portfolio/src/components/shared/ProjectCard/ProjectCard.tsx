import type { Project } from "../../../data/projects";

interface ProjectCardProps {
    project: Project;
    active?: boolean;
    onSelect?: (projectId: string) => void;
}

export function ProjectCard({ project, active = false, onSelect }: ProjectCardProps) {
    return (
        <button
            className={`project-selector-item ${active ? "active" : ""}`.trim()}
            type="button"
            onClick={() => onSelect?.(project.id)}
        >
            <span className="project-selector-type">{project.type}</span>
            <strong>{project.title}</strong>
            <small>{project.teaser}</small>
        </button>
    );
}
