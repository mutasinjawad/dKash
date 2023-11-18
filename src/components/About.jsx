import React from 'react'
import Laptop from '../assets/laptop.jpg'
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className='pt-0' id='about'>
            <div className='w-full bg-white py-16 px-4'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <img 
                        data-aos='fade-right' 
                        data-aos-duration='1000' 
                        className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                    <div className='flex flex-col justify-center'>
                        <p 
                            data-aos='fade-down' 
                            data-aos-duration='1500'
                            className='text-primaryColor font-bold'>BANKING, ELEVATED FOR YOU</p>
                        <h1 
                            data-aos='fade-left' 
                            data-aos-duration='1200'
                            className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Your Bank Centrally</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div>
                            <Link to="/register">
                                <button className='bg-primaryColor text-white font-[500] items-center my-6 md:mx-0  hover:bg-smallTextColor ease-in duration-200 py-2 pl-4 pr-3 rounded-full'>
                                    Get Started<i class="ri-arrow-right-s-line"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;