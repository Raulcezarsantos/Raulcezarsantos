import { experienceItems } from "../../data/experience";
import { SectionTitle } from "../../components/ui/SectionTitle/SectionTitle";

export function Experience() {
    return (
        <section className="section experience-section" id="experiencia">
            <SectionTitle
                eyebrow="Experiencia"
                title="Atuacao voltada para operacao, integracao e produtos internos com contexto real."
            />

            <div className="experience-grid">
                {experienceItems.map((item) => (
                    <article className="experience-card" key={item.id}>
                        <span className="experience-index">{item.index}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
