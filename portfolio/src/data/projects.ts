import projectOneImage from "../assets/images/projeto-1.png";
import projectTwoImage from "../assets/images/projeto-2.png";
import projectThreeImage from "../assets/images/projeto-3.png";
import projectFourImage from "../assets/images/projeto-3.jpg";

export interface Project {
    id: string;
    type: string;
    title: string;
    teaser: string;
    description: string;
    outcome: string;
    image: string;
    tags: string[];
    bullets: string[];
    repositoryUrl?: string;
    repositoryLabel?: string;
}

export const projects: Project[] = [
    {
        id: "obahubb",
        type: "Portal corporativo",
        title: "ObaHubb",
        teaser: "Portal com autenticacao Microsoft, permissao e navegacao para operacao interna.",
        description:
            "Plataforma interna com front-end em React, back-end em .NET 8, autenticacao com Azure AD e gestao de acessos para sistemas e menus corporativos.",
        outcome:
            "Organiza o acesso a sistemas internos e melhora a experiencia de uso para times operacionais.",
        image: projectOneImage,
        tags: ["React", "TypeScript", ".NET 8", "Azure AD"],
        bullets: [
            "React, Vite e TypeScript no front-end",
            "ASP.NET Core Web API com organizacao modular",
            "Autenticacao e permissao integradas ao ecossistema Microsoft"
        ]
    },
    {
        id: "redeoba-eduvem",
        type: "Servico de integracao",
        title: "Redeoba Eduvem",
        teaser: "Sincronizacao de usuarios, times e eventos entre Oracle, Service Bus e Active Directory.",
        description:
            "Servico responsavel por sincronizar usuarios, times e eventos entre Oracle, Azure Service Bus, Active Directory e a plataforma Eduvem.",
        outcome:
            "Reduz trabalho manual e aumenta a consistencia de identidade, acessos e estrutura de times.",
        image: projectTwoImage,
        tags: [".NET", "Oracle", "Service Bus", "Active Directory"],
        bullets: [
            "Servico .NET orientado a integracao",
            "Leitura de filas e comunicacao com APIs externas",
            "Conexao entre Oracle, Active Directory e Eduvem"
        ]
    },
    {
        id: "adwatcher",
        type: "Worker corporativo",
        title: "AdWatcher",
        teaser: "Leitura incremental de alteracoes e publicacao de eventos para outros servicos.",
        description:
            "Worker para leitura incremental de alteracoes no Active Directory, consolidacao com dados de RM e publicacao de eventos de integracao para outros servicos.",
        outcome:
            "Cria uma base mais confiavel para automacoes internas e integracoes orientadas a eventos.",
        image: projectThreeImage,
        tags: [".NET Worker", "RM", "Active Directory", "Eventos"],
        bullets: [
            "Worker .NET com processamento incremental",
            "Consolidacao de dados AD e RM",
            "Publicacao de eventos para filas de integracao"
        ]
    },
    {
        id: "payment-event-hub",
        type: "Backend de integracao",
        title: "Payment Event Hub",
        teaser: "Hub de webhooks com validacao de assinatura, idempotencia, persistencia e processamento assincrono.",
        description:
            "Projeto em ASP.NET Core para ingestao de eventos de pagamento via Stripe, armazenamento do payload bruto, controle de duplicidade, fila em memoria, processamento em background e consulta de status por API.",
        outcome:
            "Demonstra uma arquitetura de backend voltada para integracoes reais, com foco em confiabilidade operacional, rastreabilidade e reprocessamento de eventos.",
        image: projectFourImage,
        tags: [".NET 10", "ASP.NET Core", "Stripe", "Dapper", "SQLite"],
        bullets: [
            "Recebimento de webhooks com validacao de assinatura",
            "Persistencia do evento bruto e controle de idempotencia",
            "Processamento em background com reprocessamento manual"
        ],
        repositoryUrl: "https://github.com/Raulcezarsantos/payment-event-hub",
        repositoryLabel: "Ver repositorio"
    }
];
