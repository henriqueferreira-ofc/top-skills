# Top Skills 2025-2030

Uma aplicação web moderna que apresenta as 10 principais habilidades do mercado de trabalho para o período 2025-2030.

## 🚀 Tecnologias

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
top-skills/
├── src/
│   ├── components/
│   │   ├── layout/           # Componentes de layout (Header, Footer, Layout)
│   │   ├── home/             # Componentes da página inicial
│   │   │   ├── Hero.tsx
│   │   │   ├── SkillsGrid.tsx
│   │   │   └── CTASection.tsx
│   │   └── skills/           # Componentes relacionados a skills
│   │       ├── SkillCard.tsx
│   │       ├── SkillDetail.tsx
│   │       └── sections/     # Componentes de seção
│   │           ├── SectionRenderer.tsx
│   │           ├── TextSection.tsx
│   │           ├── ListSection.tsx
│   │           ├── CardsSection.tsx
│   │           ├── ToolsSection.tsx
│   │           ├── StepsSection.tsx
│   │           └── ProcessSection.tsx
│   ├── data/
│   │   └── skills.ts         # Dados das habilidades
│   ├── types/
│   │   └── index.ts          # Definições TypeScript
│   ├── styles/
│   │   └── index.css         # Estilos globais
│   ├── App.tsx               # Componente principal
│   └── main.tsx              # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Funcionalidades

- ✅ Visualização de 10 habilidades essenciais
- ✅ Detalhes completos de cada habilidade
- ✅ Design responsivo e moderno
- ✅ Animações suaves
- ✅ Navegação intuitiva
- ✅ Seções dinâmicas (texto, listas, cards, ferramentas, passos, processos)

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 20.x ou superior
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

A aplicação estará disponível em `http://localhost:3000`

## 🏗️ Arquitetura

### Componentes

A aplicação foi estruturada de forma modular:

- **Layout Components**: Gerenciam a estrutura geral da página
- **Home Components**: Componentes específicos da página inicial
- **Skills Components**: Componentes para exibição de habilidades
- **Section Components**: Componentes reutilizáveis para diferentes tipos de conteúdo

### Gerenciamento de Estado

- Estado local com React hooks (`useState`, `useEffect`)
- Navegação entre views gerenciada no componente `App`

### Estilização

- Tailwind CSS para estilos utilitários
- Classes customizadas para animações
- Design system consistente com cores e espaçamentos

## 📊 Habilidades Incluídas

1. **Inteligência Artificial (IA)**
2. **Colaboração e Trabalho em Equipe**
3. **Análise de Dados**
4. **Proatividade**
5. **Automação de Processos**
6. **Gestão de Tempo**
7. **Liderança e Influência**
8. **Inteligência Emocional**
9. **Criatividade e Inovação**
10. **Pensamento Crítico**

## 🎨 Design

- Interface moderna e clean
- Gradientes e animações sutis
- Responsivo para todos os dispositivos
- Paleta de cores profissional
- Tipografia otimizada para legibilidade

## 📝 Licença

© 2024 FutureSkills Hub. Todos os direitos reservados.

## 🤝 Contribuindo

Este é um projeto educacional. Sugestões e melhorias são bem-vindas!
