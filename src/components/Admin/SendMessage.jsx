import React from 'react'
import { useState } from 'react'
import host from '../../api';

const SendMessage = ({token, selectedChat}) => {

  const [value, setValue] = useState('')
  
  const handelSubmit = (e) => {
    e.preventDefault()
    fetch(host + "/admin/chat/message", {
      method: "POST",
            headers: {
              "Content-Type": "application/json",
              "token": token,
            },
            body: JSON.stringify({
                message: value,
                id: selectedChat,
            }),
          }).then((data) => data.text()).then((data) => {setValue('');})
            .catch((err) => console.log(err));
    
  }

  return (
    <div className='flex justify-center bg-[#e8deff] fixed bottom-0 py-10 w-[102rem]'>
      <div className="flex justify-center items-center w-[480px] h-[60px] bg-white rounded-[20px] rounded-r-none focus:outline-none">
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
          className={`flex justify-center items-center w-[80px] h-[59px] text-[19px] font-[700] cursor-pointer rounded-[20px] rounded-l-none bg-primaryColor text-white hover:bg-[#3c009d] ease-in-out duration-300`}
        >
          Send
        </div>
    </div>
  )
}

export default SendMessage