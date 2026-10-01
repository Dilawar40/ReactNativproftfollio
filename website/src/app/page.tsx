import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Process } from "../components/Process";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
    </>
  );
}
