# Raul Cezar Santos

Desenvolvedor de software com foco em integracoes, produtos internos, APIs .NET e interfaces web para contexto corporativo.

[LinkedIn](https://www.linkedin.com/in/raul-cezar-336b94164/) | [GitHub](https://github.com/Raulcezarsantos)

## Sobre

Atuo em projetos que conectam front-end, back-end, banco de dados, filas, autenticacao e regras de negocio. Meu foco e entregar software com estrutura clara, boa manutencao e menos fragilidade tecnica.

## Stack principal

- .NET 8 / ASP.NET Core
- React / Vite / TypeScript
- Oracle / PostgreSQL
- Azure Active Directory
- Azure Service Bus
- Integracoes corporativas e workers

## Projetos em destaque

### ObaHubb

Portal corporativo com React, TypeScript e .NET 8 para autenticacao, menus dinamicos e acesso a sistemas internos.

### Redeoba Eduvem

Servico de integracao responsavel por sincronizar usuarios, times e eventos entre Oracle, Azure Service Bus, Active Directory e Eduvem.

### AdWatcher

Worker .NET para leitura incremental de alteracoes no Active Directory, consolidacao com dados de RM e publicacao de eventos para outros servicos.

### Payment Event Hub

Backend de integracao com ASP.NET Core para recebimento de webhooks Stripe, validacao de assinatura, persistencia do payload bruto, idempotencia e processamento assincrono.

Repositorio separado: [payment-event-hub](https://github.com/Raulcezarsantos/payment-event-hub)

## Portfolio

O projeto visual deste repositorio esta em [portfolio/](./portfolio/), com uma landing page em React + TypeScript organizada por `sections`, `components`, `data`, `hooks` e `styles`.

Demo publicada: https://portifoklio-tau.vercel.app/

### Rodando localmente

```bash
cd portfolio
npm install
npm run dev
```

### Build de producao

```bash
cd portfolio
npm run build
```
