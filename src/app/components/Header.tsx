



export default function Header(){


    return(
        <header className=" w-full   bg-gray-900 border-b text-gray-100 border-gray-800 z-10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl ml-10 font-bold text-teal-600">{"</>"}</h1>
            <nav className="flex items-center space-x-6">
                <a href="#sobre" className=" hover:text-teal-400 transition-colors">Sobre</a>
                <a href="#habilidades" className=" hover:text-teal-400 transition-colors">Habilidades</a>
                <a href="#projetos" className=" hover:text-teal-400 transition-colors">Projetos</a>
                <a href="#contato" className=" hover:text-teal-400 transition-colors">Contato</a>
            </nav>
            </div>
      </header>
    )
}