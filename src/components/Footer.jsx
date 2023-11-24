import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = ({ token, user, setUser }) => {

    const year = new Date().getFullYear()

    return (
        <footer className='bg-[#12141e] pt-12'>
            <div className='container'>
                <div className='sm:flex items-center justify-between md:gap-8'>
                    <div className='w-full sm:w-1/2'>
                        <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
                            Do you want to make more money?
                        </h2>
                        <a href={token? '/contact':'#contact'}>
                            <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                <i class='ri-mail-line'></i>Mail Us
                            </button>
                        </a>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda repudiandae autem nam necessitatibus cumque neque?
                        </p>
                        <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
                            <span className='text-gray-300 font-[600] text-[15px]'>Follow Us</span>
                            <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                                <a href="https://www.facebook.com/bkashlimited" className='text-gray-300 font-[500] text-[18px]'>
                                    <i class="ri-facebook-line"></i>
                                </a>
                            </span>
                            <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                                <a href="https://www.youtube.com/@bKashLimited" className='text-gray-300 font-[500] text-[18px]'>
                                    <i class="ri-youtube-line"></i>
                                </a>
                            </span>
                            <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                                <a href="https://www.instagram.com/bkash.ltd/" className='text-gray-300 font-[500] text-[18px]'>
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </span>
                            <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                                <a href="https://www.linkedin.com/company/bkash-limited/" className='text-gray-300 font-[500] text-[18px]'>
                                    <i class="ri-linkedin-line"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <hr class="border-1 border-gray-700 my-6 my-md-2"></hr>
                <div className='pb-2'>
                    <div className='flex items-center justify-center sm:justify-between'>
                        <div className='hidden sm:block'>
                            <img className='w-[100px] mb-4' src={Logo} alt="/" />
                        </div>
                        <div>
                            <p className='text-gray-400 text-[14px]'>&#169; {year} dKash - All right reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;