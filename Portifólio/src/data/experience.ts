export interface ExperienceItem {
    id: string;
    index: string;
    title: string;
    description: string;
}

export const experienceItems: ExperienceItem[] = [
    {
        id: "portais",
        index: "01",
        title: "Portais e plataformas internas",
        description:
            "Desenvolvimento de produtos voltados para acesso a sistemas, operacao, menus dinamicos, governanca e produtividade em ambiente corporativo."
    },
    {
        id: "sincronizacao",
        index: "02",
        title: "Sincronizacao de usuarios e dados",
        description:
            "Integracoes para criar, atualizar, vincular e desativar usuarios entre sistemas, filas, Active Directory e fontes legadas."
    },
    {
        id: "workers",
        index: "03",
        title: "Workers e automacao orientada a eventos",
        description:
            "Servicos que observam mudancas, centralizam dados e publicam eventos para alimentar outros fluxos internos com mais confiabilidade."
    }
];
