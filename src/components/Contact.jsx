import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({token, user, setUser}) => {
    const userName = user?.name || '';
    const userEmail = user?.email || ''; 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pbsh42e', 'template_gwdz9br', form.current, 'I40d3DdcurOtLv4Ff')
        .then((result) => {
            console.log('Email sent successfully!');
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id='contact'>
            <div className='container'>
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in Touch</h2>
                <div className='md:flex justify-between items-center'>
                    <div className='w-full my-8 md:mt-0 sm:h-[420px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8 rounded-[30px]'>
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
                                />
                            </div>
                            <button className='w-full p-3 focus:outline-none rounded-full bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>
                                Send Email
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;