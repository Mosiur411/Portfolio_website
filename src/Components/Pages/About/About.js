import React, { } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaAppleAlt } from "react-icons/fa";
import './About.css'
const About = () => {
    const html = 85;
    const css = 65;
    const javascript = 37;
    const react = 53;
    const node = 25;
    const mongodb = 35;
    return (
        <div data-aos="fade-down" className='bg-[#051b34] h-[100%] text-white px-20'>
            <h1 className='text-5xl uppercase font-bold text-center py-10'><span className='text-yellow-500'>about</span> me</h1>
            <div className='flex gap-10'>
                <div className='w-7/12'>
                    <h1 className='text-2xl font-bold '>PERSONAL INFOS</h1>
                    <div className='flex justify-between items-center text-lg font-medium text-slate-200 mt-10'>
                        <div>
                            <ul className='flex flex-col gap-5'>
                                <li>
                                    <span>Fast Names : </span>
                                    <span className='text-slate-400 font-bold'>Mosiur</span>
                                </li>
                                <li>
                                    <span>Age : </span>
                                    <span className='text-slate-400 font-bold'>18 Years</span>
                                </li>
                                <li>
                                    <span>Phone : </span>
                                    <span className='text-slate-400 font-bold'>01318140516</span>
                                </li>
                                <li>
                                    <span>Address : </span>
                                    <span className='text-slate-400 font-bold'>Rnagpur,Bangladesh</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex flex-col gap-5'>
                                <li>
                                    <span>Last Names : </span>
                                    <span className='text-slate-400 font-bold'>Islam</span>
                                </li>
                                <li>
                                    <span>Nationality : </span>
                                    <span className='text-slate-400 font-bold'>Bangladesh</span>
                                </li>
                                <li>
                                    <span>Email Me : </span>
                                    <span className='text-slate-400 font-bold'>mosiurislamwebdesign@gmail.com</span>
                                </li>
                                <li>
                                    <span>Langages : </span>
                                    <span className='text-slate-400 font-bold'>Bangla,English</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-5/12'>
                    <div className='flex flex-col gap-5'>
                        <div className='p-10 bg-slate-800 w-[52%] mx-auto rounded-3xl'>
                            <div className='flex justify-center items-center gap-3'>
                                <div>
                                    <h1 className='text-5xl font-bold text-yellow-500 mb-3'>15+</h1>
                                    <div class="w-16 h-1 bg-white float-left"></div>
                                </div>
                                <p className='text-xl font-medium '>COMPLETED <br />
                                    PROJECTS</p>
                            </div>
                        </div>
                        <div>
                            <div className='p-10 bg-slate-800 w-[52%] mx-auto rounded-3xl'>
                                <div className='flex justify-center items-center gap-3'>
                                    <div>
                                        <h1 className='text-5xl font-bold text-yellow-500 mb-3'>1+</h1>
                                        <div class="w-16 h-1 bg-white float-left"></div>
                                    </div>
                                    <p className='text-xl font-medium '>YEARS  <br />
                                        EXPERIENCE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-20'>
                <h1 className='text-3xl uppercase font-bold text-center py-10'>MY <span className='text-yellow-500'>skill</span></h1>
                <div className='grid  md:grid-cols-3 gap-16 p-8 bg-slate-900 rounded-3xl'>
                    <div className='w-48 mx-auto'>
                        <CircularProgressbar
                            value={html}
                            text={`${html}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathColor: `${html / 100})`,
                                textColor: '#fff',
                                trailColor: '#333538',
                            })}
                        />
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>Html</h1>
                    </div>
                    <div className='w-48 mx-auto'>
                        <CircularProgressbar
                            value={css}
                            text={`${css}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathColor: `${css / 100})`,
                                textColor: '#fff',
                                trailColor: '#333538',
                            })}
                        />
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>css</h1>
                    </div>
                    <div className='w-48 mx-auto'>
                        <CircularProgressbar
                            value={javascript}
                            text={`${javascript}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathColor: `${javascript / 100})`,
                                textColor: '#fff',
                                trailColor: '#333538',
                            })}
                        />
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>java script</h1>
                    </div>
                    <div className='w-48 mx-auto'>
                        <CircularProgressbar
                            value={react}
                            text={`${react}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathColor: `${react / 100})`,
                                textColor: '#fff',
                                trailColor: '#333538',
                            })}
                        />
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>react</h1>
                    </div>
                    <div className='w-48 mx-auto'>
                        <CircularProgressbar
                            value={node}
                            text={`${node}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathColor: `${node / 100})`,
                                textColor: '#fff',
                                trailColor: '#333538',
                            })}
                        />
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>node js</h1>
                    </div>
                    <div className='w-48 mx-auto'>
                        <CircularProgressbar
                            value={mongodb}
                            text={`${mongodb}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathColor: `${mongodb / 100})`,
                                textColor: '#fff',
                                trailColor: '#333538',
                            })}
                        />
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>mongodb</h1>
                    </div>
                </div>
            </div>
            <div className='pb-20'>
                <h1 className='text-3xl uppercase font-bold text-center py-16'>EXPERIENCE <span className='text-yellow-500'>& EDUCATION</span></h1>
                <div className='flex justify-center items-center'>
                    <div className='flex-1'>
                        <div className='flex'>
                            <div >
                                <FaAppleAlt className='w-10 h-10 ml-[-17px] mb-2 bg-yellow-500 p-2 rounded-full' />
                                <div class="w-1 h-32 bg-white float-left"></div>
                            </div>
                            <div className='mt-10'>
                                <div className='text-sm w-20 bg-slate-500 p-2 rounded-3xl '>
                                    2021 Start
                                </div>
                                <h1 className='text-2xl text-slate-400 font-bold'>Front-End Web Developer</h1>
                                <p>I am a Font end development.I Love to do programming related work .
                                    I get things very carefully.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex'>
                            <div >
                                <FaAppleAlt className='w-10 h-10 ml-[-17px] mb-2 bg-yellow-500 p-2 rounded-full' />
                                <div class="w-1 h-32 bg-white float-left"></div>
                            </div>
                            <div className='mt-10'>
                                <div className='text-sm w-20 bg-slate-500 p-2 rounded-3xl '>
                                    2021 End
                                </div>
                                <h1 className='text-2xl text-slate-400 font-bold'>HSC-2019-2021</h1>
                                <p>I am a student and subject science.computer scientists use technology to solve problems and prepare for the future. They also write and program software to create applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;