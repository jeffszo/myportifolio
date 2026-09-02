import {
  Code2,
  Database,
  FolderCode,
  Layout,
  Server,
  Smartphone,
} from 'lucide-react';

export type Language = 'pt' | 'en';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

export interface FlowStep {
  label: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  result: string;
  image: string;
  tech: string[];
  link: string;
  featured?: boolean;
}

export interface NavContent {
  about: string;
  skills: string;
  projects: string;
  contact: string;
}

export interface HomeContent {
  badgeAvailable: string;
  badgeRole: string;
  role: string;
  hero: string;
  talk: string;
  viewProjects: string;
  stackFlowTitle: string;
  stackFlowSteps: FlowStep[];

  about: string;
  who: string;
  aboutText: string[];

  services: string;
  servicesSubtitle: string;
  servicesList: Service[];

  skills: string;
  skillsSubtitle: string;
  skillCategories: SkillCategory[];

  projects: string;
  projectsSubtitle: string;
  seeProject: string;
  featuredTag: string;

  contact: string;
  contactText: string;

  projectsList: Project[];
}

export interface SiteContent {
  nav: NavContent;
  home: HomeContent;
  footer: { rights: string };
}

const iconClass = 'h-8 w-8 text-teal-400 mb-4';
const badgeIconClass = 'h-[18px] w-[18px]';

