import React from 'react'
import { Link } from 'react-router-dom'
import host from '../../api';
import defaultPic from '../../assets/profile.png';
import { useEffect } from 'react';
import { useState } from 'react';

const NewUser = ({ token, user, setUser }) => {
    
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch (host + "/admin/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: token,
            },
        })
        .then((data) => data.json())
        .then((data) => {
            setUsers(data);
            console.log(data)
        })
        .catch((err) => {console.log(err)});
      }, [token]);

  return (
    <div className='bg-white p-4 mt-4 rounded-sm border border-gray-200 w-[20rem]'>
        <strong className='text-primaryColor text-[18px] font-[800]'>New Users</strong>
        <div className='mt-4 flex flex-col gap-3'>
            {users.map((user) => (
                <div className='flex hover:no-underline'>
                    <div className='w-8 h-8 bg-gray-200 rounded-full overflow-hidden'>
                        <img className='w-full h-full object-cover' src={defaultPic}/>
                    </div>
                    <div className='ml-4 flex-1'>
                        <p className='text-[15px] font-[700] text-gray-700'>{user.phone}</p>
                        <p className='text-[13px] font-[500] text-gray-700'>{user.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewUser