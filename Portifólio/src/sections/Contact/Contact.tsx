import { SocialLinks } from "../../components/shared/SocialLinks/SocialLinks";
import { SectionTitle } from "../../components/ui/SectionTitle/SectionTitle";
import { socialLinks } from "../../data/socialLinks";

export function Contact() {
    return (
        <section className="section contact-section" id="contato">
            <SectionTitle
                eyebrow="Contato"
                title="Canais para oportunidades, parcerias e apresentacao de projetos."
                description="A forma mais objetiva de contato hoje e pelo LinkedIn e pelo GitHub."
            />

            <div className="contact-panel">
                <div className="contact-copy">
                    <strong>Disponivel para conversas sobre produtos internos, integracoes e evolucao de software.</strong>
                    <p>
                        Se houver interesse em discutir um projeto, um case ou uma oportunidade, os links abaixo
                        concentram os canais principais.
                    </p>
                </div>

                <SocialLinks links={socialLinks} />
            </div>
        </section>
    );
}
