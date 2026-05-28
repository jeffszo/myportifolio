'use client';

import {
  FolderCode,
  Mail,
  Linkedin,
  Github,
  Map,
  ExternalLink,
  Database,
  Layout,
  Smartphone,
  Code2
} from 'lucide-react';

import { Fade } from "react-awesome-reveal";
import { useLanguage } from '../context/LanguageContext';

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function Main() {
  const { language } = useLanguage();

  const t = {
    pt: {
role: 'Frontend Developer | React • Next.js • TypeScript • Supabase',
hero: 'Desenvolvo aplicações web modernas, dashboards e sistemas escaláveis com foco em performance, responsividade e experiência do usuário.',

talk: 'Vamos trabalhar juntos',

      about: 'Sobre',
      who: 'Quem sou',
      aboutText:
        'Olá, meu nome é Jeferson Ferreira de Souza. Sou formado em Análise e Desenvolvimento de Sistemas e atuo com desenvolvimento front-end, criando interfaces modernas com React, Next.js, TypeScript e Tailwind CSS. Também tenho experiência com mobile usando React Native.',

      services: 'Serviços',
      servicesSubtitle: 'Como posso ajudar seu projeto',
      servicesList: [
        {
          title: 'Landing Pages',
          description: 'Páginas modernas, rápidas e focadas em conversão.',
          icon: <Layout strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
        },
        {
          title: 'Aplicações Web',
          description: 'Dashboards, sistemas internos e interfaces responsivas.',
          icon: <Code2 strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
        },
        {
          title: 'Apps Mobile',
          description: 'Aplicativos com React Native para Android e iOS.',
          icon: <Smartphone strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
        },
      ],

      skills: 'Habilidades',
      skillsSubtitle: 'Tecnologias, ferramentas e serviços',
      frontend: 'Front-end',
      mobile: 'Mobile',
      data: 'Análise de dados',

      projects: 'Projetos',
      projectsSubtitle: 'Projetos selecionados que mostram minha experiência prática',
      seeProject: 'Ver projeto',

      contact: 'Contato',
      contactText: 'Tem um projeto em mente? Vamos conversar.',

      timeline: [
        {
          date: '2022',
          title: 'Início da jornada',
          description: 'Comecei a aprender HTML, CSS e JavaScript e iniciei ADS',
        },
        {
          date: '2023',
          title: 'Estágio - Mitikas',
          description: 'Responsável pela recriação de app estudantil',
        },
        {
          date: '2024-2026',
          title: 'Desenvolvedor front-end na FARM RIO',
          description: 'Atuando como desenvolvedor front-end',
        },
      ],

      projectsList: [
        {
          title: 'Portal de Cadastro de Clientes',
          description:
            'Portal corporativo para onboarding e cadastro de clientes com fluxo de aprovação entre múltiplos departamentos.',
          result:
            'Sistema com validação entre os times de Wholesale, Credit, Tax e CSC, melhorando organização e acompanhamento do processo.',
          image: '/projects/farm.png',
          tech: [
            'Next.js',
            'React',
            'Typescript',
            'Supabase',
            'Styled Components'
          ],
          link: 'https://customer.farmrio.com/'
        },
        {
          title: 'SoftFlow',
          description:
            'Website institucional moderno para fortalecer a presença online de uma empresa de tecnologia.',
          result:
            'Design limpo, responsivo e com navegação objetiva.',
          image: '/projects/softflow.png',
          tech: ['React', 'Styled Components'],
          link: 'https://softflow.vercel.app/'
        },
        {
          title: 'New Era',
          description:
            'Landing Page para uma agência de tecnologia.',
          result:
            'Estrutura criada para conversão e comunicação clara da oferta.',
          image: '/projects/new.png',
          tech: ['React', 'Next.js', 'Tailwind CSS'],
          link: 'https://new-era-chi.vercel.app/'
        },
{
  title: 'Apenas um Show',
  description:
    'Criado para apresentar personagens, identidade visual e conteúdos nostálgicos da animação, feito para um fã',
  result:
    'Foco em interface criativa, layout responsivo e experiência visual imersiva.',
  image: '/projects/regular.png',
  tech: ['React', 'Next.js', 'Tailwind CSS', 'Typescript'],
  link: 'https://regularshow.vercel.app/'
},
      ]
    },

    en: {
role: 'Frontend Developer | React • Next.js • TypeScript • Supabase',

hero: 'I build modern web applications, dashboards and scalable systems focused on performance, responsiveness and user experience.',

talk: "Let's work together",

      about: 'About',
      who: 'Who I am',
      aboutText:
        'Hello, my name is Jeferson Ferreira de Souza. I have a degree in Systems Analysis and Development and work as a front-end developer, building modern interfaces with React, Next.js, TypeScript and Tailwind CSS. I also have experience with mobile development using React Native.',

      services: 'Services',
      servicesSubtitle: 'How I can help your project',
      servicesList: [
        {
          title: 'Landing Pages',
          description: 'Modern, fast and conversion-focused pages.',
          icon: <Layout strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
        },
        {
          title: 'Web Applications',
          description: 'Dashboards, internal systems and responsive interfaces.',
          icon: <Code2 strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
        },
        {
          title: 'Mobile Apps',
          description: 'React Native apps for Android and iOS.',
          icon: <Smartphone strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
        },
      ],

      skills: 'Skills',
      skillsSubtitle: 'Technologies, tools and services',
      frontend: 'Front-end',
      mobile: 'Mobile',
      data: 'Data Analysis',

      projects: 'Projects',
      projectsSubtitle: 'Selected projects that show my hands-on experience',
      seeProject: 'View project',

      contact: 'Contact',
      contactText: 'Have a project in mind? Let’s talk.',

      timeline: [
        {
          date: '2022',
          title: 'Beginning of the journey',
          description: 'Started learning HTML, CSS and JavaScript and began Systems Analysis degree',
        },
        {
          date: '2023',
          title: 'Internship - Mitikas',
          description: 'Responsible for rebuilding a student app',
        },
        {
          date: '2024-2026',
          title: 'Frontend Developer at FARM RIO',
          description: 'Working as a frontend developer',
        },
      ],

      projectsList: [
        {
          title: 'Customer Onboarding Portal',
          description:
            'Corporate portal for customer onboarding and registration with a multi-step approval workflow between departments.',
          result:
            'Validation flow between Wholesale, Credit, Tax and CSC teams, improving organization and process tracking.',
          image: '/projects/farm.png',
          tech: [
            'Next.js',
            'React',
            'Typescript',
            'Supabase',
            'Styled Components'
          ],
          link: 'https://customer.farmrio.com/'
        },
        {
          title: 'SoftFlow',
          description:
            'Modern institutional website to strengthen a technology company online presence.',
          result:
            'Clean, responsive design with objective navigation.',
          image: '/projects/softflow.png',
          tech: ['React', 'Styled Components'],
          link: 'https://softflow.vercel.app/'
        },
{

title: 'New Era',

description:

'Landing Page for a technology agency.',

result:

'Structure created for conversion and clear communication of the offer.',

image: '/projects/new.png',

tech: ['React', 'Next.js', 'Tailwind CSS'],

link: 'https://new-era-chi.vercel.app/'

},
{
  title: 'Regular Show',
  description:
    'Fan-made website inspired by Cartoon Network’s Regular Show, created to showcase characters, visual identity and nostalgic content.',
  result:
    'Focused on creative UI, responsive layout and a playful visual experience for fans.',
  image: '/projects/regular.png',
  tech: ['React', 'Next.js', 'Tailwind CSS', 'Typescript'],
  link: 'https://regularshow.vercel.app/'
},
      ]
    }
  };

  const text = t[language];

  const timelineEvents: TimelineEvent[] = text.timeline.map((event) => ({
    ...event,
    icon: <Map strokeWidth={1} className="w-8 h-8 text-teal-400" />
  }));

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 transition-colors duration-300">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">

        <section id="sobre" className="mb-16 mt-36 sm:mb-24 lg:mb-32">
          <div className="flex flex-col items-center">
            <Fade cascade damping={0.1} className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center">
              Jeferson Ferreira
            </Fade>

            <Fade cascade damping={0.1} className="text-lg sm:text-xl text-teal-400 text-center mb-6">
              {text.role}
            </Fade>

            <div className="mb-6 text-center w-full sm:w-3/4 lg:w-1/2">
              <p className="text-sm sm:text-base">{text.hero}</p>
            </div>

            <Fade>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded hover:opacity-80 transition-opacity duration-300"
              >
                <Mail strokeWidth={2} className="h-4 w-4" />
                {text.talk}
              </a>
            </Fade>
          </div>
        </section>

        <section id="sobre-detalhado" className="mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-xl mt-32 sm:text-2xl font-semibold mb-1">{text.about}</h2>
          <h3 className="font-normal text-teal-400 mb-8">{text.who}</h3>

          <div className="p-4 sm:p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center rounded-lg border border-gray-800">
            <div className="w-full lg:w-3/12 mb-6 lg:mb-0">
              <p className="text-sm sm:text-base">{text.aboutText}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex flex-col items-center w-full sm:w-40 lg:w-48">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full">
                    {event.icon}
                  </div>

                  <div className="mt-4 text-center">
                    <span className="font-bold">{event.date}</span>
                    <h3 className="font-semibold mt-2">{event.title}</h3>
                    <p className="text-xs sm:text-sm mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" className="mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1">{text.services}</h2>
          <h3 className="font-normal text-teal-400 mb-8">{text.servicesSubtitle}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {text.servicesList.map((service, index) => (
              <div key={index} className="p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-teal-500/50 transition-colors">
                {service.icon}
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="habilidades" className="mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1">{text.skills}</h2>
          <h3 className="font-normal text-teal-400 mb-8">{text.skillsSubtitle}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-4 sm:p-6 rounded-lg border border-gray-800">
              <FolderCode strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{text.frontend}</h3>
              <p className="text-sm sm:text-base">React, Typescript e Next.js</p>
            </div>

            <div className="p-4 sm:p-6 rounded-lg border border-gray-800">
              <FolderCode strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{text.mobile}</h3>
              <p className="text-sm sm:text-base">React Native e Supabase</p>
            </div>

            <div className="p-4 sm:p-6 rounded-lg border border-gray-800">
              <Database strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{text.data}</h3>
              <p className="text-sm sm:text-base">Python, Power BI e SQL Server</p>
            </div>
          </div>
        </section>

        <section id="projetos" className="mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1">{text.projects}</h2>
          <h3 className="font-normal text-teal-400 mb-8">{text.projectsSubtitle}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {text.projectsList.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-gray-800 transition-colors hover:border-teal-500/50 bg-gray-900"
              >
                <div className="h-48 sm:h-56 bg-gray-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base mb-3 text-gray-300">
                    {project.description}
                  </p>

                  <p className="text-xs sm:text-sm mb-4 text-teal-400">
                    {project.result}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs sm:text-sm bg-teal-800 text-teal-100 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-600 text-sm sm:text-base"
                  >
                    {text.seeProject}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold">{text.contact}</h2>

          <div className="p-2 sm:p-8 rounded-lg flex flex-col items-center transition-colors">
            <p className="text-sm sm:text-base mb-4">{text.contactText}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:jefersonferreira27@outlook.com" className="inline-flex items-center text-teal-400 hover:text-teal-600 text-sm sm:text-base">
                <Mail strokeWidth={1} className="mr-2 h-5 w-5" />
                jefersonferreira27@outlook.com
              </a>

              <a href="https://github.com/jeffszo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-400 hover:text-teal-600 text-sm sm:text-base">
                <Github strokeWidth={1} className="mr-2 h-5 w-5" />
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/jefersonf7/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-400 hover:text-teal-600 text-sm sm:text-base">
                <Linkedin strokeWidth={1} className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}