import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import host from "../api";

const UserHome = ({token, user, setUser}) => {

    useEffect(() => {
        fetch(host + "/profile", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "token": token,
            },
          }).then((data) => data.json()).then((data) => {setUser(data)})
            .catch((err) => console.log(err));
    }
    , [token]);


    return(
        <div>
            <div className='flex justify-between px-[230px] my-[80px] w-[full]'>
                <div>
                    <h1 className='font-[600] text-[20px] p-2'>BALANCE</h1>
                    <p className='font-[700] text-[80px]'>&#2547; {user.balance} BDT</p>
                </div>
                <div className='flex flex-col'>
                    <div className='flex mb-[40px]'>
                        {/* Add Money */}
                        <Link to='/add'>
                            <div className='mr-10 sm:mt-0'>
                                <div
                                    className='flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-300'>
                                        <h3 className='text-primaryColor font-[500] text-[17px] group-hover:text-white'>Add Money <i class="ri-map-pin-add-line"></i></h3>
                                </div>
                            </div>
                        </Link>
                        {/* send Money */}
                        <Link to='/send'>
                            <div className='ml-10 sm:mt-0'>
                                <div
                                    className='flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-300'>
                                        <h3 className='text-primaryColor font-[500] text-[17px] group-hover:text-white'>Send Money <i class="ri-send-plane-line"></i></h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='flex'>
                        {/* Cashout */}
                        <div className='mr-10 sm:mt-0'>
                            <div
                                className='flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-300'>
                                    <h3 className='text-primaryColor font-[500] text-[17px] group-hover:text-white'>Cashout <i class="ri-logout-circle-r-line"></i></h3>
                            </div>
                        </div>
                        {/* Payment */}
                        {user.type !== 'agent' && (<div className='ml-10 sm:mt-0'>
                            <div
                                className='flex justify-center items-center bg-[#e8deff] w-[200px] h-[80px] rounded-[25px] shadow group hover:bg-primaryColor cursor-pointer ease-in duration-300'>
                                    <h3 className='text-primaryColor font-[500] text-[17px] group-hover:text-white'>Payment <i class="ri-secure-payment-line"></i></h3>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className='flex justify-between px-[230px] bg-smallTextColor h-[518px] w-full'>
                <h1 className='font-[600] text-[20px] text-white pt-10'>RECENT</h1>
                <div></div>
            </div>
        </div>

    )
};

export default UserHome;
