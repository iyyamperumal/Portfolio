import React from 'react';
import travel from '../assets/images/travelplanner.jpg';
import landing from '../assets/images/landingpage.jpg';
import todo from '../assets/images/todo.jpg';
const Projects = () => {
    return (
        <>
            <div className='projects' id='projects'>
                <p className='text-sky-300 jersey-15-regular underline h1 pl-2 pt-10'>Projects</p>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active justify-items-center">
                            <img src={travel} className="d-block w-4/5 blur-sm" alt="..." />
                            <div className="carousel-caption d-md-block pb-1 sm:pb-0">
                                <p className='text-black lg:text-4xl md:text-3xl text-base bungee-shade-regular'>Travel Planner Application</p>
                                <span className='text-black lg:text-2xl md:text-xl text-base underline flex flex-row justify-evenly'><a href='https://travelwithourapp.netlify.app' target='blank'>View site</a> <a href='https://github.com/iyyamperumal/Travel-FE' target='blank'>Github</a></span>
                            </div>
                        </div>
                        <div className="carousel-item justify-items-center">
                            <img src={landing} className="d-block w-4/5 blur-sm" alt="..." />
                            <div className="carousel-caption d-md-block">
                                <p className='text-black lg:text-4xl md:text-3xl text-base rubik-glitch-regular'>Landing Page</p>
                                <span className='text-black lg:text-2xl md:text-xl text-base underline flex flex-row justify-evenly'><a href='https://componentstask.netlify.app' target='blank'>View site</a> <a href='https://github.com/iyyamperumal/Task13' target='blank'>Github</a></span>
                            </div>
                        </div>
                        <div className="carousel-item justify-items-center">
                            <img src={todo} className="d-block w-4/5 blur-sm" alt="..." />
                            <div className="carousel-caption d-md-block">
                                <p className='text-black lg:text-4xl md:text-3xl text-base rubik-vinyl-regular'>To Do Application</p>
                                <span className='text-black lg:text-2xl md:text-xl text-base underline flex flex-row justify-evenly'><a href='https://lsttodo.netlify.app' target='blank'>View site</a> <a href='https://github.com/iyyamperumal/Task14' target='blank'>Github</a></span>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Projects;
