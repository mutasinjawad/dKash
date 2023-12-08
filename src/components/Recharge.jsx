import React, { useState } from 'react';
import host from "../api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recharge = ({token, user}) => {

  const [rechargeAmount, setRechargeAmount] = useState(0);
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();
  const isValidMobileNumber = () => {
    const validPrefixes = ['+88018', '+88017', '+88016', '+88019', '+88015', '+88014', '+88013'];
    return (
      mobileNumber.length === 14 &&
      validPrefixes.some(prefix => mobileNumber.startsWith(prefix))
    );
  };

  const handleSubmit = () => {
        
          const form = { receiver : mobileNumber, amount : rechargeAmount};
          fetch(host + "/money/recharge", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
                "token": token,
            },
            body: JSON.stringify(form),
          })
            .then((data) => data.text()).then(() => {navigate("/home")})
            .catch((err) => console.log(err));
      };

  const handleRecharge = () => {
    const amount = parseFloat(rechargeAmount);

    if (isNaN(amount) || amount <= 0) {
      toast.warn('Please enter a valid positive number for recharge.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (amount > user.balance) {
      toast.warn('Insufficient funds! You cannot recharge more than your account balance.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (!isValidMobileNumber()) {
      toast.warn('Please enter a valid 14-digit(including +880) mobile number with a valid prefix.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {

      setRechargeAmount('');
      setMobileNumber('');
      handleSubmit();
    }
  };

  return (
    <div>
     
      <p data-aos="fade-right" data-aos-duration="1500" className='mb-[50px] font-[800] text-smallTextColor text-[100px]'>Recharge Money</p>
      <p data-aos="fade-up" data-aos-duration="1500" className='font-[600] text-[60px]'>&#2547; Account Balance: {user.balance} BDT</p>
      <div className="flex gap-4">
        <div className='flex flex-col pr-[80px]'>
          <div className='flex flex-col my-[20px]'>
            <h1 className='font-[700] px-[30px]'>Mobile Number:</h1>
            <div className='flex items-center mt-[10px] w-[400px] h-[80px] border-[1px] border-black rounded-[30px] p-7 hover:bg-gray-100 ease-in duration-150'>
              <i className="ri-phone-line"></i>
              <input
                className='h-[50px] w-[400px] text-[19px] bg-transparent focus:outline-none pl-[20px]'
                type='text'
                placeholder='Mobile Number'
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
          </div>
          <div className='flex flex-col my-[20px]'>
            <h1 className='font-[700] px-[30px]'>Recharge Amount:</h1>
            <div className='flex items-center mt-[10px] w-[400px] h-[80px] border-[1px] border-black rounded-[30px] p-7 hover:bg-gray-100 ease-in duration-150'>
              <i className="ri-wallet-3-line"></i>
              <input
                className='h-[50px] w-[400px] text-[19px] bg-transparent focus:outline-none pl-[20px]'
                type='number'
                min="0"
                placeholder='Amount'
                value={rechargeAmount}
                onChange={(e) => setRechargeAmount(e.target.value)}
              />
            </div>
          </div>
        
          <button
            className='flex justify-center items-center mt-[30px] w-[220px] h-[59px] bg-[#e8deff] text-primaryColor font-[700] cursor-pointer rounded-full hover:bg-primaryColor hover:text-white ease-in duration-150'
            onClick={handleRecharge}
          >
            Recharge
          </button>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Recharge;
