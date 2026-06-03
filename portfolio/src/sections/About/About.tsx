import aboutImage from "../../assets/images/about.jpg";
import { SectionTitle } from "../../components/ui/SectionTitle/SectionTitle";

export function About() {
    return (
        <section className="section about-section" id="sobre">
            <SectionTitle
                eyebrow="Sobre"
                title="Desenvolvimento orientado a produto, integracao e qualidade de entrega."
            />

            <div className="about-grid">
                <figure className="about-figure">
                    <img src={aboutImage} alt="Raul Cezar em retrato profissional" />
                </figure>

                <div className="about-panel">
                    <p>
                        Atuo no desenvolvimento de software corporativo conectando interfaces, APIs,
                        workers, bancos de dados e integracoes com sistemas internos. Meu foco e criar
                        entregas que unam organizacao tecnica, experiencia de uso e contexto real de operacao.
                    </p>
                    <p>
                        Trabalho bem em cenarios que exigem evolucao de sistemas existentes, integracao entre
                        plataformas e uma camada visual mais madura para produtos internos.
                    </p>

                    <div className="about-points">
                        <article>
                            <strong>Arquitetura</strong>
                            <span>Separacao entre dominio, aplicacao e infraestrutura</span>
                        </article>
                        <article>
                            <strong>Experiencia</strong>
                            <span>Interfaces responsivas para desktop, tablet e celular</span>
                        </article>
                        <article>
                            <strong>Entrega</strong>
                            <span>Codigo legivel, navegacao clara e menos fragilidade tecnica</span>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
