import React from 'react';
import profile from '../assets/images/profile.png'
const About = () => {
    return (
        <>
            <div className='about flex md:flex-row flex-col-reverse' id='about'>
                <div className='lg:w-2/5 md:2/6 w-auto justify-items-center'>
                    <img className='md:h-full h-auto lg:pt-20 md:pt-20 pt-0' src={profile} alt='...' />
                </div>
                <div className='lg:w-3/5 md:w-4/6 sm:w-auto'>
                    <p className='text-sky-300 jersey-15-regular underline h1 pl-2'>About</p>
                    <ul className='text-white cinzel-about lg:text-lg md:text-sm text-sm md:w-3/6 w-auto pl-10 pt-10'>
                        <li><b className='text-yellow-300'>Passionate MERN Developer: </b>I specialize in creating scalable and interactive web applications using <b className='text-red-300'>React.js, Node.js, Express.js and MongoDB.</b></li>
                        <br />
                        <li><b className='text-yellow-300'>Project Highlights: </b>Built a <a className='text-red-300 font-extrabold' href='https://travelwithourapp.netlify.app'>Travel Planner App </a>for trip planning and a <a className='text-red-300 font-extrabold' href='https://lsttodo.netlify.app'>ToDo App,</a> showcasing my ability to solve real-world challenges</li>
                        <br />
                        <li><b className='text-yellow-300'>Development Approach: </b>I focus on writing clean, efficient code and designing responsive, user friendly interfaces that enhance the user experience.</li>
                        <br />
                        <li><b className='text-yellow-300'>Let's Connect: </b>I'm always exploring new technologies and open to collaboration. Reach out via <a className='text-blue-400' href='http://www.linkedin.com/in/iyyam-perumal-s-6b1b30324'>LinkedIn</a> or <a className='text-blue-400' href='https://github.com/iyyamperumal'>GitHub</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default About;
