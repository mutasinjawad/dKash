import React, { useState } from 'react';
import host from "../api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recharge = ({token, user}) => {

  const [rechargeAmount, setRechargeAmount] = useState(0);
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();
  const remainingBalance = user.balance - (5 + (parseFloat(rechargeAmount) + parseFloat(rechargeAmount) * 0.001));
  const isValidMobileNumber = () => {
    const validPrefixes = ['+88018', '+88017', '+88016', '+88019', '+88015', '+88014', '+88013'];
    if (isNaN(rechargeAmount) || rechargeAmount <= 0) {
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
    } else if (rechargeAmount > user.balance) {
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
    }
  };
    const handleRecharge = () => {
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
  
      const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        if (name === "reciver") {
          setMobileNumber(value);
        } else if (name === "amount") {
          setRechargeAmount(value);
        }
      };

    

  return (
    <div className='flex justify-between px-[300px] my-[80px] w-[full]'>
      <div>
        <p data-aos="fade-right" data-aos-duration="1500" className='mb-[70px] font-[800] text-smallTextColor text-[100px]'>Recharge Money</p>
        <h1 className='font-[600] text-[20px] p-2'>BALANCE</h1>
        <p data-aos="fade-up" data-aos-duration="1500" className='font-[700] text-[80px]'>&#2547; {user.balance} BDT</p>
        <p className='font-[400] text-[20px] text-gray-400'>Total Cost: 5 + {rechargeAmount && (parseFloat(rechargeAmount) + parseFloat(rechargeAmount) * 0.001)}</p>
          {rechargeAmount && (
            <p className={`font-[400] text-[18px] mt-5 ${remainingBalance < 0 ? 'text-red-400' : 'text-green-400'}`}>
                Remaining Balance: {remainingBalance}
            </p>
          )}
      </div>

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
                name='reciver'
                value={mobileNumber}
                onChange={handleChange}
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
                placeholder='Amount'
                name='amount'
                value={rechargeAmount}
                onChange={handleChange}
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
