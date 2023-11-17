import React, { useState, useEffect } from 'react';
import defaultPic from '../assets/profile.png';
import {Link, useParams} from 'react-router-dom';

const Profile = () => {

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
        const phoneInput = document.getElementById('phone');
    
        if (phoneInput) {
          phoneInput.addEventListener('input', function () {
            const valid = phoneInput.checkValidity();
            if (valid) {
              // Phone number is valid
            } else {
              // Phone number is not valid
            }
          });
        }
        }, []);

    return (
    <div className='flex flex-col items-center'>
        <p className='font-[800] text-[90px] p-[50px]'>Personal Information</p>
        <div className='flex flex-col items-center bg-[#e8deff] w-[1700px] h-[580px] mt-[20px] rounded-[50px]'>
            <div className='flex flex-col items-center'>
                <img id='profilePic' className='w-[140px] rounded-full border-[7px] border-white mt-[-70px]' src={profilePicSrc} alt="/" />  
            </div>
            <div className='flex flex-col justify-start'>
                <div className='flex items-center gap-[350px] mt-[20px]'>
                    <h1 className='font-[700] text-[50px] text-primaryColor'>Muhtasin Jawad</h1>
                    <div>
                        <h1 className='font-[600] text-gray-600 text-[20px] pl-2 pt-2'>BALANCE</h1>
                        <p className='font-[700] text-smallTextColor text-[60px]'>&#2547; 0.00 BDT</p>
                    </div>
                </div>
                <div className='flex justify-between items-end'>
                    <div>
                        <div className='flex flex-col mb-[20px]'>
                            <p className='font-[600] text-[20px]'>Phone Number:</p>
                            <h1 className='font-[400] text-[18px] text-gray-600'>01884279265</h1>
                        </div>
                        <div className='flex flex-col mb-[20px]'>
                            <p className='font-[600] text-[20px]'>Address:</p>
                            <h1 className='font-[400] text-[18px] text-gray-600'>550, North Shajahanpur</h1>
                        </div>
                        <div className='flex flex-col mb-[20px]'>
                            <p className='font-[600] text-[20px]'>Date of Birth:</p>
                            <h1 className='font-[400] text-[18px] text-gray-600'>Oct 16, 2002</h1>
                        </div>
                        <div className='flex flex-col mb-[20px]'>
                            <p className='font-[600] text-[20px]'>Email:</p>
                            <h1 className='font-[400] text-[18px] text-gray-600'>muhtasinjawad1@gmail.com</h1>
                        </div>
                    </div>
                    <Link to='/edit'>
                    <button className='flex justify-between items-center px-[20px] mt-[30px] w-[140px] h-[49px] bg-white text-primaryColor font-[700] cursor-pointer rounded-full hover:bg-primaryColor hover:text-white ease-in duration-150'><i class="ri-pencil-line"></i>Edit Profile</button>
                    </Link>
                </div>
            </div>
            {/* <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
                        Phone
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="tel" placeholder="01XX-XXXX-XXX" pattern="01[3-9][0-35-9]-\d{4}-\d{3}" required/>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Password
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                    <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        City
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        State
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>New Mexico</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Zip
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                    </div>
                </div>
                </form> */}
        </div>
    </div>
  );
};

export default Profile;
