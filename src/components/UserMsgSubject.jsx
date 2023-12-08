import React from 'react'
import host from "../api";
import {useEffect, useState} from 'react'
import Logo from '../assets/profile.png'

const UserMsgSubject = ({token, user, setUser, setSelectedChat}) => {

    const [chats, setChats] = useState([])

    useEffect(() => {
        fetch(host + "/chat", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "token": token,
            },
          }).then((data) => data.json()).then((data) => {setChats(data); console.log(data);})
            .catch((err) => console.log(err));
    }
    , [token]);

  return (
    <div className='flex flex-col'>
        <div className='text-[30px] font-[700] w-full border-b pb-2'>Subjects</div>
        <div>
            {chats.map((chat, i) => (
                <div onClick={() => setSelectedChat(chat.id)} className='flex flex-row gap-4'>
                    <div className='flex items-center gap-6 border-b w-full p-2 cursor-pointer hover:bg-neutral-100'>
                      <div className='w-10 h-10 rounded-full bg-[#F5F5F5] border-b'>
                          <img className='w-full h-full rounded-full' src={Logo} alt='logo' />
                      </div>
                      <div className='flex flex-col'>
                        <div className='text-[16px] text-gray-500 font-[400]'>{'Chat no.' + (i + 1).toString()}</div>
                        <div className='text-[20px] text-smallTextColor font-[600]'>{chat.subject}</div>
                      </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UserMsgSubject