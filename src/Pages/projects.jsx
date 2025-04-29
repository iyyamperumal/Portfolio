import React from 'react';
import { motion } from 'framer-motion';
import travel from '../assets/images/travelplanner.jpg';
import lsmobiles from '../assets/images/lsmobiles.jpg';
import recipe from '../assets/images/recipebook.jpg';
import ajstock from '../assets/images/ajstocks.jpg';
const Projects = () => {
    return (
        <>
            <div className='projects' id='projects'>
                <p className='text-sky-300 roboto-condensed-head underline h1 pl-2 pt-10'>Projects</p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1.3,
                        ease: "easeOut",
                    }}
                    className="text-[0.8rem] overflow-x-auto md:overflow-x-visible lg:text-lg text-justify content-center lg:text-right lg:w-full lg:h-full lg:pt-10 pt-25 lg:p-0 p-3 w-[100%]"
                ><div className="flex flex-row gap-5 josefin-sans-about justify-center text-opacity-100 lg:w-full w-[200%] lg:h-full md:w-full h-[200%]">
                        <div className="shadow-lg shadow-gray-500 flex flex-col justify-between cursor-pointer hover:shadow-xl border border-white md:text-sm w-[30%] h-[10rem] md:w-[10rem] md:h-[10rem] lg:w-[15rem] lg:h-[15rem] bg-opacity-10 rounded-md p-1 hover:p-3 transition-all duration-200 will-change-transform hover:scale-105"
                        >
                            <img src={travel} className="d-block w-full h-1/2 rounded-md" alt="..." />
                            <p className="text-white text-xl text-opacity-100 text-center">Travel planner Application</p>
                            <span className='text-black lg:text-lg md:text-lg text-base underline flex flex-row justify-evenly'><a href='https://travelwithourapp.netlify.app' target='blank'>View site</a> <a href='https://github.com/iyyamperumal/Travel-FE' target='blank'>Github</a></span>
                        </div>
                        <div className="shadow-lg shadow-gray-500 flex flex-col justify-between cursor-pointer hover:shadow-xl border border-white md:text-sm w-[30%] h-[10rem] md:w-[10rem] md:h-[10rem] lg:w-[15rem] lg:h-[15rem] bg-opacity-10 rounded-md p-1 hover:p-3 transition-all duration-200 will-change-transform hover:scale-105"
                        >
                            <img src={recipe} className="d-block w-full h-1/2 rounded-md" alt="..." />
                            <p className="text-white text-xl text-opacity-100 text-center">Recipe Book</p>
                            <span className='text-black lg:text-lg md:text-lg text-base underline flex flex-row justify-evenly'><a href='https://recipebookip.netlify.app' target='blank'>View site</a> <a href='https://github.com/iyyamperumal/Recepie-Book-FE' target='blank'>Github</a></span>
                        </div>
                        <div className="shadow-lg shadow-gray-500 flex flex-col justify-between cursor-pointer hover:shadow-xl border border-white md:text-sm w-[30%] h-[10rem] md:w-[10rem] md:h-[10rem] lg:w-[15rem] lg:h-[15rem] bg-opacity-10 rounded-md p-1 hover:p-3 transition-all duration-200 will-change-transform hover:scale-105"
                        >
                            <img src={lsmobiles} className="d-block w-full h-1/2 rounded-md" alt="..." />
                            <p className="text-white text-xl text-opacity-100 text-center">L.S. Mahalakshmi Mobiles</p>
                            <span className='text-black lg:text-lg md:text-lg text-base underline flex flex-row justify-evenly'><a href='https://lsmahalakshmimobiles.netlify.app' target='blank'>View site</a></span>
                        </div>
                        <div className="shadow-lg shadow-gray-500 flex flex-col justify-between cursor-pointer hover:shadow-xl border border-white md:text-sm w-[30%] h-[10rem] md:w-[10rem] md:h-[10rem] lg:w-[15rem] lg:h-[15rem] bg-opacity-10 rounded-md p-1 hover:p-3 transition-all duration-200 will-change-transform hover:scale-105"
                        >
                            <img src={ajstock} className="d-block w-full h-1/2 rounded-md" alt="..." />
                            <p className="text-white text-xl text-opacity-100 text-center">Aj Stocks</p>
                            <span className='text-black lg:text-lg md:text-lg text-base underline flex flex-row justify-evenly'><a href='https://ajstock.netlify.app/' target='blank'>View site</a></span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Projects;
