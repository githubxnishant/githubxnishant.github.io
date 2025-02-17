import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import React, { useRef } from "react";


const App: React.FC = () => {

  const aboutRef = useRef<HTMLDivElement>(null!);
  const experienceRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const articlesRef = useRef<HTMLDivElement>(null!);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen h-screen md:flex md:justify-center">
      <Hero 
        scrollToSection={scrollToSection} 
        aboutRef={aboutRef} 
        experienceRef={experienceRef} 
        projectsRef={projectsRef} 
        articlesRef={articlesRef} 
      />
      <div className="md:w-[55%] bg-[#0f172a] md:pt-25 md:pr-25 px-10 overflow-auto .scrollbar-hide sm:w-screen">
        <About ref={aboutRef} title="About Me"/>
        <Experience ref={experienceRef} title="Experience" />
        <Projects ref={projectsRef} title="Projects" />
        <Articles ref={articlesRef} title="Articles"/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
