import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Typewriter = ({ texts, speed = 100, delay = 1500 }: { texts: string[]; speed?: number; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (isDeleting) {
            if (displayedText.length > 0) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
            }, speed / 2);
            return () => clearTimeout(timeout);
            } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
            }
        } else {
            if (index < texts[textIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + texts[textIndex][index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
            } else {
            setTimeout(() => {
                setIsDeleting(true);
                setIndex(0);
            }, delay);
            }
        }
    }, [index, displayedText, isDeleting, textIndex, texts, speed, delay]);
    
    return (
        <div className="rounded-lg pl-12 text-[#94A3B8]">
        <span>I build {displayedText}</span>
        <motion.span
            className="ml-1 w-[2px] h-5 inline-block align-middle bg-[#94A3B8]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <br />
    </div>
    );
};

interface NavbarProps {
    scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
    aboutRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    articlesRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<NavbarProps> = ({ scrollToSection, aboutRef, experienceRef, projectsRef, articlesRef }) => {
    return (
        <>
            <div className="w-screen h-screen px-16 py-20 md:w-[45%] md:h-full md:px-35 md:py-15">
                <div className="h-full">
                    <motion.div 
                    className="h-[30%]"
                    initial={{ opacity: 1, y: -50 }}  
                    animate={{ opacity: 1, y: 0 }}   
                    transition={{ duration: 0.6 }}>
                        <h2 className="font-bold text-5xl tracking-tight text-[#E2E8F0]">Nishant Chauhan</h2>
                        <h3 
                        className="font-medium text-xl md:my-3 my-5 text-[#E2E8F0]">Software Engineer</h3>
                        <div 
                        className="text-[#94A3B8] md:mt-8">
                            <h4>&lt;<span className="text-[#E2E8F0]">code</span>&gt;</h4>
                            <Typewriter
                                texts={["modern, high-performance web apps.", "scalable digital products.", "cross-platform compatible websites."]}
                                speed={100}
                                delay={1500}
                            />
                            <h4 className="text-[#94A3B8]"> &lt;/<span className="text-[#E2E8F0]">code</span>&gt;</h4>
                        </div>
                    </motion.div>
                    <motion.div 
                    className="md:h-[40%] h-[35%] mt-28 text-sm flex flex-col md:justify-start items-start gap-3 justify-center"
                    initial={{ opacity: 1, x: -50 }}  
                    animate={{ opacity: 1, x: 0 }}   
                    transition={{ duration: 0.6 }}>
                        <button onClick={() => scrollToSection(aboutRef)} className="text-[#94A3B8] transition-all duration-300 font-bold hover:text-[#E2E8F0]">ABOUT</button>
                        <button onClick={() => scrollToSection(experienceRef)} className="text-[#94A3B8] transition-all duration-300 font-bold hover:text-[#E2E8F0]">EXPERIENCE</button>
                        <button onClick={() => scrollToSection(projectsRef)} className="text-[#94A3B8] transition-all duration-300 font-bold hover:text-[#E2E8F0]">PROJECTS</button>
                        <button onClick={() => scrollToSection(articlesRef)} className="text-[#94A3B8] transition-all duration-300 font-bold hover:text-[#E2E8F0]">ARTICLES</button>
                    </motion.div>
                    <motion.div 
                    className="h-[10%] flex md:px-5 gap-5 items-end justify-center"
                    initial={{ opacity: 1, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 0.6 }}>
                        <a target="_blank" className="cursor-pointer" href="https://github.com/githubxnishant">
                            <svg width="40" height="40" className="text-text-secondary hover:text-text-primary cursor-pointer transition-all duration-300 hover:fill-[#E2E8F0]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#94A3B8" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/nishantxchauhan/">
                            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#94A3B8" className="text-text-secondary hover:text-text-primary transition-all duration-300 hover:fill-[#E2E8F0]" aria-hidden="true">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                            </svg>
                        </a>
                        {/* <a target="_blank" href="https://leetcode.com/u/nishantchauhan_/">
                            <svg width="35" height="35" className="text-text-secondary hover:text-text-primary transition-all duration-300 hover:fill-[#E2E8F0]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#94A3B8" viewBox="0 0 24 24">
                                <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z">
                                </path>
                                <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path>
                            </svg>
                        </a>
                        <a target="_blank" href="">
                            <svg fill="#94A3B8" width="35" height="35" className="text-text-secondary hover:text-text-primary transition-all duration-300 hover:fill-[#E2E8F0]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m22.351 8.019-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"></path>
                            </svg>
                        </a> */}
                        <a target="_blank" href="https://x.com/chauhanishant_">
                            <svg width="33" height="33" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="#94A3B8" className="text-text-secondary hover:text-text-primary transition-all duration-300 hover:fill-[#E2E8F0]" aria-hidden="true">
                                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Hero;
