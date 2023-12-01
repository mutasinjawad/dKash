import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({token, user, setUser}) => {
    const userName = user?.name || '';
    const userEmail = user?.email || ''; 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pbsh42e', 'template_gwdz9br', form.current, 'I40d3DdcurOtLv4Ff')
        .then((result) => {
            console.log('Email sent successfully!');
            toast.success('Email Sent Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

        }, (error) => {
            console.log(error.text);

        });
    };

    return (
        <section id='contact'>
            <div className='container'>
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in Touch</h2>
                <div className='md:flex justify-between items-center'>
                    <div className='w-full mt-0 sm:h-[420px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8 rounded-[30px]'>
                        <form className='w-full' ref={form} onSubmit={sendEmail}>
                            <div className='mb-5'>
                                <input 
                                    type="text"
                                    placeholder='Enter your Name'
                                    value={userName}
                                    name='userName'
                                    className='w-full p-3 focus:outline-none rounded-[15px]' 
                                />
                            </div>
                            <div className='mb-5'>
                                <input 
                                    type="email"
                                    placeholder='Enter your Email'
                                    value={userEmail}
                                    name='userEmail'
                                    className='w-full p-3 focus:outline-none rounded-[15px]' 
                                />
                            </div>
                            <div className='mb-5'>
                                <input 
                                    type="text"
                                    placeholder='Subject'
                                    name='subject'
                                    className='w-full p-3 focus:outline-none rounded-[15px]' 
                                />
                            </div>
                            <div className='mb-5'>
                                <textarea 
                                    type="text"
                                    placeholder='Write your message'
                                    name='message'
                                    className='w-full p-3 focus:outline-none rounded-[15px]'
                                    style={{ resize: 'none' }} 
                                />
                            </div>
                            <button className='w-full p-3 focus:outline-none rounded-full bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>
                                Send Email
                            </button>
                            <ToastContainer
                                position="top-center"
                                autoClose={1500}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;