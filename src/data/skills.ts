import {
    Brain,
    Users,
    BarChart3,
    Rocket,
    Settings,
    Clock,
    Smile,
    Lightbulb,
    Puzzle,
    TrendingUp,
    Shield,
    MessageCircle,
    Code,
    Database,
    Search,
    Zap,
    Target,
    UserCheck,
    Award,
    BookOpen,
    Monitor,
    Layout,
    Globe,
    CheckCircle2,
    Cpu,
    Share2,
    Calendar,
    Layers,
    Heart
} from 'lucide-react';
import { Skill } from '../types';

// Helper icon for constants
const TooltipIcon = Search; // Fallback

export const SKILLS_DATA: Skill[] = [
    {
        id: 'ai',
        title: 'Inteligência Artificial (IA)',
        shortDescription: 'Sistemas capazes de realizar tarefas que requerem inteligência humana.',
        fullDefinition: 'O campo da ciência da computação dedicado a criar sistemas capazes de realizar tarefas que normalmente requerem inteligência humana, como aprendizado, raciocínio e percepção.',
        icon: Brain,
        color: 'bg-blue-900',
        sections: [
            {
                title: 'Aplicações Chave',
                type: 'list',
                items: [
                    { title: 'Automação de Processos (RPA)', description: 'Automatização de tarefas repetitivas.' },
                    { title: 'Análise Preditiva em Saúde', description: 'Diagnósticos mais rápidos e precisos.' },
                    { title: 'Veículos Autônomos', description: 'Transporte inteligente e sem condutor.' },
                    { title: 'Chatbots e Assistentes Virtuais', description: 'Atendimento ao cliente 24/7.' },
                    { title: 'Detecção de Fraude Financeira', description: 'Segurança em transações bancárias.' }
                ]
            },
            {
                title: 'Ferramentas e Tecnologias Relevantes',
                type: 'tools',
                items: [
                    { title: 'Python', icon: Code },
                    { title: 'R', icon: BarChart3 },
                    { title: 'Machine Learning', icon: Cpu },
                    { title: 'Deep Learning', icon: Layers },
                    { title: 'NLP', icon: MessageCircle }
                ]
            },
            {
                title: 'Impactos Potenciais na Carreira',
                type: 'list',
                items: [
                    { title: 'Criação de novas funções', description: 'Engenheiro de IA, Cientista de Dados.' },
                    { title: 'Automação de tarefas repetitivas', description: 'Mais tempo para tarefas estratégicas.' },
                    { title: 'Necessidade de requalificação contínua', description: 'Aprendizado constante.' },
                    { title: 'Colaboração Humano-IA', description: 'Trabalho híbrido entre pessoas e máquinas.' }
                ]
            }
        ]
    },
    {
        id: 'collab',
        title: 'Colaboração e Trabalho em Equipe',
        shortDescription: 'Capacidade de trabalhar eficazmente com outros para objetivos comuns.',
        fullDefinition: 'A colaboração é a capacidade de trabalhar de forma eficaz com outros para alcançar objetivos comuns, compartilhando ideias, responsabilidades e recursos em um ambiente de confiança mútua.',
        icon: Users,
        color: 'bg-indigo-700',
        sections: [
            {
                title: 'Importância no Ambiente de Trabalho',
                type: 'list',
                items: [
                    { title: 'Resolve problemas complexos', description: 'De forma mais eficiente.' },
                    { title: 'Fomenta a inovação', description: 'Através de diversas perspectivas.' },
                    { title: 'Melhora a adaptabilidade', description: 'Diante de mudanças.' },
                    { title: 'Aumenta o engajamento', description: 'Satisfação da equipe.' }
                ]
            },
            {
                title: 'Estratégias para uma Colaboração Eficaz',
                type: 'cards',
                items: [
                    { title: 'Comunicação Aberta', description: 'Incentive o diálogo transparente e a escuta ativa.', icon: MessageCircle },
                    { title: 'Ferramentas Digitais', description: 'Utilize plataformas de gestão e comunicação colaborativa.', icon: Monitor },
                    { title: 'Definição de Papéis', description: 'Esclareça responsabilidades e expectativas desde o início.', icon: UserCheck },
                    { title: 'Feedbacks Construtivos', description: 'Implemente uma cultura de feedback contínuo e respeitoso.', icon: CheckCircle2 }
                ]
            },
            {
                title: 'Como Desenvolver',
                type: 'process',
                items: [
                    { title: 'Participe de Projetos', description: 'Interdepartamentais' },
                    { title: 'Busque Mentorias', description: 'Em Liderança' },
                    { title: 'Faça Cursos', description: 'Comunicação Interpessoal' },
                    { title: 'Pratique a Empatia', description: 'E a Escuta Ativa' }
                ]
            }
        ]
    },
    {
        id: 'data',
        title: 'Análise de Dados',
        shortDescription: 'Inspeção e modelagem de dados para apoiar decisões.',
        fullDefinition: 'Análise de Dados é o processo de inspeção, limpeza, transformação e modelagem de dados com o objetivo de descobrir informações úteis, informar conclusões e apoiar a tomada de decisões.',
        icon: BarChart3,
        color: 'bg-cyan-700',
        sections: [
            {
                title: 'Tipos de Análise',
                type: 'cards',
                items: [
                    { title: 'Descritiva', description: 'O que aconteceu?', icon: Search },
                    { title: 'Diagnóstica', description: 'Por que aconteceu?', icon: TooltipIcon },
                    { title: 'Preditiva', description: 'O que pode acontecer?', icon: TrendingUp },
                    { title: 'Prescritiva', description: 'O que fazer?', icon: Target }
                ]
            },
            {
                title: 'Ferramentas Essenciais',
                type: 'tools',
                items: [
                    { title: 'Excel', icon: Layout },
                    { title: 'Python', icon: Code },
                    { title: 'R', icon: BarChart3 },
                    { title: 'SQL', icon: Database },
                    { title: 'Power BI', icon: BarChart3 },
                    { title: 'Tableau', icon: Monitor }
                ]
            },
            {
                title: 'Papel na Tomada de Decisões',
                type: 'steps',
                items: [
                    { title: 'Coleta de Dados' },
                    { title: 'Análise e Modelagem' },
                    { title: 'Insights Acionáveis' },
                    { title: 'Decisão Estratégica' }
                ]
            }
        ]
    },
    {
        id: 'proactivity',
        title: 'Proatividade',
        shortDescription: 'Antecipar necessidades e agir para influenciar resultados.',
        fullDefinition: 'A capacidade de antecipar necessidades, assumir responsabilidade e agir para influenciar positivamente os resultados futuros, em vez de apenas reagir aos eventos.',
        icon: Rocket,
        color: 'bg-orange-600',
        sections: [
            {
                title: 'Características de Indivíduos Proativos',
                type: 'list',
                items: [
                    { title: 'Iniciativa e Auto-motivação' },
                    { title: 'Foco na Solução, não no Problema' },
                    { title: 'Pensamento Estratégico e Planejamento' },
                    { title: 'Resiliência e Adaptabilidade' }
                ]
            },
            {
                title: 'Benefícios da Proatividade',
                type: 'list',
                items: [
                    { title: 'Maior Eficiência e Produtividade' },
                    { title: 'Desenvolvimento de Carreira Acelerado' },
                    { title: 'Melhor Tomada de Decisão' },
                    { title: 'Fortalecimento de Liderança e Confiança' }
                ]
            },
            {
                title: 'Dicas para Desenvolver',
                type: 'steps',
                items: [
                    { title: 'Antecipe Desafios e Planeje Soluções' },
                    { title: 'Assuma a Responsabilidade e Tome a Frente' },
                    { title: 'Busque Feedback e Aprenda Continuamente' },
                    { title: 'Desenvolva uma Mentalidade de Crescimento' }
                ]
            }
        ]
    },
    {
        id: 'automation',
        title: 'Automação de Processos',
        shortDescription: 'Uso de tecnologia para executar tarefas repetitivas.',
        fullDefinition: 'A Automação de Processos refere-se ao uso de tecnologia para executar tarefas e fluxos de trabalho repetitivos com intervenção humana mínima. O objetivo é aumentar a eficiência, reduzir erros e liberar profissionais para atividades estratégicas.',
        icon: Settings,
        color: 'bg-slate-700',
        sections: [
            {
                title: 'Exemplos de Automação em Negócios',
                type: 'cards',
                items: [
                    { title: 'Integração de Sistemas', description: 'Conexão automática entre plataformas CRM e ERP.', icon: Share2 },
                    { title: 'Processamento de Dados', description: 'Utilização de RPA para extrair e validar dados.', icon: Database },
                    { title: 'Atendimento ao Cliente', description: 'Chatbots e assistentes virtuais para triagem.', icon: MessageCircle }
                ]
            },
            {
                title: 'Benefícios',
                type: 'list',
                items: [
                    { title: 'Redução Significativa de Custos Operacionais' },
                    { title: 'Melhoria da Precisão e Qualidade dos Resultados' },
                    { title: 'Maior Capacidade de Foco em Inovação' },
                    { title: 'Aumento da Velocidade e Eficiência' }
                ]
            },
            {
                title: 'Ferramentas Comuns',
                type: 'tools',
                items: [
                    { title: 'UiPath', icon: Cpu },
                    { title: 'Automation Anywhere', icon: Settings },
                    { title: 'Power Automate', icon: Zap },
                    { title: 'Zapier', icon: Share2 },
                    { title: 'Blue Prism', icon: Layers }
                ]
            }
        ]
    },
    {
        id: 'time',
        title: 'Gestão de Tempo',
        shortDescription: 'Planejamento consciente do controle sobre o tempo gasto.',
        fullDefinition: 'Gestão de Tempo é o processo de planejamento e execução consciente do controle sobre a quantidade de tempo gasta em atividades específicas, especialmente para aumentar a eficácia, eficiência e produtividade.',
        icon: Clock,
        color: 'bg-emerald-600',
        sections: [
            {
                title: 'Técnicas Comuns',
                type: 'cards',
                items: [
                    { title: 'Técnica Pomodoro', description: 'Trabalhe em intervalos de 25 min com pausas.', icon: Clock },
                    { title: 'Matriz de Eisenhower', description: 'Priorize tarefas com base na urgência e importância.', icon: Layout },
                    { title: 'Time Blocking', description: 'Aloque blocos de tempo específicos no calendário.', icon: Calendar }
                ]
            },
            {
                title: 'Ferramentas de Suporte',
                type: 'tools',
                items: [
                    { title: 'Trello', icon: Layout },
                    { title: 'Notion', icon: BookOpen },
                    { title: 'Google Calendar', icon: Calendar }
                ]
            },
            {
                title: 'Impacto na Produtividade',
                type: 'list',
                items: [
                    { title: 'Aumento da Eficiência' },
                    { title: 'Melhor Equilíbrio Vida-Trabalho' },
                    { title: 'Redução do Estresse e Ansiedade' }
                ]
            }
        ]
    },
    {
        id: 'leadership',
        title: 'Liderança e Influência',
        shortDescription: 'Inspirar e guiar indivíduos e equipes em direção a objetivos.',
        fullDefinition: 'A capacidade de inspirar e guiar indivíduos e equipes em direção a objetivos compartilhados, alinhando esforços e adaptando-se proativamente a um ambiente em constante mudança.',
        icon: Target,
        color: 'bg-teal-600',
        sections: [
            {
                title: 'Estilos de Liderança Chave',
                type: 'cards',
                items: [
                    { title: 'Liderança Transformacional', description: 'Inspire a equipe a superar expectativas.', icon: Zap },
                    { title: 'Liderança Servidora', description: 'Priorize o bem-estar e crescimento da equipe.', icon: Heart },
                    { title: 'Liderança Adaptativa', description: 'Navegue por incertezas promovendo aprendizado.', icon: Globe }
                ]
            },
            {
                title: 'Estratégias para Influenciar',
                type: 'list',
                items: [
                    { title: 'Comunicação Persuasiva', description: 'Articule sua visão com clareza e paixão.' },
                    { title: 'Construção de Confiança', description: 'Demonstre integridade e empatia genuína.' },
                    { title: 'Escuta Ativa & Empatia', description: 'Entenda perspectivas alheias.' },
                    { title: 'Colaboração Estratégica', description: 'Crie alianças e promova cooperação.' }
                ]
            },
            {
                title: 'Como Desenvolver',
                type: 'process',
                items: [
                    { title: 'Autoconsciência' },
                    { title: 'Buscar Mentoria' },
                    { title: 'Praticar Feedback' },
                    { title: 'Liderar Projetos' }
                ]
            }
        ]
    },
    {
        id: 'emotional',
        title: 'Inteligência Emocional',
        shortDescription: 'Reconhecer e gerenciar as próprias emoções e as dos outros.',
        fullDefinition: 'A capacidade de reconhecer, entender e gerenciar as próprias emoções, bem como as emoções dos outros, para guiar pensamentos e ações de forma eficaz.',
        icon: Smile,
        color: 'bg-pink-600',
        sections: [
            {
                title: 'Componentes Chave',
                type: 'cards',
                items: [
                    { title: 'Autoconhecimento', description: 'Entender seus pontos fortes e fraquezas.', icon: UserCheck },
                    { title: 'Autogestão', description: 'Regular suas emoções e impulsos.', icon: Shield },
                    { title: 'Empatia', description: 'Compreender os sentimentos dos outros.', icon: Heart },
                    { title: 'Habilidades Sociais', description: 'Construir relacionamentos saudáveis.', icon: MessageCircle }
                ]
            },
            {
                title: 'Importância Profissional e Pessoal',
                type: 'list',
                items: [
                    { title: 'Liderança Eficaz' },
                    { title: 'Resolução de Conflitos' },
                    { title: 'Relacionamentos Fortes' },
                    { title: 'Bem-Estar Mental' }
                ]
            },
            {
                title: 'Como Aprimorar',
                type: 'process',
                items: [
                    { title: 'Pratique Mindfulness' },
                    { title: 'Busque Feedback' },
                    { title: 'Observe Reações' },
                    { title: 'Escuta Ativa' },
                    { title: 'Amplie Vocabulário' }
                ]
            }
        ]
    },
    {
        id: 'creativity',
        title: 'Criatividade e Inovação',
        shortDescription: 'Gerar novas ideias e implementá-las com sucesso.',
        fullDefinition: 'Criatividade é a capacidade de gerar novas ideias, enquanto Inovação é a implementação bem-sucedida dessas ideias para criar valor. Juntas, elas são o motor do progresso em um mercado em constante mudança.',
        icon: Lightbulb,
        color: 'bg-yellow-600',
        sections: [
            {
                title: 'Técnicas para Fomentar',
                type: 'cards',
                items: [
                    { title: 'Brainstorming', description: 'Geração livre de ideias em grupo.', icon: Lightbulb },
                    { title: 'Design Thinking', description: 'Abordagem centrada no ser humano.', icon: Puzzle },
                    { title: 'Mapas Mentais', description: 'Visualização e conexão de conceitos.', icon: Share2 }
                ]
            },
            {
                title: 'Exemplos de Inovação',
                type: 'list',
                items: [
                    { title: 'Inteligência Artificial Generativa', description: 'Na criação de conteúdo.' },
                    { title: 'Economia Circular', description: 'Para eliminar resíduos.' },
                    { title: 'Plataformas de Trabalho Remoto', description: 'Colaboração global.' },
                    { title: 'Serviços por Assinatura', description: 'Novos modelos de negócios.' }
                ]
            },
            {
                title: 'Valor no Mercado',
                type: 'text',
                content: 'Em um mundo volátil, a capacidade de se adaptar e criar soluções originais é o diferencial competitivo definitivo. Profissionais criativos não apenas resolvem problemas, mas antecipam desafios futuros.'
            }
        ]
    },
    {
        id: 'critical',
        title: 'Pensamento Crítico',
        shortDescription: 'Analisar informações objetivamente para solucionar problemas.',
        fullDefinition: 'A capacidade de analisar informações objetivamente, questionar suposições e formular soluções eficazes para desafios complexos, integrando lógica, criatividade e julgamento fundamentado.',
        icon: Puzzle,
        color: 'bg-rose-700',
        sections: [
            {
                title: 'Etapas do Pensamento Crítico',
                type: 'process',
                items: [
                    { title: 'Identificar o Problema' },
                    { title: 'Analisar Informações' },
                    { title: 'Avaliar Opções' },
                    { title: 'Concluir e Agir' }
                ]
            },
            {
                title: 'Metodologias',
                type: 'cards',
                items: [
                    { title: 'Causa Raiz', description: 'Root Cause Analysis para achar a origem.', icon: Search },
                    { title: '5 Porquês', description: 'Técnica iterativa para aprofundar a causa.', icon: MessageCircle }
                ]
            },
            {
                title: 'Benefícios',
                type: 'list',
                items: [
                    { title: 'Tomada de Decisão Informada' },
                    { title: 'Inovação e Criatividade' },
                    { title: 'Adaptabilidade e Resiliência' },
                    { title: 'Melhoria Contínua' }
                ]
            }
        ]
    }
];
