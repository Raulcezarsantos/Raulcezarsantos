import { skills, stackItems } from "../../data/skills";
import { SectionTitle } from "../../components/ui/SectionTitle/SectionTitle";

export function Skills() {
    return (
        <section className="section" id="especialidades">
            <SectionTitle
                eyebrow="Especialidades"
                title="Competencias que aparecem com mais consistencia nos projetos desenvolvidos."
            />

            <div className="capability-grid">
                {skills.map((item) => {
                    const Icon = item.icon;

                    return (
                        <article className="capability-card" key={item.id}>
                            <div className="card-icon">
                                <Icon size={20} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    );
                })}
            </div>

            <div className="stack-cloud">
                {stackItems.map((item) => (
                    <span key={item}>{item}</span>
                ))}
            </div>
        </section>
    );
}
