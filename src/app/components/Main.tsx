'use client';

import { FolderCode, Mail, Linkedin, Github, Map, ExternalLink, Database } from 'lucide-react';
import { Fade } from "react-awesome-reveal";

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const timelineEvents: TimelineEvent[] = [
  {
    date: "2022",
    title: "Início da jornada",
    description: "Comecei a aprender HTML, CSS e JavaScript e iniciei ADS",
    icon: <Map strokeWidth={1} className="w-8 h-8 text-teal-400" />
  },
  {
    date: "2023",
    title: "Estágio - Mitikas",
    description: "Responsável pela recriação de app estudantil",
    icon: <Map strokeWidth={1} className="w-8 h-8 text-teal-400" />
  },
  {
    date: "2024",
    title: "Desenvolvedor front-end",
    description: "Atuando como desenvolvedor front-end",
    icon: <Map strokeWidth={1} className="w-8 h-8 text-teal-400" />
  }
];

export default function Main() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 transition-colors duration-300">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <section id="sobre" className="mb-16 mt-36 sm:mb-24 lg:mb-32">
          <div className="flex flex-col items-center">
            <Fade cascade damping={0.1} className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center">Jeferson Ferreira</Fade>
            <Fade cascade damping={0.1} className="text-lg sm:text-xl text-teal-400 text-center mb-6">Desenvolvedor Frontend & ADS</Fade>
         
            <div className="mb-6 text-center w-full sm:w-3/4 lg:w-1/2">
              <p className="text-sm sm:text-base"> Criando experiências digitais intuitivas e visualmente atraentes há mais de 5 anos. Minha paixão está em transformar ideias complexas em interfaces simples e elegantes que encantam os usuários. </p> 
            </div>

            <Fade>
              <a href="#contato" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded hover:opacity-80 transition-opacity duration-300">
                <Mail strokeWidth={2} className="h-4 w-4" /> Vamos conversar
              </a>
            </Fade>
          </div>
        </section>

        <section id="sobre-detalhado" className="mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-xl mt-32 sm:text-2xl font-semibold mb-1">Sobre</h2>
          <h3 className="font-normal text-teal-400 mb-8">Quem sou</h3>
          <div className="p-4 sm:p-6 flex flex-col lg:flex-row justify-between sm:  items-start lg:items-center rounded-lg border border-gray-800">
            <div className="w-full lg:w-3/12 mb-6 lg:mb-0">
              <p className="text-sm sm:text-base">
              Olá, meu nome é Jeferson Ferreira de Souza e sou formado em Análise e desenvolvimento de sistemas. Minha especialização é o desenvolvimento front-end, mas tenho experiência com o mobile utilizando o React Native.
              </p>
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

        <section id="habilidades" className="mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1">Habilidades</h2>
          <h3 className="font-normal text-teal-400 mb-8">Tecnologias, ferramentas e serviços</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-4 sm:p-6 rounded-lg border border-gray-800">
              <FolderCode strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Front-end</h3>
              <p className="text-sm sm:text-base">React, Typescript e Next.js</p>
            </div>
            <div className="p-4 sm:p-6 rounded-lg border border-gray-800">
              <Database strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Análise de dados</h3>
              <p className="text-sm sm:text-base">Python, Power BI e SQL</p>
            </div>
            <div className="p-4 sm:p-6 rounded-lg border border-gray-800">
              <FolderCode strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Back-end</h3>
              <p className="text-sm sm:text-base">Ruby e Ruby On Rails</p>
            </div>
          </div>
        </section>

        <section id="projetos" className="mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1">Projetos</h2>
          <h3 className="font-normal text-teal-400 mb-8">Principais projetos que desenvolvi...</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {[
              {
                title: 'Finance',
                description: 'Registre seus gastos e despesas no website Finance.',
                tech: ['React', 'Next.js', 'Tailwind CSS', 'ShadcnUI', 'Typescript'],
                link: 'https://financeassist.vercel.app/'
              },
              {
                title: 'Emerson Consultoria',
                description: 'Landing page para o atleta e coach Emerson Cena',
                tech: ['React', 'Next.js', 'Tailwind CSS', 'ShadcnUI', 'Typescript'],
                link: '#'
              },
              {
                title: 'App de Gestão de Tarefas',
                description: 'Aplicativo móvel para organização pessoal e produtividade.',
                tech: ['React Native', 'Redux', 'Node.js'],
                link: '#'
              },
              {
                title: 'Redesign de Site Corporativo',
                description: 'Modernização da presença online de uma empresa de tecnologia.',
                tech: ['Figma', 'WordPress', 'SCSS'],
                link: '#'
              },
              {
                title: 'Dashboard Analítico',
                description: 'Interface de usuário para visualização de dados complexos de forma intuitiva.',
                tech: ['Vue.js', 'D3.js', 'Firebase'],
                link: '#'
              },
              {
                title: 'App de Gestão de Tarefas',
                description: 'Aplicativo móvel para organização pessoal e produtividade.',
                tech: ['React Native', 'Redux', 'Node.js'],
                link: '#'
              },
            ].map((project, index) => (
              <div key={index} className="p-4 sm:p-6 rounded-lg border border-gray-800 transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-xs sm:text-sm bg-teal-800 text-teal-100 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-400 hover:text-teal-600 text-sm sm:text-base">
                  Ver projeto <ExternalLink className="ml-2 h-4 w-4" /> 
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Contato</h2>
          <div className="p-4 sm:p-8 rounded-lg flex flex-col items-center transition-colors">
            <p className="text-sm sm:text-base mb-4">Interessado em trabalharmos juntos? Entre em contato!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:jefersonferreira27@outlook.com" className="inline-flex items-center text-teal-400 hover:text-teal-600 text-sm sm:text-base">
                <Mail strokeWidth={1} className="mr-2 h-5 w-5" /> jefersonferreira27@outlook.com
              </a>
              <a href="https://github.com/joaosilva" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-400 hover:text-teal-600 text-sm sm:text-base">
                <Github strokeWidth={1} className="mr-2 h-5 w-5" /> GitHub 
              </a>
              <a href="https://linkedin.com/in/joaosilva" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-400 hover:text-teal-600 text-sm sm:text-base">
                <Linkedin strokeWidth={1} className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}