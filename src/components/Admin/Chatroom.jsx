import React from 'react'
import ChatBox from './ChatBox'
import SendMessage from './SendMessage'

const Chatroom = ({ token, user, setUser }) => {
  return (
    <div className="flex w-full">
      <ChatBox token={token} user={user} setUser={setUser}/>
    </div>
  )
}

export default Chatroom