export interface Project {
    id: string;
    type: string;
    title: string;
    teaser: string;
    description: string;
    outcome: string;
    tags: string[];
    bullets: string[];
    repositoryUrl?: string;
    repositoryLabel?: string;
    liveUrl?: string;
    liveLabel?: string;
    accent: string;
    surface: string;
    previewStats: Array<{
        label: string;
        value: string;
    }>;
}

export const projects: Project[] = [
    {
        id: "payment-event-hub",
        type: "Backend de integracao",
        title: "Payment Event Hub",
        teaser: "Hub de webhooks com validacao de assinatura, idempotencia, persistencia e processamento assincrono.",
        description:
            "Projeto em ASP.NET Core para ingestao de eventos de pagamento via Stripe, armazenamento do payload bruto, controle de duplicidade, fila em memoria, processamento em background e consulta de status por API.",
        outcome:
            "Demonstra um backend de integracao com foco em confiabilidade operacional, rastreabilidade e reprocessamento de eventos.",
        tags: [".NET 10", "ASP.NET Core", "Stripe", "Dapper", "SQLite"],
        bullets: [
            "Recebimento de webhooks com validacao de assinatura",
            "Persistencia do evento bruto e controle de idempotencia",
            "Processamento em background com reprocessamento manual"
        ],
        repositoryUrl: "https://github.com/Raulcezarsantos/payment-event-hub",
        repositoryLabel: "Ver repositorio",
        accent: "#ff7d5c",
        surface: "linear-gradient(145deg, rgba(21, 29, 40, 0.96), rgba(43, 57, 76, 0.92))",
        previewStats: [
            { label: "Eventos", value: "24.8k" },
            { label: "Duplicidade", value: "0%" },
            { label: "Status API", value: "200" }
        ]
    },
    {
        id: "controle-de-habitos",
        type: "Produto front-end",
        title: "Controle de Habitos",
        teaser: "Aplicacao para rotina diaria com streaks, check-in semanal e persistencia local.",
        description:
            "App em React, TypeScript e Vite com dashboard de consistencia, criacao de habitos, historico semanal e experiencia responsiva para celular, tablet e desktop.",
        outcome:
            "Mostra construcao de produto visual com foco em usabilidade, estado local e interface preparada para mobile.",
        tags: ["React 19", "TypeScript", "Vite", "Lucide", "LocalStorage"],
        bullets: [
            "Criacao de habitos com categoria, meta semanal e dias preferidos",
            "Check-in diario com visao semanal interativa",
            "Persistencia local para uso real sem backend"
        ],
        repositoryUrl: "https://github.com/Raulcezarsantos/Controle-de-Habitos",
        repositoryLabel: "Ver repositorio",
        liveUrl: "https://controle-de-habitos-delta.vercel.app/",
        liveLabel: "Abrir demo",
        accent: "#2dd4bf",
        surface: "linear-gradient(145deg, rgba(4, 21, 30, 0.96), rgba(9, 47, 54, 0.9))",
        previewStats: [
            { label: "Consistencia", value: "82%" },
            { label: "Habitos", value: "12" },
            { label: "Streak", value: "16d" }
        ]
    },
    {
        id: "rick-and-morty-explorer",
        type: "Explorer front-end",
        title: "Rick and Morty Explorer",
        teaser: "Busca, filtros e navegacao com estado sincronizado para personagens, episodios e localizacoes.",
        description:
            "Refatoracao do desafio front-end com React, TypeScript, React Router e TanStack Query, incluindo paginas separadas, filtros na URL e consumo organizado da API publica.",
        outcome:
            "Comprova organizacao de front-end, consulta de API externa, filtros e navegacao com foco em experiencia de uso.",
        tags: ["React 19", "TypeScript", "React Router", "TanStack Query", "REST API"],
        bullets: [
            "Busca e filtros sincronizados com a URL",
            "Paginas separadas para personagens, episodios e localizacoes",
            "Fallback visual para imagens e estado vazio"
        ],
        repositoryUrl: "https://github.com/Raulcezarsantos/Desafio-Tecnico-Frontend-Web-",
        repositoryLabel: "Ver repositorio",
        liveUrl: "https://desafio-tecnico-frontend-web.vercel.app/",
        liveLabel: "Abrir demo",
        accent: "#8b5cf6",
        surface: "linear-gradient(145deg, rgba(11, 20, 39, 0.96), rgba(34, 49, 83, 0.92))",
        previewStats: [
            { label: "Personagens", value: "826" },
            { label: "Paginas", value: "42" },
            { label: "Filtros", value: "URL" }
        ]
    },
    {
        id: "streaming-showcase",
        type: "Experiencia visual",
        title: "Streaming Showcase",
        teaser: "Catalogo inspirado em streaming com curadoria de linhas, trailer em modal e TMDB.",
        description:
            "Projeto em React, TypeScript e Vite com integracao TMDB, destaque editorial, linhas por categoria e modal para trailer, organizado para demonstrar refinamento visual e experiencia responsiva.",
        outcome:
            "Reforca dominio de interface, consumo de API de terceiros e apresentacao visual mais premium para front-end.",
        tags: ["React 19", "TypeScript", "Vite", "TMDB", "TanStack Query"],
        bullets: [
            "Hero editorial com destaque dinamico",
            "Linhas de catalogo por categoria com scroll horizontal",
            "Trailer em modal com dados da TMDB"
        ],
        repositoryUrl: "https://github.com/Raulcezarsantos/Netflix-Clone",
        repositoryLabel: "Ver repositorio",
        liveUrl: "https://netflix-clone-beta-orcin.vercel.app/#hero",
        liveLabel: "Abrir demo",
        accent: "#ef4444",
        surface: "linear-gradient(145deg, rgba(24, 9, 18, 0.96), rgba(63, 18, 28, 0.9))",
        previewStats: [
            { label: "Catalogos", value: "6" },
            { label: "Trailer", value: "Modal" },
            { label: "Origem", value: "TMDB" }
        ]
    }
];
