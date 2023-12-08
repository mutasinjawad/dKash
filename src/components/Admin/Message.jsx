import React from 'react'

const Message = ({ message, user }) => {

    return (
    <div className='w-full'>
        {message.sender === user.phone ? <div className='chat chat-end'>
            <div className='chat-bubble chat-bubble-info text-[15px]'>
                {message.message}
            </div>
        </div> : <div className='chat chat-start w-60'>
            <div className='chat-bubble chat-bubble-primary text-[15px]'>
                {message.message}
            </div>
        </div>}
    </div>
  )
}

export default Message