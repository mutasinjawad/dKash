import React from 'react'
import { useState } from 'react'
import host from "../api";

const UserSendMessage = ({token, user, setUser, selectedChat}) => {

  const [value, setValue] = useState('')
  
  const handelSubmit = () => {
    fetch(host + "/chat/message", {
      method: "POST",
            headers: {
              "Content-Type": "application/json",
              "token": token,
            },
            body: JSON.stringify({
                message: value,
                id: selectedChat,
            }),
          }).then((data) => data.text()).then((data) => {console.log(data); setValue('');})
            .catch((err) => console.log(err));
            window.location.reload();
    
  }

  return (
    <div className='flex fixed bottom-0 py-10'>
        <div className="flex items-center w-[480px] h-[60px] bg-white rounded-[20px] rounded-r-none focus:outline-none">
          <input
            className="h-[50px] w-full bg-transparent text-[19px] focus:outline-none px-[20px]"
            type="text"
            placeholder="Send Message"
            value={value}
            onChange={(e) => setValue(e.target.value)} 
          />
        </div>
        <div
          onClick={handelSubmit}
          className={`flex justify-center items-center w-[80px] h-[60px] text-[19px] font-[700] cursor-pointer rounded-[20px] rounded-l-none bg-[#e8deff] text-smallTextColor hover:bg-[#3c009d] hover:text-white ease-in-out duration-300`}
        >
          Send
        </div>
    </div>
  )
}

export default UserSendMessage