import { ArrowUpRight, Linkedin, Sparkles } from "lucide-react";
import heroBackground from "../../assets/images/background.jpg";
import type { Project } from "../../data/projects";
import { Button } from "../../components/ui/Button/Button";

interface HeroProps {
    activeProject: Project;
    projects: Project[];
    onProjectChange: (projectId: string) => void;
}

const proofItems = [
    {
        title: ".NET 8 + React",
        text: "Aplicacoes com front-end, back-end e integracoes na mesma entrega"
    },
    {
        title: "Produtos internos",
        text: "Portais, fluxos operacionais e sistemas voltados para uso real"
    },
    {
        title: "Oracle, AD e filas",
        text: "Conexao entre legados, autenticacao e plataformas modernas"
    }
];

export function Hero({ activeProject, projects, onProjectChange }: HeroProps) {
    return (
        <section className="hero" id="inicio">
            <div className="hero-content">
                <p className="eyebrow">Desenvolvedor de software</p>
                <h1>Interfaces modernas, integracoes robustas e software corporativo com padrao profissional.</h1>
                <p className="hero-copy">
                    Desenvolvo produtos internos, APIs e servicos em .NET com foco em clareza,
                    experiencia de uso e confiabilidade tecnica para ambientes corporativos.
                </p>

                <div className="hero-actions">
                    <Button href="https://github.com/Raulcezarsantos" target="_blank" rel="noreferrer">
                        Ver GitHub <ArrowUpRight size={18} />
                    </Button>
                    <Button
                        href="https://www.linkedin.com/in/raul-cezar-336b94164/"
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                    >
                        Falar no LinkedIn <Linkedin size={18} />
                    </Button>
                </div>

                <div className="hero-proof">
                    {proofItems.map((item) => (
                        <article key={item.title}>
                            <strong>{item.title}</strong>
                            <span>{item.text}</span>
                        </article>
                    ))}
                </div>
            </div>

            <div
                className="hero-stage"
                aria-label="Destaques visuais do portifolio"
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)), url(${heroBackground})`
                }}
            >
                <div className="hero-stage-top">
                    <p className="spotlight-label">Projeto em evidência</p>
                    <div className="hero-switcher" role="tablist" aria-label="Selecionar projeto em destaque">
                        {projects.map((project) => (
                            <button
                                key={project.id}
                                className={`hero-switcher-button ${project.id === activeProject.id ? "active" : ""}`}
                                type="button"
                                onClick={() => onProjectChange(project.id)}
                            >
                                {project.title}
                            </button>
                        ))}
                    </div>
                </div>

                <article className="spotlight-card spotlight-card-primary spotlight-card-live">
                    <div className="spotlight-headline">
                        <div>
                            <p className="spotlight-label">{activeProject.type}</p>
                            <h2>{activeProject.title}</h2>
                        </div>
                        <span className="status-pill">
                            <Sparkles size={16} />
                            Destaque atual
                        </span>
                    </div>
                    <p>{activeProject.teaser}</p>
                    <img src={activeProject.image} alt={`Preview do projeto ${activeProject.title}`} />
                </article>

                <article className="spotlight-card spotlight-card-secondary">
                    <p className="spotlight-label">Impacto</p>
                    <h2>{activeProject.title}</h2>
                    <p>{activeProject.outcome}</p>
                </article>

                <article className="spotlight-card spotlight-card-float">
                    <p className="spotlight-label">Stack principal</p>
                    <div className="mini-tags">
                        {activeProject.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    );
}
