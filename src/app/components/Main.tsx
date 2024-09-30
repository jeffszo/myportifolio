'use client';
import { FolderCode, Mail, Linkedin, Github, Map ,ExternalLink, Database} from 'lucide-react';

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
]

export default function Main() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 transition-colors duration-300">
      <main className="container mx-auto px-6 pt-48 pb-12">
        <section id="sobre" className="mb-32 ml-10">
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold mb-4">Jeferson Ferreira</h2>
            <p className="text-xl text-teal-400 text-center mb-6">Desenvolvedor Frontend & ADS</p>
            <p className="mb-6 text-center w-1/2">
              Criando experiências digitais intuitivas e visualmente atraentes há mais de 5 anos. Minha paixão está em transformar ideias complexas em interfaces simples e elegantes que encantam os usuários.
            </p>
            <a href="#contato" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded hover:opacity-8">
              <Mail strokeWidth={2} className="ml-2 h-4 w-4" /> Vamos conversar
            </a>
          </div>
        </section>

        <section id="sobre" className="mb-32 ml-10">
          <h2 className="text-2xl font-semibold mb-1">Sobre</h2>
          <h3 className="font-normal text-teal-400 mb-8">Quem sou</h3>
          <div className="p-6 flex justify-between items-center rounded-lg border border-gray-800 w-12/12">
            <p className="w-3/12">
              Olá, meu nome é Jeferson Ferreira de Souza e sou formado em Análise e desenvolvimento de sistemas. Minha <span className="">especialização é o desenvolvimento front-end</span>, mas tenho experiência com o mobile utilizando o React Native.
            </p>
            {timelineEvents.map((event, index) => (
          <div key={index} className="flex flex-col items-center mx-4 w-48">
            <div className="flex items-center justify-center w-12 h-12 rounded-full">
              {event.icon}
            </div>
            {index < timelineEvents.length - 1 && (
              <div className="absolute top-6 w-full h-0.5 bg-primary -z-10"></div>
            )}
            <div className="mt-4 text-center">
              <span className="font-bold">{event.date}</span>
              <h3 className="font-semibold mt-2">{event.title}</h3>
              <p className="text-sm mt-1">{event.description}</p>
            </div>
          </div>
        ))}
          </div>
        </section>

        <section id="habilidades" className="mb-32 ml-10">
          <h2 className="text-2xl font-semibold mb-1">Habilidades</h2>
          <h3 className="font-normal text-teal-400 mb-8">Tecnologias, ferramentas e serviços</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-800">
              <FolderCode strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Front-end</h3>
              <p>React, Typescript e Next.js</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-800">
              <Database strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Análise de dados</h3>
              <p>Python, Power BI e SQL</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-800">
              <FolderCode strokeWidth={1} className="h-8 w-8 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Back-end</h3>
              <p>Ruby e Ruby On Rails</p>
            </div>
          </div>
        </section>

        <section id="projetos" className="mb-32 ml-10">
          <h2 className="text-2xl font-semibold mb-1">Projetos</h2>
          <h3 className="font-normal text-teal-400 mb-8">Principais projetos que desenvolvi...</h3>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Finance',
                description: 'Registre seus gastos e despesas no website Finance.',
                tech: ['React', 'Next.js', 'Tailwind CSS', 'ShadcnUI'],
                link: 'https://financeassist.vercel.app/'
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
              <div key={index} className="p-6 rounded-lg border border-gray-800 transition-colors">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-sm bg-teal-800 text-teal-100 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target={'_blank'} className="inline-flex items-center text-teal-400 hover:text-teal-600">
                  Ver projeto <ExternalLink className="ml-2 h-4 w-4" /> 
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Contato</h2>
          <div className="p-8 rounded-lg flex flex-col items-center transition-colors">
            <p>Interessado em trabalharmos juntos? Entre em contato!</p>
            <div className="flex flex-col md:flex-row mt-2 gap-4">
              <a href="mailto:jefersonferreira27@outlook.com" className="inline-flex items-center text-teal-400 hover:text-teal-600">
                <Mail strokeWidth={1} className="mr-2 h-5 w-5" /> jefersonferreira27@outlook.com
              </a>
              <a href="https://github.com/joaosilva" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-400 hover:text-teal-600">
                <Github strokeWidth={1} className="mr-2 h-5 w-5" /> GitHub 
              </a>
              <a href="https://linkedin.com/in/joaosilva" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-400 hover:text-teal-600">
                <Linkedin strokeWidth={1} className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
