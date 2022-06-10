import React from 'react';
import { Animate } from 'react-simple-animate';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import manImages from '../../Images/Mosiruislam.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import cv from '../../Images/Mosiur islam Rejume .pdf'
const Home = () => {
    return (
        <div data-aos="fade-down" className='bgColor w-[100%] md:h-[100vh] relative text-white'>
            <div className='p-2 md:p-10 md:flex gap-2 justify-center items-center'>
                <div className='flex-1 mt-10 md:mt-0 '>
                    <div>
                        <Animate
                            play
                            duration={1}
                            delay={1}
                            start={{
                                transform: "translateX(-720px)"
                            }}
                            end={{
                                transform: "translateX(0)"
                            }}
                        >
                            <div>
                                <img className='w-[70%] mx-auto rounded-full shadow-2xl' src={manImages} alt="My profile" />
                            </div>
                        </Animate>
                    </div>
                </div>
                <div data-aos="fade-up" className='flex-1 p-12'>
                    <div className='waviy text-yellow-500 uppercase text-5xl font-bold'>
                        <span className="--i:1">_</span>
                        <span className="--i:1">M</span>
                        <span className="--i:2">O</span>
                        <span className="--i:3">S</span>
                        <span className="--i:4">I</span>
                        <span className="--i:5">U</span>
                        <span className="--i:5">R</span>
                        <span className="--i:6">I</span>
                        <span className="--i:6">S</span>
                        <span className="--i:6">L</span>
                        <span className="--i:6">A</span>
                        <span className="--i:6">M</span>

                    </div>
                    <h1 className='text-2xl font-medium my-5'>Font-End Web Developer</h1>
                    <div>
                        <span style={{ color: 'white', fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Junior MERN Stack Developer ']}
                                loop={5}
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>
                    <div>
                        <h1 className='text-xl '>I'm a Mosiur islam based web designer & front‑end developer <br /> focused on crafting clean & user‑friendly experiences,<br /> I am passionate about building excellent software <br /> that improves the lives of those around me.</h1>
                        <a href={cv} download className='w-[220px] mt-10 hover:bg-yellow-500 flex justify-between items-center border-2 border-yellow-500 rounded-full' alt=''>
                            <span className='pl-3 text-xl'>Download </span>
                            <FontAwesomeIcon className='w-8 h-8 shadow-inner shadow-yellow-500 bg-yellow-500 rounded-full p-2' icon={faArrowDown}>
                            </FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </div>
            <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0d1721" fill-opacity="1" d="M0,64L60,85.3C120,107,240,149,360,192C480,235,600,277,720,250.7C840,224,960,128,1080,85.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </div>
    );
};

export default Home;   