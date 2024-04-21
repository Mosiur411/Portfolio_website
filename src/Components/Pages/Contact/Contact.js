import React from 'react';
import { faEnvelope, faMapLocation, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaLinkedinIn  , FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
const Contact = () => {
    return (
        <div data-aos="fade-down" className='bg-[#051b34] h-[100%] lg:h-[100vh] text-white '>
            <h1 className=' text-5xl uppercase font-bold text-center py-10 px-2'>Contact <span className='text-yellow-500'>Us</span></h1>
            <div className='px-3 md:px-20 md:flex'>
                <div className='md:w-4/12'>
                    <h1 className='text-2xl font-bold py-2'>FOLLOW ME</h1> 
                    <p className='font-medium '>I'm Mosiur Islam, a Full Stack Developer. Rangpur is my hometown, and it's where my journey in coding began. With a deep-rooted passion for technology, I thrive on creating seamless experiences both on the front-end and back-end. Becoming a Full Stack Developer has been my dream, and I'm dedicated to bringing projects to life, exceeding expectations with every line of code.</p>
                    <div className='font-medium'>
                        <div className='flex  items-center gap-6 mt-6  '>
                            <span><FontAwesomeIcon className='w-4 h-4 bg-yellow-500 p-2 rounded-full' icon={faMapLocation}></FontAwesomeIcon></span>
                            <div>
                                <span className='text-xl  text-gray-250'>Address</span> <br />
                                <span >Rangpur, Bangladesh.</span>
                            </div>
                        </div>
                        <div className='flex  items-center gap-6 mt-6'>
                            <span><FontAwesomeIcon className='w-4 h-4 bg-yellow-500 p-2 rounded-full' icon={faEnvelope}></FontAwesomeIcon></span>
                            <div>
                                <span className='text-xl  text-gray-250'>Email</span> <br />
                                <span >mosiurislam2003@gmail.com</span>
                            </div>
                        </div>
                        <div className='flex  items-center gap-6 my-6'>
                            <span><FontAwesomeIcon className='w-4 h-4 bg-yellow-500 p-2 rounded-full' icon={faPhoneVolume}></FontAwesomeIcon></span>
                            <div>
                                <span className='text-xl  text-gray-250'>Phone Number</span> <br />
                                <span >01751499625</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <a href="https://www.facebook.com/mosiur2003"  target="blank">
                            <FaFacebookF className='bg-yellow-500 w-9 h-9 p-2 rounded-full shadow-2xl shadow-white' />
                        </a>
                        <a href="https://www.linkedin.com/in/mosiur03" target="blank">
                            <FaLinkedinIn className='bg-yellow-500 w-9 h-9 p-2 rounded-full shadow-2xl shadow-white' />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=%2B8801751499625&text=Assalamualikum" target="blank">
                            <BsWhatsapp   className='bg-yellow-500 w-9 h-9 p-2 rounded-full shadow-2xl shadow-white' />
                        </a>
                        <a href="https://github.com/Mosiur411" target="blank">
                            <FaGithub className='bg-yellow-500 w-9 h-9 p-2 rounded-full shadow-2xl shadow-white' />
                        </a>
                    </div>
                </div>
                <div className='md:w-8/12 px-2 md:px-10 mt-10 md:mt-0'>
                    <div>
                        <form action="">
                            <div className='w-full md:flex justify-between items-center gap-8 mb-10'>
                                <input className='bg-[#333538] w-full px-4 py-2 rounded-3xl hover:border-2  outline-none  border-yellow-500' type="text" placeholder='YOUR NAME' required />
                                <input className='bg-[#333538] mt-10 md:mt-0 w-full px-4 py-2 rounded-3xl hover:border-2  outline-none  border-yellow-500' type="text" placeholder='YOUR EMAIL' required />
                            </div>
                            <input className='bg-[#333538] w-full px-4 py-2 rounded-3xl hover:border-2  outline-none  border-yellow-500 mb-10' type="text" placeholder='YOUR SUBJECT' required />
                            <textarea className='bg-[#333538] w-full px-4 py-2 rounded-3xl hover:border-2  outline-none  border-yellow-500 mb-10' name="" id="" cols="30" rows="6" placeholder='YOUR MASSAGE' required></textarea>
                            <button className='w-[220px]  hover:bg-yellow-500 flex justify-between items-center border-2 border-yellow-500 rounded-full' alt=''>
                                <span className='pl-3 text-xl'>Massage Send</span>
                                <FaLocationArrow className='w-12 h-12 shadow-inner shadow-yellow-500 bg-yellow-500 rounded-full p-2' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-full h-20 bg-[#051b34]'>

            </div>

        </div >
    );
};

export default Contact;