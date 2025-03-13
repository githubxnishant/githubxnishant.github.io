import { motion } from "framer-motion";
import { forwardRef } from "react";

interface SectionProps {
  title: string;
}

const About = forwardRef<HTMLDivElement, SectionProps>(({ title }, ref) => {

  const openMail = () => {
    window.location.href = "mailto:mailxnishant@gmail.com?subject=Enquire regarding&body=Hi Nishant! Hope you are having a good day. I want to enquire about...";
  }

  return (
    <>
      <motion.div 
      ref={ref}
      className="mb-3 w-full"
      initial={{ opacity: 0, x: 50 }}  
      animate={{ opacity: 1, x: 0 }}   
      transition={{ duration: 0.8 }}>
        <h1 id='about' className="text-2xl font-semibold mb-3">{title}</h1>
        <p className="leading-8 text-[#94A3B8]">When I was introduced with the Vanilla in high school, I knew technology was my calling. I  explored Python and MySQL while in intermediate school, and transitioned to full-stack development in university. Currently building open-source projects for student community while focusing on <strong>data structures, software engineering fundamentals, and core programming concepts.</strong> Beyond coding, I actively participate in <strong>hackathons, tech events, and community-driven initiatives!</strong></p>
      </motion.div>
      <motion.div 
      className="mt-5"
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }}   
      transition={{ duration: 0.8 }}>
        <h2  className="text-[#E2E8F0] font-medium">Programing Languages</h2>
        <p className="text-[#94A3B8] mt-1 mb-5">Java, Javascript, Python, Typescript</p>
        <h2 className="text-[#E2E8F0] font-medium">Web Technologies</h2>
        <p className="text-[#94A3B8] mt-1 mb-5">HTML5, CSS3, Web Sockets, Redis, PHP, Redux, REST Api, MySQL</p>
        <h2 className="text-[#E2E8F0] font-medium">Frameworks/Library</h2>
        <p className="text-[#94A3B8] mt-1 mb-5">React.js, Node.js, Express.js, Passport.js, Framer-motion</p>
        <h2 className="text-[#E2E8F0] font-medium">Miscellaneous</h2>
        <p className="text-[#94A3B8] mt-1 mb-5">Git, GitHub, MongoDB, Storybook, TailwindCSS, Shadcn UI</p>
      </motion.div>
      <motion.div 
      className="mt-7 md:mb-25 mb-16 flex"
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8 }}>
        <a href="https://linktr.ee/nishant.chauhan" target="_blank"><button className="border border-[#E2E8F0] transition-all duration-300 md:px-8 md:py-3 px-3 py-2 mr-2 md:mr-5 text-[#94A3B8] hover:text-[#E2E8F0] md:mb-0 ">Explore More</button></a>
        <button onClick={openMail} className="border border-[#E2E8F0] md:px-8 px-3 py-2 md:py-3 flex justify-center text-[#94A3B8] hover:text-[#E2E8F0]">Contact Me
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
        </button>
      </motion.div>
    </>
  );
});

export default About;