export const content: Record<Language, SiteContent> = {
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
    },
    home: {
      badgeAvailable: 'Disponível para novos projetos',
      badgeRole: 'Software Engineer @ FARM RIO',
      role: 'Software Engineer',
      hero: 'Desenvolvo produtos web de ponta a ponta: interfaces modernas em React e Next.js integradas a APIs, bancos de dados e autenticação — com foco em performance, escalabilidade e experiência do usuário.',
      talk: 'Vamos conversar',
      viewProjects: 'Ver projetos',

      stackFlowTitle: 'Como eu entrego um produto',
      stackFlowSteps: [
        {
          label: 'Front-end',
          description: 'React · Next.js · TypeScript · Tailwind',
          icon: <Code2 strokeWidth={1.5} className={badgeIconClass} />,
        },
        {
          label: 'Back-end',
          description: 'Node.js · Java · APIs REST · Auth',
          icon: <Server strokeWidth={1.5} className={badgeIconClass} />,
        },
        {
          label: 'Dados',
          description: 'Supabase · PostgreSQL · RLS',
          icon: <Database strokeWidth={1.5} className={badgeIconClass} />,
        },
      ],

      about: 'Sobre',
      who: 'Quem sou',
      aboutText: [
        'Olá, meu nome é Jeferson Ferreira de Souza. Sou formado em Análise e Desenvolvimento de Sistemas e atuo como desenvolvedor full stack.',
        'Construo interfaces com React, Next.js, TypeScript e Tailwind CSS, e cuido também da camada de back-end com Node.js, Java, APIs REST e Supabase — autenticação, banco de dados, storage e políticas de RLS.',
        'Também tenho experiência com mobile usando React Native.',
      ],

      services: 'Serviços',
      servicesSubtitle: 'Como posso ajudar seu projeto',
      servicesList: [
        {
          title: 'Aplicações Full Stack',
          description:
            'Do front-end ao banco de dados: interfaces em React/Next.js integradas a APIs e back-end em Node.js e Supabase.',
          icon: <Code2 strokeWidth={1} className={iconClass} />,
        },
        {
          title: 'APIs & Back-end',
          description:
            'Modelagem de banco de dados, autenticação e APIs REST com Node.js, Java e Supabase.',
          icon: <Server strokeWidth={1} className={iconClass} />,
        },
        {
          title: 'Landing Pages',
          description: 'Páginas modernas, rápidas e focadas em conversão.',
          icon: <Layout strokeWidth={1} className={iconClass} />,
        },
        {
          title: 'Apps Mobile',
          description: 'Aplicativos com React Native para Android e iOS.',
          icon: <Smartphone strokeWidth={1} className={iconClass} />,
        },
      ],

      skills: 'Habilidades',
      skillsSubtitle: 'Tecnologias, ferramentas e serviços',
      skillCategories: [
        {
          title: 'Front-end',
          icon: <FolderCode strokeWidth={1} className={iconClass} />,
          items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
        },
        {
          title: 'Back-end',
          icon: <Server strokeWidth={1} className={iconClass} />,
          items: ['Node.js', 'Java', 'APIs REST', 'Supabase', 'RLS'],
        },
        {
          title: 'Mobile',
          icon: <Smartphone strokeWidth={1} className={iconClass} />,
          items: ['React Native'],
        },
      ],

      projects: 'Projetos',
      projectsSubtitle: 'Projetos selecionados que mostram minha experiência prática',
      seeProject: 'Ver projeto',
      featuredTag: 'FULL STACK · PROJETO EM DESTAQUE',

      contact: 'Contato',
      contactText: 'Tem um projeto em mente? Vamos conversar sobre como posso ajudar, do front-end ao back-end.',

      projectsList: [
        {
          title: 'Portal de Cadastro de Clientes',
          description:
            'Portal corporativo para onboarding e cadastro de clientes com fluxo de aprovação entre múltiplos departamentos.',
          result:
            'Sistema com validação entre os times de Wholesale, Credit, Tax e CSC. Modelei a autenticação e as políticas de acesso (RLS) no Supabase para que cada time visualizasse apenas os dados sob sua responsabilidade.',
          image: '/projects/farm.png',
          tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Styled Components'],
          link: 'https://customer.farmrio.com/',
          featured: true,
        },
        {
          title: 'SoftFlow',
          description:
            'Website institucional moderno para fortalecer a presença online de uma empresa de tecnologia.',
          result: 'Design limpo, responsivo e com navegação objetiva.',
          image: '/projects/softflow.png',
          tech: ['React', 'Styled Components'],
          link: 'https://softflow.vercel.app/',
        },
        {
          title: 'New Era',
          description: 'Landing Page para uma agência de tecnologia.',
          result: 'Estrutura criada para conversão e comunicação clara da oferta.',
          image: '/projects/new.png',
          tech: ['React', 'Next.js', 'Tailwind CSS'],
          link: 'https://new-era-chi.vercel.app/',
        },
        {
          title: 'Apenas um Show',
          description:
            'Criado para apresentar personagens, identidade visual e conteúdos nostálgicos da animação, feito para um fã',
          result: 'Foco em interface criativa, layout responsivo e experiência visual imersiva.',
          image: '/projects/regular.png',
          tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
          link: 'https://regularshow.vercel.app/',
        },
      ],
    },
  },

  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    home: {
      badgeAvailable: 'Available for new projects',
      badgeRole: 'Software Engineer @ FARM RIO',
      role: 'Software Engineer',
      hero: 'I build web products end to end: modern interfaces in React and Next.js wired up to APIs, databases and authentication — with a focus on performance, scalability and user experience.',
      talk: "Let's talk",
      viewProjects: 'View projects',

      stackFlowTitle: 'How I ship a product',
      stackFlowSteps: [
        {
          label: 'Front-end',
          description: 'React · Next.js · TypeScript · Tailwind',
          icon: <Code2 strokeWidth={1.5} className={badgeIconClass} />,
        },
        {
          label: 'Back-end',
          description: 'Node.js · Java · REST APIs · Auth',
          icon: <Server strokeWidth={1.5} className={badgeIconClass} />,
        },
        {
          label: 'Data',
          description: 'Supabase · PostgreSQL · RLS',
          icon: <Database strokeWidth={1.5} className={badgeIconClass} />,
        },
      ],

      about: 'About',
      who: 'Who I am',
      aboutText: [
        'Hello, my name is Jeferson Ferreira de Souza. I have a degree in Systems Analysis and Development and work as a full stack developer.',
        'I build interfaces with React, Next.js, TypeScript and Tailwind CSS, and also own the back-end layer with Node.js, Java, REST APIs and Supabase — authentication, database, storage and RLS policies.',
        'I also have experience with mobile development using React Native.',
      ],

      services: 'Services',
      servicesSubtitle: 'How I can help your project',
      servicesList: [
        {
          title: 'Full Stack Applications',
          description:
            'From the front-end to the database: React/Next.js interfaces wired up to APIs and a Node.js/Supabase back-end.',
          icon: <Code2 strokeWidth={1} className={iconClass} />,
        },
        {
          title: 'APIs & Back-end',
          description: 'Database modeling, authentication and REST APIs with Node.js, Java and Supabase.',
          icon: <Server strokeWidth={1} className={iconClass} />,
        },
        {
          title: 'Landing Pages',
          description: 'Modern, fast and conversion-focused pages.',
          icon: <Layout strokeWidth={1} className={iconClass} />,
        },
        {
          title: 'Mobile Apps',
          description: 'React Native apps for Android and iOS.',
          icon: <Smartphone strokeWidth={1} className={iconClass} />,
        },
      ],

      skills: 'Skills',
      skillsSubtitle: 'Technologies, tools and services',
      skillCategories: [
        {
          title: 'Front-end',
          icon: <FolderCode strokeWidth={1} className={iconClass} />,
          items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
        },
        {
          title: 'Back-end',
          icon: <Server strokeWidth={1} className={iconClass} />,
          items: ['Node.js', 'Java', 'REST APIs', 'Supabase', 'RLS'],
        },
        {
          title: 'Mobile',
          icon: <Smartphone strokeWidth={1} className={iconClass} />,
          items: ['React Native'],
        },
      ],

      projects: 'Projects',
      projectsSubtitle: 'Selected projects that show my hands-on experience',
      seeProject: 'View project',
      featuredTag: 'FULL STACK · FEATURED PROJECT',

      contact: 'Contact',
      contactText: "Have a project in mind? Let's talk about how I can help, from front-end to back-end.",

      projectsList: [
        {
          title: 'Customer Onboarding Portal',
          description:
            'Corporate portal for customer onboarding and registration with a multi-step approval workflow between departments.',
          result:
            'Validation flow between Wholesale, Credit, Tax and CSC teams. I modeled authentication and access policies (RLS) in Supabase so each team only sees the data it owns.',
          image: '/projects/farm.png',
          tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Styled Components'],
          link: 'https://customer.farmrio.com/',
          featured: true,
        },
        {
          title: 'SoftFlow',
          description: 'Modern institutional website to strengthen a technology company online presence.',
          result: 'Clean, responsive design with objective navigation.',
          image: '/projects/softflow.png',
          tech: ['React', 'Styled Components'],
          link: 'https://softflow.vercel.app/',
        },
        {
          title: 'New Era',
          description: 'Landing Page for a technology agency.',
          result: 'Structure created for conversion and clear communication of the offer.',
          image: '/projects/new.png',
          tech: ['React', 'Next.js', 'Tailwind CSS'],
          link: 'https://new-era-chi.vercel.app/',
        },
        {
          title: 'Regular Show',
          description:
            'Fan-made website inspired by Cartoon Network’s Regular Show, created to showcase characters, visual identity and nostalgic content.',
          result:
            'Focused on creative UI, responsive layout and a playful visual experience for fans.',
          image: '/projects/regular.png',
          tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
          link: 'https://regularshow.vercel.app/',
        },
      ],
    },
  },
};
