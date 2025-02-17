import { motion } from "framer-motion";
import { forwardRef } from "react";

interface SectionProps {
    title: string;
}

const Articles = forwardRef<HTMLDivElement, SectionProps>(({ title }, ref) => {
    return (
        <>
            <motion.h1 ref={ref} id='experience' className="text-2xl font-semibold mb-3 flex justify-between"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }}   
            transition={{ duration: 0.8 }}>{title}
                <span className="text-lg underline flex justify-center items-center cursor-pointer md:mr-20 text-[#94A3B8] hover:text-[#E2E8F0] transition-all duration-300 ">All Blogs
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#94A3b8" className="transition-all duration-300 hover:fill-[#E2E8F0]"  viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                </span>
            </motion.h1>
            <motion.div className="px-5 md:mr-20 py-3 rounded transition-all duration-300 hover:bg-[#1e293b] md:flex justify-center items-start mb-3 md:border-0 border"
            initial={{ opacity: 0, x: 50 }}  
            animate={{ opacity: 1, x: 0 }}   
            transition={{ duration: 0.8 }}>
                <div className="md:w-1/3 h-auto md:flex justify-center items-start">
                    <p className="text-[#94A3B8] text-sm mt-3">From - To</p>
                </div>
                <div className="md:w-2/3 md:px-5 md:py-3">
                    <p className="text-[#E2E8F0]">Lorem, ipsum dolor.</p>
                    <p className="text-[#94A3B8] font-semibold text-sm mb-3">Lorem, ipsum.</p>
                    <p className="text-sm text-[#94A3B8]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, natus.</p>
                    <div className="flex mt-3 text-sm">
                        <p className="bg-emerald-400/10 text-emerald-300 px-5 py-1 rounded-3xl mr-3">Lorem</p>
                        <p className="bg-emerald-400/10 text-emerald-300 px-5 py-1 rounded-3xl mr-3">ipsum</p>
                    </div>
                </div>
            </motion.div>
            <motion.div className="px-5 py-3 md:mr-20 rounded transition-all duration-300 hover:bg-[#1e293b] md:flex justify-center items-start mb-16 border md:border-0"
            initial={{ opacity: 0, x: 50 }}  
            animate={{ opacity: 1, x: 0 }}   
            transition={{ duration: 0.8 }}>
                <div className="md:w-1/3 h-auto md:flex justify-center items-start">
                    <p className="text-[#94A3B8] text-sm mt-3">From - To</p>
                </div>
                <div className="md:w-2/3 md:px-5 md:py-3">
                    <p className="text-[#E2E8F0]">Lorem, ipsum dolor.</p>
                    <p className="text-[#94A3B8] font-semibold text-sm mb-3">Lorem, ipsum.</p>
                    <p className="text-sm text-[#94A3B8]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, natus.</p>
                    <div className="flex justify-start items-center flex-wrap mt-3 text-sm overflow-ellipsis gap-2">
                        <p className="bg-emerald-400/10 text-emerald-300 px-5 py-1 rounded-3xl mr-1">Lorem</p>
                        <p className="bg-emerald-400/10 text-emerald-300 px-5 py-1 rounded-3xl mr-1">ipsum</p>
                        <p className="bg-emerald-400/10 text-emerald-300 px-5 py-1 rounded-3xl mr-1">dolor</p>
                        {/* <p className="bg-emerald-400/10 text-emerald-300 px-5 py-1 rounded-3xl mr-1">sit</p> */}
                    </div>
                </div>
            </motion.div>
        </>
    )
});

export default Articles