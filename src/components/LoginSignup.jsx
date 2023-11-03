import React, { useState } from 'react';

const LoginSignup = () => {
  const [action, setAction] = useState('Sign Up');

  return (
    <div className='container flex flex-col mt-[100px] mb-[50px] bg-primaryColor w-[600px] rounded-[30px]'>
      <div className='flex flex-col items-center w-full mt-[30px]'>
        <h1 className='text-white font-700 text-[48px]'>{action}</h1>
        <div className='mt-[30px] w-[70px] h-[6px] bg-white rounded-[10px]'></div>
      </div>
      <div className='mt-[45px] flex flex-col gap-[25px]'>
        {action==='Login'?<div></div>:<div className='flex items-center m-auto w-[480px] h-[80px] bg-white rounded-[20px] p-7 focus:outline-none'>
          <i className='ri-user-line'></i>
          <input className='h-[50px] w-[400px] bg-transparent text-[19px] focus:outline-none pl-[20px]' type='text' placeholder='Name' />
        </div>}
        <div className='flex items-center m-auto w-[480px] h-[80px] bg-white rounded-[20px] p-7 focus:outline-none'>
          <i className='ri-mail-line'></i>
          <input className='h-[50px] w-full bg-transparent text-[19px] focus:outline-none pl-[20px]' type='email' placeholder='Email' />
        </div>
        <div className='flex items-center m-auto w-[480px] h-[80px] bg-white rounded-[20px] p-7 focus:outline-none'>
          <i className='ri-lock-line'></i>
          <input className='h-[50px] w-[400px] bg-transparent text-[19px] focus:outline-none pl-[20px]' type='password' placeholder='Password' />
        </div>
      </div>
      {action==='Sign Up'?<div></div>:<div className='pl-[62px] mt-[27px] text-gray-400 text-[18px]'>
        Lost Password? <span className='text-white cursor-pointer'>Click Here!</span>
      </div>}
      <div className='flex gap-[30px] my-[50px] mx-auto'>
        <div
          className={`flex justify-center items-center w-[220px] h-[59px] text-[19px] font-[700] cursor-pointer rounded-full ${
            action === 'Sign Up' ? 'bg-[#eaeaea] text-[#4c00b4]' : 'bg-[#3c009d] text-white'
          }`}
          onClick={() => setAction('Sign Up')}
        >
          Sign Up
        </div>
        <div
          className={`flex justify-center items-center w-[220px] h-[59px] text-[19px] font-[700] cursor-pointer rounded-full ${
            action === 'Login' ? 'bg-[#eaeaea] text-[#4c00b4]' : 'bg-[#3c009d] text-white'
          }`}
          onClick={() => setAction('Login')}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
