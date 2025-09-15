# InvestPro 🏢✨

## 📄 Descrição

O **InvestPro** é uma plataforma web completa e moderna para **consultoria de investimento imobiliário**.  
O projeto foi desenvolvido para oferecer uma **experiência fluida e profissional**, desde a captação de leads na homepage até a área do cliente com recomendações personalizadas.

O design transmite **confiança e seriedade**, utilizando um sistema de cores coeso, componentes reutilizáveis e **animações sutis** que guiam o usuário pela interface.

➡️ **Deploy do Projeto:** [Acesse na Vercel](https://dev-frontend-test-sepia.vercel.app/)

---

## ✅ Features Principais

- 🎨 **Design System Profissional**  
  Construído com **Shadcn/ui** e **Tailwind CSS**, garantindo consistência, acessibilidade e visual moderno.

- 🎬 **Animações Dinâmicas**  
  Transições suaves com **Framer Motion** para melhorar a experiência do usuário.

- 📱 **Responsividade Completa**  
  Layout adaptado para desktop, tablet e mobile.

- 🏠 **Homepage Completa**  
  Hero Section de impacto, apresentação de serviços, depoimentos e formulário de contato.

- 🏢 **Páginas Institucionais**  
  Seções de **Sobre a Empresa** (missão, visão, valores e equipe) e **Serviços** (metodologia detalhada).

- 📰 **Notícias do Setor**  
  Integração com **GNews API** para exibir notícias atualizadas sobre o mercado imobiliário.

- 📝 **Formulário de Contato**  
  Preenchimento automático de endereço com **ViaCEP**  

- 🚀 **Otimização para SEO**  
  Estrutura semântica e boas práticas aplicadas para melhor ranqueamento nos buscadores.

---

## 🛠️ Stack Escolhida e Justificativa

- **Next.js** → escolhido por oferecer **SSR (Server-Side Rendering)**, **SSG (Static Site Generation)** e **rotas otimizadas**, garantindo **alta performance, melhor SEO** e escalabilidade. Além disso, possui ótima integração com Vercel para deploy.  
- **Tailwind CSS** → escolhido por sua **produtividade** no desenvolvimento de interfaces modernas, **consistência visual** e fácil manutenção de estilos. Ele também facilita a criação de layouts responsivos de forma rápida e eficiente.  
---

## 🔎 Principais Práticas de SEO Aplicadas

- **Uso de metadados completos** (`title`, `description`, `keywords`) definidos no `layout.tsx`.  
- **Open Graph configurado** para melhor exibição em redes sociais.  
- **Tags semânticas** (`main`, `section`, `footer`, etc.) para melhor indexação.  
- **Configuração de `robots` e `googleBot`** para garantir indexação adequada.  
- **Suporte a `theme-color` responsivo** para personalização da experiência em navegadores.  
- **Estrutura semântica otimizada** para ranqueamento em buscadores.  

---

## ❓ Como foi implementada a API

### 📌 ViaCEP
- Implementada para **preenchimento automático de endereço** no formulário de contato.  
- Só permite **8 dígitos** para o CEP, sendo automaticamente formatado no padrão **00000-000**.  
- Utiliza **Zod** para validação e tratamento de erros de resposta da API.  

### 📌 GNews
- Integrada para exibir notícias do **mercado imobiliário**.  
- O código usa variáveis de ambiente:  
  - `GNEWS_API_KEY` → chave de autenticação.  
  - `GNEWS_API_BASE_URL` → endpoint da API.  
- Faz a requisição com `fetch` passando parâmetros como:  
  - `q=imóveis` (palavra-chave).  
  - `lang=pt` (idioma português).  
  - `country=br` (notícias do Brasil).  
  - `max=10` (limite de artigos).  
- Os títulos das notícias são **normalizados e comparados** para evitar duplicidade, usando uma função de **similaridade textual**.  
- Retorna até **10 artigos únicos** após a filtragem.  

---

## 🚀 Rodando o Projeto Localmente

### 📌 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18.x ou superior)  
- [pnpm](https://pnpm.io/pt/) ou [npm](https://www.npmjs.com/)

---

### 1. Clonando o Repositório

```bash
git clone https://github.com/HebertyRichards/dev-frontend-test.git
cd dev-frontend-test/my-app
```

---

### 2. Instalando as Dependências

```bash
pnpm install ou  npm install
```

---

### 3. Configurando as Variáveis de Ambiente (opcional)

Este projeto precisa de uma **API Key da GNews** para buscar notícias.

1. Crie uma conta em [GNews.io](https://gnews.io/) e obtenha sua chave gratuita.  
2. Na raiz do projeto, crie o arquivo `.env.local`.  
3. Adicione a seguinte linha:  

```env
GNEWS_API_KEY=SUA_CHAVE_API_AQUI
GNEWS_API_BASE_URL="https://gnews.io/api/v4/search"
```

⚠️ **Importante:** O arquivo `.env.local` não deve ser versionado. Ele já está no `.gitignore`, mesmo sem a API o projeto funcionará normalmente.

---

### 4. Rodando o Servidor de Desenvolvimento

```bash
pnpm run dev ou npm run dev
```

Abra **http://localhost:3000** no navegador para visualizar o projeto.

