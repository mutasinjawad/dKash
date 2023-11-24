import React, { useState, useEffect } from 'react';
import defaultPic from '../assets/profile.png';
import {Link, useParams} from 'react-router-dom';
import host from "../api";

const Profile = ({token, user, setUser}) => {

    const [profilePicSrc, setProfilePicSrc] = useState(defaultPic);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        // Read the selected file as a data URL
        const reader = new FileReader();
        reader.onload = (e) => {
            setProfilePicSrc(e.target.result);
        };
        reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        fetch(host + "/profile", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "token": token,
            },
          }).then((data) => data.json()).then((data) => {setUser(data);console.log(data)})
            .catch((err) => console.log(err));
    }
    , [token]);

    return (
    <div className='flex flex-col items-center'>
        <p className='font-[800] text-[90px] p-[50px]'>Personal Information</p>
        <div className='flex flex-col items-center bg-[#e8deff] w-[1700px] h-[580px] mt-[20px] rounded-[50px]'>
            <div className='flex flex-col items-center'>
                <img id='profilePic' className='w-[140px] rounded-full border-[7px] border-white mt-[-70px]' src={user.picture ? user.picture : profilePicSrc} alt="/" />  
            </div>
            <div className='flex flex-col justify-start'>
                <div className='flex items-center gap-[350px] mt-[20px]'>
                    <h1 className='font-[700] text-[50px] text-primaryColor'>{user.name}</h1>
                    <div>
                        <h1 className='font-[600] text-gray-600 text-[20px] pl-2 pt-2'>BALANCE</h1>
                        <p className='font-[700] text-smallTextColor text-[60px]'>&#2547; {user.balance} BDT</p>
                    </div>
                </div>
                <div className='flex justify-between items-end'>
                    <div>
                        <div className='flex flex-col mb-[20px]'>
                            <p className='font-[600] text-[20px]'>Phone Number:</p>
                            <h1 className='font-[400] text-[18px] text-gray-600'>{user.phone}</h1>
                        </div>
                        <div className='flex flex-col mb-[20px]'>
                            <p className='font-[600] text-[20px]'>Email:</p>
                            <h1 className='font-[400] text-[18px] text-gray-600'>{user.email}</h1>
                        </div>
                    </div>
                    <Link to='/edit'>
                    <button className='flex justify-between items-center px-[20px] mt-[30px] w-[140px] h-[49px] bg-white text-primaryColor font-[700] cursor-pointer rounded-full hover:bg-primaryColor hover:text-white ease-in duration-150'><i class="ri-pencil-line"></i>Edit Profile</button>
                    </Link>
                </div>
                <div>
                    <Link to='/qr'>
                    <button className="flex justify-center items-center bg-white text-[31px] w-[50px] h-[50px] rounded-full hover:bg-primaryColor hover:text-white ease-in duration-150">
                    <i class="ri-qr-code-line"></i>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Profile;
