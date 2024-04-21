import React, { } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { GiSkills } from "react-icons/gi";

import './About.css'
const About = () => {
    const html = 95;
    const css = 85;
    const javascript = 50;
    const react = 80;
    const next = 70;
    const other = 40;
    const socketOi = 40;
    const node = 60;
    const express = 70;
    const mongoose = 80; 
    const mongodb = 90;
    const other_backend = 30;
    return (
        <div data-aos="fade-down" className='bg-[#051b34] h-[100%] text-white px-4 md:px-20'>
            <h1 className='text-5xl uppercase font-bold text-center py-10'><span className='text-yellow-500'>about</span> us</h1>
            <div className='md:flex gap-10'>
                <div className='md:w-7/12 '>
                    <h1 className='text-2xl font-bold uppercase'>personal information</h1>
                    <div className='md:flex justify-between items-center text-lg font-medium text-slate-200 mt-10'>
                        <div>
                            <ul className='flex flex-col gap-5'>
                                <li>
                                    <span>Name : </span>
                                    <span className='text-slate-300 font-bold'>Mosiur </span>
                                </li>
                                <li>
                                    <span>Age : </span>
                                    <span className='text-slate-300 font-bold'>21 Year</span>
                                </li>
                                <li>
                                    <span>Phone : </span>
                                    <span className='text-slate-300 font-bold'>01751499625</span>
                                </li>
                                <li>
                                    <span>Address : </span>
                                    <span className='text-slate-300 font-bold'>Rnagpur,Bangladesh</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex flex-col gap-5 mt-4 md:mt-0'>
                                <li>
                                    <span>Last Name : </span>
                                    <span className='text-slate-300 font-bold'>Islam</span>
                                </li>
                                <li>
                                    <span>Nationality : </span>
                                    <span className='text-slate-300 font-bold'>Bangladesh</span>
                                </li>
                                <li>
                                    <span>Email Me : </span>
                                    <span className='text-slate-300 font-bold'>mosiurislam2003@gmail.com</span>
                                </li>
                                <li>
                                    <span>Langage : </span>
                                    <span className='text-slate-300 font-bold'>Bangla,English</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='md:w-5/12 mt-10 md:mt-0'>
                    <div className='flex flex-col gap-5'>
                        <div className='p-10 bg-slate-800 md:w-[52%] mx-auto rounded-3xl'>
                            <div className='flex justify-center items-center gap-3'>
                                <div>
                                    <h1 className='text-5xl font-bold text-yellow-500 mb-3'>20+</h1>
                                    <div class="w-16 h-1 bg-white float-left"></div>
                                </div>
                                <p className='text-xl font-medium '>COMPLETED <br />
                                    PROJECTS</p>
                            </div>
                        </div>
                        <div className='p-10 bg-slate-800 md:w-[52%] mx-auto rounded-3xl'>
                            <div className='flex justify-center items-center gap-3'>
                                <div>
                                    <h1 className='text-5xl font-bold text-yellow-500 mb-3'>02+ </h1>
                                    <div class="w-16 h-1 bg-white float-left"></div>
                                </div>
                                <p className='text-xl font-medium '>YEAR <br />
                                EXPERIENCE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-20'>
                <h1 className='text-3xl uppercase font-bold text-center py-10'>MY  Front-end <span className='text-yellow-500'>skill</span></h1>
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
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>JavaScript</h1>
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
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>react js</h1>
                    </div>
                    <div className='w-48 mx-auto'>
                        <CircularProgressbar
                            value={next}
                            text={`${next}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathColor: `${next / 100})`,
                                textColor: '#fff',
                                trailColor: '#333538',
                            })}
                        />
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>Next js</h1>
                    </div>
                    <div className='w-48 mx-auto'>
                        <CircularProgressbar
                            value={other}
                            text={`${other}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathColor: `${other / 100})`,
                                textColor: '#fff',
                                trailColor: '#333538',
                            })}
                        />
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>other</h1>
                    </div>
                </div>
            </div>
            <div className='pb-20'>
                <h1 className='text-3xl uppercase font-bold text-center py-10'>MY  Back-END <span className='text-yellow-500'>skill</span></h1>
                <div className='grid  md:grid-cols-3 gap-16 p-8 bg-slate-900 rounded-3xl'>
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
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>Node Js</h1>
                    </div>
                    <div className='w-48 mx-auto'>
                        <CircularProgressbar
                            value={express}
                            text={`${express}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathColor: `${express / 100})`,
                                textColor: '#fff',
                                trailColor: '#333538',
                            })}
                        />
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>Expess js</h1>
                    </div>
                    <div className='w-48 mx-auto'>
                        <CircularProgressbar
                            value={mongoose}
                            text={`${mongoose}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathColor: `${mongoose / 100})`,
                                textColor: '#fff',
                                trailColor: '#333538',
                            })}
                        />
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>mongoose </h1>
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
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>MONGODB</h1>
                    </div>
                    <div className='w-48 mx-auto'>
                        <CircularProgressbar
                            value={socketOi}
                            text={`${socketOi}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathColor: `${socketOi / 100})`,
                                textColor: '#fff',
                                trailColor: '#333538',
                            })}
                        />
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>socket io</h1>
                    </div>
                    <div className='w-48 mx-auto'>
                        <CircularProgressbar
                            value={other_backend}
                            text={`${other_backend}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathColor: `${other_backend / 100})`,
                                textColor: '#fff',
                                trailColor: '#333538',
                            })}
                        />
                        <h1 className='text-center pt-5 text-xl font-medium uppercase'>OTHER</h1>
                    </div>
                </div>
            </div>
            <div className='pb-20'>
                <h1 className='text-3xl uppercase font-bold text-center py-16'>MY  Work <span className='text-yellow-500'>EXPERIENCE</span></h1>
                <div className='md:flex justify-center items-center gap-5 px-8'>
                    <div className='flex-1'>
                        <div className='flex'>
                            <div >
                                <GiSkills className='w-10 h-10 ml-[-17px] mb-2 bg-yellow-500 p-2 rounded-full' />
                                <div class="w-1 h-full md:h-32 bg-white float-left"></div>
                            </div>
                            <div className='mt-10'>
                                <div className='text-sm w-20 bg-slate-500 p-2 rounded-3xl '>
                                    2023  Start
                                </div>
                                <h1 className='text-2xl text-slate-300 font-bold'>Full-stack Developer</h1>
                                <p>Full-stack Developer at Sparrowan Limited (Mar 2023 - Present): Contributing remotely, I've been involved in full-stack development projects, enhancing my skills in digital media and other areas.</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 my-10 md:mt-0'>
                        <div className='flex'>
                            <div >
                                <GiSkills className='w-10 h-10 ml-[-17px] mb-2 bg-yellow-500 p-2 rounded-full' />
                                <div class="w-1 h-full md:h-32 bg-white float-left"></div>
                            </div>
                            <div className='mt-10'>
                                <div className='text-sm w-20 bg-slate-500 p-2 rounded-3xl '>
                                2023  Start
                                </div>
                                <h1 className='text-2xl text-slate-300 font-bold'>Frontend Developer</h1>
                                <p>Frontend Developer at Diligent Soft It (Feb 2023 - Aug 2023): During this two-month role in Dhaka, Bangladesh, I focused on frontend development tasks.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:flex justify-center items-center gap-5 px-8'>
                <div className='flex-1 mt-10 md:mt-0'>
                        <div className='flex'>
                            <div >
                                <GiSkills className='w-10 h-10 ml-[-17px] mb-2 bg-yellow-500 p-2 rounded-full' />
                                <div class="w-1 h-full md:h-32 bg-white float-left"></div>
                            </div>
                            <div className='mt-10'>
                                <div className='text-sm w-20 bg-slate-500 p-2 rounded-3xl '>
                                2022  Start
                                </div>
                                <h1 className='text-2xl text-slate-300 font-bold'>Frontend Developer </h1>
                                <p>Frontend Developer at bangladeshisoftware.com (May 2022 - Nov 2022): During this three-month full-time position in Dinājpur, Rajshahi, Bangladesh, I concentrated on frontend development tasks, contributing to the company's projects.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex'>
                            <div >
                                <GiSkills className='w-10 h-10 ml-[-17px] mb-2 bg-yellow-500 p-2 rounded-full' />
                                <div class="w-1 h-full md:h-32 bg-white float-left"></div>
                            </div>
                            <div className='mt-10'>
                                <div className='text-sm w-20 bg-slate-500 p-2 rounded-3xl '>
                                    2022  Start
                                </div>
                                <h1 className='text-2xl text-slate-300 font-bold'>MERN Stack Developer</h1>
                                <p>MERN Stack Developer Internship at NonAcademy (Jun 2022 - Dec 2022): In this seven-month internship conducted remotely from Dhaka, Bangladesh, I gained experience in MERN stack development, including Tailwind CSS and Node.js.</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default About;
