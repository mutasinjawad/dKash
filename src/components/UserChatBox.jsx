import React from 'react'
import UserMsgSubject from './UserMsgSubject'
import UserMessage from './UserMessage'
import UserSendMessage from './UserSendMessage'
import { useEffect } from 'react'
import { useState } from 'react'
import host from "../api";

const UserChatBox = ({token, user, setUser}) => {

  const [selectedChat, setSelectedChat] = useState(-1)

  const Messages = ({chat}) => {
    
    const [messages, setMessages] = useState([])
    useEffect(() => {
      fetch(host + "/chat/" + chat, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": token,
        },
      }).then((data) => data.json()).then((data) => {setMessages(data); console.log(data);})
        .catch((err) => console.log(err));
    }
    , [token]);

    return (
      <>
        {messages.map((message) => (
                <UserMessage key={message.id} message={message} user={user} selectedChat={selectedChat} />
              ))}
      </>
    )
  }

  return (
    <div className='flex justify-center w-full h-screen bg-primaryColor px-36'>
      <div className='flex flex-row gap-4 w-full h-[46rem] my-10'>
        <div className='w-[38rem] bg-white p-4 mt-4 rounded-2xl border border-gray-200 flex flex-col'>
          <UserMsgSubject token={token} user={user} setUser={setUser} setSelectedChat={setSelectedChat} />
        </div>
        <div className='bg-white p-4 mt-4 rounded-2xl border border-gray-200 flex flex-col flex-1'>
          <div className='text-[30px] font-[700] w-full border-b pb-2'>Messages</div>
            <div className='pb-44 pt-5'>
              {selectedChat === -1 ? <div className='text-[15px] font-[400]'>Select a subject to start a conversation</div> : <Messages chat={selectedChat}/>}
            </div>
        </div>
      </div>
      <UserSendMessage selectedChat={selectedChat} token={token}/>
    </div>
  )
}

export default UserChatBox