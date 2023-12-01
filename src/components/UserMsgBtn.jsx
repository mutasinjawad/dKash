import host from "../api";
import {useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";

const UserMsgBtn = ({token, user, setUser}) => {

    const [subject, setSubject] = useState([])
    const [message, setMessage] = useState('')
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        if (name === "subject") {
          setSubject(value);
        } else if (name === "message") {
          setMessage(value);
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(host + "/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": token,
            },
            body: JSON.stringify({
                subject: subject,
                message: message,
            }),
        })
        .then((data) => data.json())
        .then(() => toggleMessageIcon)
        .catch((err) => console.log(err));
    }

    const toggleMessageIcon = () => {
        document.getElementById('chat-icon').classList.toggle('invisible');
        document.getElementById('message-icon').classList.toggle('opacity-30');
        document.getElementById('message-icon').classList.toggle('opacity-100');
    }


return (
        <div>
            <div onClick={toggleMessageIcon} id="message-icon" className='flex items-center justify-center fixed text-[23px] pt-[3px] h-10 w-10 rounded-full bg-[#e8deff] hover:cursor-pointer hover:bg-[#dacaff] ease-in-out duration-150 opacity-100'>
                <i class="ri-chat-1-line"></i>
			</div>
            <div id="chat-icon" className="invisible">
                <Link to='/chat'>
                    <div className='flex items-center justify-center bottom-36 right-[105px] fixed text-[23px] pt-[3px] h-10 w-10 rounded-full bg-[#e8deff] hover:cursor-pointer hover:bg-[#dacaff] ease-in-out duration-150'>
                        <i class="ri-more-2-fill"></i>
                    </div>
                </Link>
                <div className="flex flex-col fixed bottom-32 right-40 w-[18rem] h-[25rem] bg-indigo-100 border shadow-md rounded-[20px]">
                    <div className="flex justify-between items-center py-2 px-5">
                        <h1 className="text-[28px] text-primaryColor font-[700]">Write Message</h1>
                        <div onClick={toggleMessageIcon} className="text-[20px] text-gray-500 cursor-pointer">
                            <i class="ri-close-line"></i>
                        </div>
                    </div>
                    <div className='mt-2 mx-2'>
                        <input 
                            type="text"
                            placeholder='Subject'
                            name="subject"
                            value={subject}
                            className='w-full p-3 focus:outline-none rounded-[15px]' 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mt-5 mx-2'>
                        <textarea
                            type="text"
                            placeholder='Write your message'
                            name="message"
                            value={message}
                            className='w-full p-3 focus:outline-none rounded-[15px]'
                            style={{ width: '270px', height: '190px', resize: 'none' }}
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={handleSubmit} className='p-3 m-2 focus:outline-none rounded-full bg-smallTextColor text-white text-center hover:bg-headingColor'>
                        Send Message
                    </button>
                </div>
            </div>
        </div>
        
)
}

export default UserMsgBtn;