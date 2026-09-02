import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

export default function Main() {
  return (
    <div className="min-h-screen text-gray-200">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
