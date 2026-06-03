import type { Project } from "../../data/projects";
import { SectionTitle } from "../../components/ui/SectionTitle/SectionTitle";
import { ProjectCard } from "../../components/shared/ProjectCard/ProjectCard";

interface ProjectsProps {
    projects: Project[];
    activeProject: Project;
    onProjectChange: (projectId: string) => void;
}

export function Projects({ projects, activeProject, onProjectChange }: ProjectsProps) {
    return (
        <section className="section projects-section" id="projetos">
            <SectionTitle
                eyebrow="Projetos"
                title="Vitrine interativa de cases com foco em front-end, integracao e software corporativo."
            />

            <div className="project-showcase">
                <aside className="project-selector">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            active={project.id === activeProject.id}
                            onSelect={onProjectChange}
                        />
                    ))}
                </aside>

                <article className="project-detail-card">
                    <div className="project-detail-media">
                        <img
                            src={activeProject.image}
                            alt={`Preview visual do projeto ${activeProject.title}`}
                        />
                    </div>

                    <div className="project-detail-copy">
                        <p className="project-type">{activeProject.type}</p>
                        <h3>{activeProject.title}</h3>
                        <p>{activeProject.description}</p>

                        <div className="project-detail-tags">
                            {activeProject.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>

                        <ul>
                            {activeProject.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    );
}
