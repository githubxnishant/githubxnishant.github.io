import { forwardRef } from "react";
import { motion } from "framer-motion";

interface SectionProps {
    title: string;
}

const Experience = forwardRef<HTMLDivElement, SectionProps>(({ title }, ref) => {

    return (
        <>
            <motion.h1 
            ref={ref}
            id='experience' 
            className="text-2xl font-semibold mb-3 md:flex md:justify-between items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>{title}
                <button className="border border-[#E2E8F0] transition-all text-sm duration-300 px-5 py-2 mr-20 text-[#94A3B8] hover:text-[#E2E8F0] flex justify-center items-center gap-2 my-3">Resume 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                    </svg>
                </button>
            </motion.h1>
            <motion.div 
            className="md:px-5 px-5 md:mr-20 py-1 rounded transition-all duration-300 hover:bg-[#1e293b] md:flex justify-center items-start mb-3 border md:border-0"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }}  
            transition={{ duration: 0.8 }}>
                <div className="md:w-1/3 h-auto md:flex justify-center items-start">
                    <p className="text-[#94A3B8] text-sm mt-3">NOV 2024 - DEC 2024</p>
                </div>
                <div className="md:w-2/3 md:px-5 py-3">
                <p className="text-[#E2E8F0] flex justify-between items-start mt-1 md:mt-0">GBU Certificate Validation<a target="_blank" className="cursor-pointer" href="">
                            <div className="flex justify-center items-center">
                                <a href="https://github.com/githubxnishant/gbu_cert">
                                    <svg width="30" height="30" className="text-text-secondary hover:text-text-primary cursor-pointer transition-all duration-300 hover:fill-[#E2E8F0] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#94A3B8" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                                {/* <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#94A3B8" className="text-text-secondary hover:text-text-primary cursor-pointer transition-all duration-300 hover:fill-[#E2E8F0]" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.882 1.731a.48.48 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.7.7 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.462-.04 7 7 0 0 1 2.45-2.027m-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.8.8 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282l.04-.001a7.003 7.003 0 0 1-12.658.905Z"/>
                                    </svg>
                                </a> */}
                            </div>
                        </a>
                    </p>
                    <p className="text-[#94A3B8] font-semibold text-sm mb-3">Community Project</p>
                    <p className="text-sm text-[#94A3B8]">Developed a certificate authentication website using PHP for business logic and CSS for styling. The platform allows users to verify certificates by entering a unique ID, or displaying a 'not valid' message.</p>
                    <div className="flex mt-3 text-sm">
                        <p className="bg-emerald-400/10 text-emerald-300 px-3 py-1 rounded-3xl mr-3">PHP</p>
                        <p className="bg-emerald-400/10 text-emerald-300 px-3 py-1 rounded-3xl mr-3">CSS3</p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
            className="md:px-5 px-5 md:mr-20 py-1 rounded transition-all duration-300 hover:bg-[#1e293b] md:flex justify-center items-start md:mb-25 mb-16 border md:border-0"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }}   
            transition={{ duration: 0.8 }}>
                <div className="md:w-1/3 h-auto md:flex justify-center items-start">
                    <p className="text-[#94A3B8] text-sm mt-3">AUG 2024 - PRESENT</p>
                </div>
                <div className="md:w-2/3 md:px-5 py-3">
                    <p className="text-[#E2E8F0]">Google Developer Student Club (GDSC)</p>
                    <p className="text-[#94A3B8] font-semibold text-sm mb-3">Incubation Co-Lead</p>
                    <p className="text-sm text-[#94A3B8]">Co-Lead of the Incubations at GDSC-GBU. Actively involved in organizing events, networking with industry leaders, and creating opportunities for aspiring entrepreneurs.</p>
                    <div className="flex justify-start items-center flex-wrap mt-3 text-sm overflow-ellipsis gap-2">
                        <p className="bg-emerald-400/10 text-emerald-300 px-3 py-1 rounded-3xl mr-1">Entrepreneurship</p>
                        <p className="bg-emerald-400/10 text-emerald-300 px-3 py-1 rounded-3xl mr-1">Pitching</p>
                        <p className="bg-emerald-400/10 text-emerald-300 px-3 py-1 rounded-3xl mr-1">Market research</p>
                        <p className="bg-emerald-400/10 text-emerald-300 px-3 py-1 rounded-3xl mr-1">Public speaking</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
});

export default Experience;
