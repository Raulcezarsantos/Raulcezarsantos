import { Button } from "../../ui/Button/Button";
import { SocialLinks } from "../../shared/SocialLinks/SocialLinks";
import { socialLinks } from "../../../data/socialLinks";
import { formatDate } from "../../../utils/formatDate";

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-copy">
                <p className="eyebrow">Contato</p>
                <h2>Disponivel para conversar sobre produtos internos, integracoes e evolucao de software.</h2>
                <p>
                    Para oportunidades, parcerias ou apresentacao de projetos, os canais abaixo sao o
                    caminho mais direto.
                </p>
                <small className="footer-meta">Atualizado em {formatDate(new Date())}</small>
            </div>

            <div className="footer-actions">
                <Button
                    href="https://www.linkedin.com/in/raul-cezar-336b94164/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Conversar no LinkedIn
                </Button>
                <Button
                    href="https://github.com/Raulcezarsantos"
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                >
                    Explorar repositorios
                </Button>
                <SocialLinks links={socialLinks} tone="dark" />
            </div>
        </footer>
    );
}
