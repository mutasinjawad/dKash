import React from 'react'
import Message from './Message'
import MsgSubject from './MsgSubject'
import host from '../../api'
import { useState } from 'react'
import { useEffect } from 'react'
import SendMessage from './SendMessage'

const ChatBox = ({token, user, setUser}) => {

  const [selectedChat, setSelectedChat] = useState(-1)

  const Messages = ({chat}) => {
    
    const [messages, setMessages] = useState([])
    useEffect(() => {
      fetch(host + "/admin/chat/" + chat, {
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
                <Message key={message.id} message={message} user={user} selectedChat={selectedChat}/>
              ))}
      </>
    )
  }

  return (
    <>
    <div className='flex flex-row gap-4 w-full mx-4 h-[46rem]'>
      <div className='w-[38rem] bg-white p-4 mt-4 rounded-sm border border-gray-200 flex flex-col'>
        <MsgSubject token={token} user={user} setUser={setUser} setSelectedChat={setSelectedChat}/>
      </div>
      <div className='bg-white p-4 mt-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
        <div className='pb-44 pt-20'>
          {selectedChat === -1 ? <div className='text-[15px] font-[400]'>Select a subject to start a conversation</div> : <Messages chat={selectedChat}/>}
        </div>
      </div>
    </div>
        <SendMessage token={token} user={user} setUser={setUser} selectedChat={selectedChat}/>
        </>
  )
}

export default ChatBox