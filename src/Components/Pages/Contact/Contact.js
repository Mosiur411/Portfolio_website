import { faEnvelope, faMapLocation, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaLinkedinIn, FaTelegram, FaTwitter, FaGithub } from "react-icons/fa";
import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
const Contact = () => {
    return (
        <div data-aos="fade-down" className='bg-[#051b34] h-[100%] lg:h-[100vh] text-white '>
            <h1 className='text-5xl uppercase font-bold text-center py-10 px-2'>Your <span className='text-yellow-500'>Contact</span></h1>
            <div className='px-3 md:px-20 md:flex'>
                <div className='md:w-4/12'>
                    <h1 className='text-2xl font-bold py-2'>FOLLOW ME</h1>
                    <p>My names is a  Mosiur islam.I am a font end developer.My city Rangpur.I  Like to code .This is a my drem softer enginer 10 puls project </p>
                    <div>
                        <div className='flex  items-center gap-6 mt-6'>
                            <span><FontAwesomeIcon className='w-4 h-4 bg-yellow-500 p-2 rounded-full' icon={faMapLocation}></FontAwesomeIcon></span>
                            <div>
                                <span className='text-xl text-gray-400 font-medium'>Address</span> <br />
                                <span >Rangpur, Bangladesh,</span>
                            </div>
                        </div>
                        <div className='flex  items-center gap-6 mt-6'>
                            <span><FontAwesomeIcon className='w-4 h-4 bg-yellow-500 p-2 rounded-full' icon={faEnvelope}></FontAwesomeIcon></span>
                            <div>
                                <span className='text-xl text-gray-400 font-medium'>Email</span> <br />
                                <span >mosiurislamwebdesign@gmail.com</span>
                            </div>
                        </div>
                        <div className='flex  items-center gap-6 my-6'>
                            <span><FontAwesomeIcon className='w-4 h-4 bg-yellow-500 p-2 rounded-full' icon={faPhoneVolume}></FontAwesomeIcon></span>
                            <div>
                                <span className='text-xl text-gray-400 font-medium'>Phone Number</span> <br />
                                <span >01318140516</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <a href="https://web.facebook.com/mosiur.mtvs">
                            <FaFacebookF className='bg-black  w-9 h-9 p-2 rounded-full shadow-2xl shadow-white' />
                        </a>
                        <a href="https://www.linkedin.com/in/mosiur-islam-340217236/">
                            <FaLinkedinIn className='bg-black w-9 h-9 p-2 rounded-full shadow-2xl shadow-white' />
                        </a>
                        <a href="https://web.whatsapp.com/">
                            <FaTelegram className='bg-black  w-9 h-9 p-2 rounded-full shadow-2xl shadow-white' />
                        </a>
                        <a href="https://twitter.com/i/flow/single_sign_on">
                            <FaTwitter className='bg-black  w-9 h-9 p-2 rounded-full shadow-2xl shadow-white' />
                        </a>
                        <a href="https://github.com/Moisur">
                            <FaGithub className='bg-black  w-9 h-9 p-2 rounded-full shadow-2xl shadow-white' />
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