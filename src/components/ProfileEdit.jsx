import React, { useState, useEffect } from 'react';
import defaultPic from '../assets/Profile.png';

const ProfileEdit = () => {

    const [ProfilePicSrc, setProfileEditPicSrc] = useState(defaultPic);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        // Read the selected file as a data URL
        const reader = new FileReader();
        reader.onload = (e) => {
            setProfileEditPicSrc(e.target.result);
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
            <div className='flex flex-col items-center mb-[35px]'>
                <img id='ProfilePic' className='w-[140px] rounded-full border-[7px] border-white mt-[-70px]' src={ProfilePicSrc} alt="/" />
                
                <label
                    htmlFor='newpic'
                    aria-hidden='True'
                    className='mt-[-45px] ml-[90px] pl-[11px] pt-[5px] w-[45px] h-[45px] relative justify-center rounded-full text-primaryColor bg-white text-[25px] shadow-xl hover:shadow-none hover:bg-primaryColor hover:text-white cursor-pointer ease-in duration-150'
                >
                    <input
                    type='file'
                    name='newpic'
                    id='newpic'
                    accept='.jpeg, .jpg, .png'
                    className='absolute bottom-0 left-0 opacity-0 w-full'
                    onChange={handleFileChange}
                    />
                    <i className='ri-camera-2-line'></i>
                </label>
            </div>
            <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input class="appearance-none w-full bg-white text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input class="appearance-none w-full bg-white text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
                        Phone
                    </label>
                    <input class="appearance-none w-full bg-white text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="phone" type="tel" placeholder="01XX-XXXX-XXX" pattern="01[3-9][0-35-9]-\d{4}-\d{3}" required/>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
                        Address
                    </label>
                    <input class="appearance-none w-full bg-white text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="address" type="text" placeholder="ABC/1, This Road, City"/>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
                        Email
                    </label>
                    <input class="appearance-none w-full bg-white text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="address" type="email" placeholder="yourname@gmail.com"/>
                    </div>
                </div>
                {/* <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Password
                    </label>
                    <input class="appearance-none w-full bg-white text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-password" type="password" placeholder="******************" />
                    <p class="text-gray-400 text-xs mt-[5px] italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div> */}
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Day
                        </label>
                        <div class="relative">
                            <select class="appearance-none w-full bg-white text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-state">
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                            </select>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            Month
                        </label>
                        <div class="relative">
                            <select class="appearance-none w-full bg-white text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-state">
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                            </select>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Year
                        </label>
                    <input class="appearance-none w-full bg-white text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-zip" type="text" placeholder="2000" />
                    </div>
                </div>
            </form>
            <button className='flex justify-between items-center mt-[-55px] mr-[-900px] p-[18px] w-[100px] h-[49px] bg-primaryColor text-white font-[700] cursor-pointer rounded-full hover:bg-[#4c00b4] ease-in duration-150'><i class="ri-arrow-right-circle-line"></i>Done</button>
        </div>
    </div>
  );
};

export default ProfileEdit;
