import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import logo from '../assets/letterm.svg'
import { Link } from 'react-scroll'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav) // arrow function

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" id="letter-m"><path fill="#ffffff" fill-rule="evenodd" d="M16 17.5241L16 36C16 37.1046 15.1046 38 14 38C12.8954 38 12 37.1046 12 36L12 12C12 11.158 12.5274 10.4061 13.3191 10.1195C14.1109 9.8328 14.9974 10.0728 15.5364 10.7196L24 20.8759L32.4636 10.7196C33.0026 10.0728 33.8891 9.8328 34.6808 10.1195C35.4726 10.4061 36 11.158 36 12L36 36C36 37.1046 35.1046 38 34 38C32.8954 38 32 37.1046 32 36L32 17.5241L25.5364 25.2804C25.1565 25.7364 24.5936 26 24 26C23.4064 26 22.8435 25.7364 22.4636 25.2804L16 17.5241Z" clip-rule="evenodd"></path></svg>
                {/* <img src={logo} alt="Manan Chhajed" style={{ width: '50px' }} /> */}
            </div>

            {/* menu */}
            <ul className='hidden md:flex text-2xl font-bold'>
                <li>
                    <Link to="home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} offset={50} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='text-2xl md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <ul>
                    <li className='py-4 text-4xl font-bold'>
                        <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='py-4 text-4xl font-bold'>
                        <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='py-4 text-4xl font-bold'>
                        <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className='py-4 text-4xl font-bold'>
                        <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li className='py-4 text-4xl font-bold'>
                        <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[175px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/manan-chhajed/' target="_blank" rel="noreferrer"
                        >
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/Manan-Chhajed' target="_blank" rel="noreferrer"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#51a996]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='mananhemant288@gmail.com'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    )
}
