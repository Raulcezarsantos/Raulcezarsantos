import type { CSSProperties } from "react";
import type { Project } from "../../../data/projects";

interface ProjectPreviewProps {
    project: Project;
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
    return (
        <div
            className="project-preview"
            style={
                {
                    "--project-accent": project.accent,
                    "--project-surface": project.surface
                } as CSSProperties
            }
        >
            <div className="project-preview-window">
                <div className="project-preview-bar">
                    <span />
                    <span />
                    <span />
                </div>

                <div className="project-preview-content">
                    <div className="project-preview-copy">
                        <p>{project.type}</p>
                        <strong>{project.title}</strong>
                        <small>{project.teaser}</small>
                    </div>

                    <div className="project-preview-stats">
                        {project.previewStats.map((item) => (
                            <article key={item.label}>
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </article>
                        ))}
                    </div>

                    <div className="project-preview-tags">
                        {project.tags.slice(0, 4).map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
