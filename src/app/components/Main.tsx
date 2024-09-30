'use client'
import { FolderCode , Briefcase, UserRound , Mail, Github, Linkedin, ExternalLink } from 'lucide-react'



export default function Main () {
  return (

    <div className="min-h-screen bg-gray-900  text-gray-200 transition-colors duration-300">
    <main className="container mx-auto px-6 pt-48 pb-12">
        <section id="sobre" className="mb-32  ml-10">
          <div className="flex flex-col items-center"> 
            <h2 className="text-6xl font-bold mb-4">Jeferson Ferreira</h2>
            <p className="text-xl text-teal-400 text-center mb-6">Desenvolvedor Frontend & ADS</p>
            <p className="mb-6 text-center w-1/2">Criando experiências digitais intuitivas e visualmente atraentes há mais de 5 anos. Minha paixão está em transformar ideias complexas em interfaces simples e elegantes que encantam os usuários.</p>
            <a href="#contato" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded hover:opacity-8">
            <Mail strokeWidth={2} className="ml-2 h-4 w-4" /> Vamos conversar 
            </a>
          </div>
        </section>


        <section id="sobre" className="mb-32 ml-10">
          <h2 className="text-2xl font-semibold mb-1">Sobre</h2>
          <h3 className="font-normal text-teal-400 mb-8">Quem sou</h3>
          <div className="p-6 py-px-0 rounded-lg border border-gray-800 w-12/12">
            <p className="w-4/12 ">Olá, meu nome é Jeferson Ferreira de Souza e sou formado em Análise e desenvolvimento de sistemas. Minha especialização é o desenvolvimento front-end, mas tenho experiência com o mobile utilizando o React Native
               
            </p>
          </div>

        </section>

        <section id="habilidades" className="mb-32 ml-10">
          <h2 className="text-2xl font-semibold mb-1">Habilidades</h2>
          <h3 className="font-normal text-teal-400 mb-8">Tecnologias, ferramentas e serviços</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-800">
              <FolderCode  strokeWidth={1} className="h-8 w-8  text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Desenvolvimento Frontend</h3>
              <p>React, Vue.js, TypeScript, Next.js</p>

            </div>
            <div className="p-6 rounded-lg border border-gray-800">
              <Briefcase strokeWidth={1} className="h-8 w-8  text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p>Figma, Adobe XD, Prototyping</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-800">
              <UserRound  strokeWidth={1} className="h-8 w-8  text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
              <p>Comunicação, trabalho em equipe e resolução de problemas</p>
            </div>
          </div>
        </section>

        <section id="projetos" className="mb-32 ml-10">
          <h2 className="text-2xl font-semibold  mb-1">Projetos</h2>
          <h3 className="font-normal text-teal-400 mb-8">Principais projetos que desenvolvi...</h3>

          <div className="grid  md:grid-cols-2 gap-12">
            {[
              {
                title: 'E-commerce Responsivo',
                description: 'Plataforma de comércio eletrônico com design adaptativo e alto desempenho.',
                tech: ['React', 'Next.js', 'Tailwind CSS'],
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
              {
                title: 'Redesign de Site Corporativo',
                description: 'Modernização da presença online de uma empresa de tecnologia.',
                tech: ['Figma', 'WordPress', 'SCSS'],
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
                <a href={project.link} className="inline-flex items-center  text-teal-400 hover:text-teal-600">
                  Ver projeto <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="text-center">
          <h2 className="text-2xl font-semibold mb-2F">Contato</h2>
          <div className="p-8 rounded-lg flex flex-col items-center  transition-colors">
            <p className="">Interessado em trabalharmos juntos? Entre em contato!</p>
            <div className="flex flex-col md:flex-row mt-2 gap-4">
              <a href="mailto:joao@example.com" className="inline-flex items-center  text-teal-400 hover:text-teal-600">
                <Mail strokeWidth={1} className="mr-2 h-5 w-5" /> jefersonferreira27@outlook.com
              </a>
              <a href="https://github.com/joaosilva" target="_blank" rel="noopener noreferrer" className="inline-flex items-center  text-teal-400 hover:text-teal-600">
                <Github strokeWidth={1}  className="mr-2 h-5 w-5" /> GitHub
              </a>
              <a href="https://linkedin.com/in/joaosilva" target="_blank" rel="noopener noreferrer" className="inline-flex items-center  text-teal-400 hover:text-teal-600">
                <Linkedin strokeWidth={1} className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
      </div>
  )
}
    
 