import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEnvelopeOpen, faFolderOpen, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <div className='sticky top-0 z-20'>
            <div className='relative'>
                <div className='absolute z-20 hidden md:block'>
                    <div className='md:h-[100vh] flex flex-col justify-center items-center gap-8 fixed  right-4 text-white'>
                        <div className="tooltip  tooltip-left" data-tip="Home">
                            <Link className=' justify-center items-center gap-3' to='/'>
                                <FontAwesomeIcon className='w-6 h-6  bg-yellow-500 p-3 rounded-full' icon={faHome} />
                            </Link>
                        </div>
                        <div className="tooltip  tooltip-left" data-tip="About">
                            <Link to='about'><FontAwesomeIcon className='w-6 h-6 bg-yellow-500 p-3 rounded-full' icon={faUser} /></Link>
                        </div>
                        <div className="tooltip  tooltip-left" data-tip="Portfolio">
                            <Link to='portfolio'><FontAwesomeIcon className='w-6 h-6 bg-yellow-500 p-3 rounded-full' icon={faFolderOpen} /></Link>
                        </div>
                        <div className="tooltip  tooltip-left" data-tip="Contact">
                            <Link to='contact'><FontAwesomeIcon className='w-6 h-6 bg-yellow-500 p-3 rounded-full' icon={faEnvelopeOpen} /></Link>
                        </div>
                        <div className="tooltip  tooltip-left" data-tip="Blog">
                            <Link to='blog'><FontAwesomeIcon className='w-6 h-6 bg-yellow-500 p-3 rounded-full' icon={faComment} /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='block md:hidden py-2 bg-[#051b34]'>
                    <div className='flex justify-around items-center text-white'>
                        <div className="tooltip  tooltip-bottom" data-tip="Home">
                            <Link className=' justify-center items-center gap-3' to='/'>
                                <FontAwesomeIcon className='w-6 h-6  bg-yellow-500 p-3 rounded-full' icon={faHome} />
                            </Link>
                        </div>
                        <div className="tooltip  tooltip-bottom" data-tip="About">
                            <Link to='about'><FontAwesomeIcon className='w-6 h-6 bg-yellow-500 p-3 rounded-full' icon={faUser} /></Link>
                        </div>
                        <div className="tooltip  tooltip-bottom" data-tip="Portfolio">
                            <Link to='portfolio'><FontAwesomeIcon className='w-6 h-6 bg-yellow-500 p-3 rounded-full' icon={faFolderOpen} /></Link>
                        </div>
                        <div className="tooltip  tooltip-bottom" data-tip="Contact">
                            <Link to='contact'><FontAwesomeIcon className='w-6 h-6 bg-yellow-500 p-3 rounded-full' icon={faEnvelopeOpen} /></Link>
                        </div>
                        <div className="tooltip  tooltip-bottom" data-tip="Blog">
                            <Link to='blog'><FontAwesomeIcon className='w-6 h-6 bg-yellow-500 p-3 rounded-full' icon={faComment} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;