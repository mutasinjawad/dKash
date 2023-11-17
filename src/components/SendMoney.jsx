import React, { useState } from 'react';

const SendMoney = () => {
    return(
        <div>
            <div className='flex justify-between px-[300px] my-[80px] w-[full]'>
                <div>
                    <h1 className='font-[600] text-[20px] p-2'>BALANCE</h1>
                    <p className='font-[700] text-[80px]'>&#2547; 0.00 BDT</p>
                </div>
                <div className='flex flex-col pr-[80px]'>
                    <div className='flex flex-col my-[20px]'>
                        <h1 className='font-[700] px-[30px]'>Enter Number</h1>
                        <div className='flex items-center mt-[10px] w-[400px] h-[80px] border-[1px] border-black rounded-[30px] p-7 hover:bg-gray-100 ease-in duration-150'>
                            <i class="ri-phone-line"></i>
                            <input className='h-[50px] w-[400px] text-[19px] bg-transparent focus:outline-none pl-[20px]' type='tel' placeholder='Number' />
                        </div>
                    </div>
                    <div className='flex flex-col my-[20px]'>
                        <h1 className='font-[700] px-[30px]'>Enter Amount</h1>
                        <div className='flex items-center mt-[10px] w-[400px] h-[80px] border-[1px] border-black rounded-[30px] p-7 hover:bg-gray-100 ease-in duration-150'>
                            <i class="ri-wallet-3-line"></i>
                            <input className='h-[50px] w-[400px] text-[19px] bg-transparent focus:outline-none pl-[20px]' type='number' min="0" placeholder='Amount' />
                        </div>
                    </div>
                    <button className='flex justify-center items-center mt-[30px] w-[220px] h-[59px] bg-[#e8deff] text-primaryColor font-[700] cursor-pointer rounded-full hover:bg-primaryColor hover:text-white ease-in duration-150'>Send Money</button>
                </div>
            </div>
            {/* <div className='flex justify-between px-[230px] bg-smallTextColor h-[518px] w-full'>
                <h1 className='font-[600] text-[20px] text-white pt-10'>RECENT</h1>
                <div></div>
            </div> */}
        </div>

    )
};

export default SendMoney;
