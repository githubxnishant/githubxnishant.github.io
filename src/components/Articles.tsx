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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#94A3b8" className="transition-all duration-300 hover:fill-[#E2E8F0]" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                    </svg>
                </span>
            </motion.h1>
            <motion.div className="px-5 md:mr-20 py-3 rounded transition-all duration-300 hover:bg-[#1e293b] md:flex justify-center items-start mb-3 md:border-0 border"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}>
                <div className="md:w-1/3 my-2 h-full md:flex justify-center items-center flex-col">
                    <img className='rounded' src="/src/assets/blog2.jpg" />
                </div>
                <div className="md:w-2/3 md:px-5 md:py-3">
                    <p className="text-[#94A3B8] text-sm mb-1">Few Days Ago...</p>
                    <p className="text-[#E2E8F0] flex justify-between items-center">Redux - Beginner's Guide
                        <a href="https://redux.hashnode.dev/redux-what-why-how-when-and-where-to-use-it" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </p>
                    <p className="text-[#94A3B8] font-semibold text-sm mb-3">Web Development</p>
                    <p className="text-sm text-[#94A3B8]">Managing state in large applications can be challenging, but Redux simplifies it by providing a centralized store for predictable state management. If you're building a scalable React app, understanding Redux can be a game-changer!</p>
                    <div className="flex mt-3 text-sm">
                        <p className="bg-emerald-400/10 text-emerald-300 px-3 py-1 rounded-3xl mr-3">state management</p>
                    </div>
                </div>
            </motion.div>
            <motion.div className="px-5 py-3 md:mr-20 rounded transition-all duration-300 hover:bg-[#1e293b] md:flex justify-center items-start mb-16 border md:border-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}>
                <div className="md:w-1/3 my-2 h-full md:flex justify-center items-center flex-col">
                    <img className='rounded' src="/src/assets/blog1.jpg" />
                </div>
                <div className="md:w-2/3 md:px-5 md:py-3">
                    <p className="text-[#94A3B8] text-sm mb-1">Few Days Ago...</p>
                    <p className="text-[#E2E8F0] flex justify-between items-center">Interpolation vs Binary Search 
                        <a href="https://binary-vs-interpolation-search.hashnode.dev/binary-search-vs-interpolation-search" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </p>
                    <p className="text-[#94A3B8] font-semibold text-sm mb-3">Data Structures and Algorithms</p>
                    <p className="text-sm text-[#94A3B8]"> Binary Search and Interpolation Search are two efficient algorithms, but they work differently. Choosing the right method depends on how the data is structured and the level of efficiency needed.</p>
                    <div className="flex justify-start items-center flex-wrap mt-3 text-sm overflow-ellipsis gap-2">
                        <p className="bg-emerald-400/10 text-emerald-300 px-3 py-1 rounded-3xl mr-1">searching techniques</p>
                    </div>
                </div>
            </motion.div>
        </>
    )
});

export default Articles