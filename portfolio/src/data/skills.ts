import { Blocks, GitBranch, LayoutDashboard, Workflow, type LucideIcon } from "lucide-react";

export interface SkillCategory {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

export const skills: SkillCategory[] = [
    {
        id: "produtos-internos",
        icon: LayoutDashboard,
        title: "Produtos internos",
        description:
            "Portais corporativos, areas operacionais, paineis administrativos e experiencias voltadas para uso diario."
    },
    {
        id: "apis-e-servicos",
        icon: Blocks,
        title: "APIs e servicos .NET",
        description:
            "Back-end com autenticacao, configuracao por ambiente, contratos claros e estrutura pensada para manutencao."
    },
    {
        id: "integracoes-corporativas",
        icon: Workflow,
        title: "Integracoes corporativas",
        description:
            "Fluxos envolvendo Oracle, Active Directory, filas, APIs externas e processos internos do negocio."
    },
    {
        id: "refatoracao",
        icon: GitBranch,
        title: "Refatoracao orientada a qualidade",
        description:
            "Melhoria de UI, estrutura, legibilidade e responsividade sem perder consistencia tecnica."
    }
];

export const stackItems: string[] = [
    ".NET 8",
    "ASP.NET Core",
    "React",
    "Vite",
    "TypeScript",
    "Oracle",
    "PostgreSQL",
    "Azure Active Directory",
    "Azure Service Bus",
    "Workers",
    "APIs",
    "Integracoes"
];
