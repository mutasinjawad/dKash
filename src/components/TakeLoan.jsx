
import React, { useState } from 'react';
import host from "../api";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const TakeLoan = ({token, user}) => {
  const [loanLimit, setLoanLimit] = useState(5000);
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanInput, setLoanInput] = useState('');
  const [payInput, setPayInput] = useState(''); 
  
  useEffect(() => {
    fetch(host + "/money/loan", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            token: token,
        },
    })
        .then((data) => data.text())
        .then((data) => {
            setLoanAmount(data);
        })
        .catch((err) => console.log(err));
    }, [token]);

    


  const navigate = useNavigate();

  const handleSubmit = () => {
        
          const form = { amount : payInput };
          fetch(host + "/money/loan/pay", {
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
    
  const handleTakeLoan = () => {
    const amount = parseFloat(loanInput);

    if (isNaN(amount) || amount <= 0) {
       toast.warn('Please enter a valid positive number for taking a loan.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    } else if (amount > loanLimit) {
        toast.warn('You cannot exceed the loan limit!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    } else if (loanAmount + amount > loanLimit) {
        toast.warn('You already have an outstanding loan. Please pay it off before taking another loan.', {
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
    //   setLoanAmount(loanAmount + amount);
      setLoanInput('');
      const form = { amount : loanInput };
          fetch(host + "/money/loan", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
                "token": token,
            },
            body: JSON.stringify(form),
          })
            .then((data) => data.text()).then(() => {navigate("/home")})
            .catch((err) => console.log(err));
      
    }
    

  };

  const handlePayLoan = () => {
    const amount = parseFloat(payInput);

    if (isNaN(amount) || amount <= 0) {
        toast.warn('Please enter a valid positive number for paying back the loan.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    } else if (amount > loanAmount) {
        toast.warn('You cannot pay more than your outstanding loan amount!', {
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
    //   setLoanAmount(loanAmount - amount);
      setPayInput(''); // Clearing payInput
      handleSubmit();

    }
  };

  return (
    <div>
	<p data-aos="fade-right" data-aos-duration="1500" className='mb-[50px] font-[800] text-smallTextColor text-[100px]'>Loan Management</p>
    <p data-aos="fade-up" data-aos-duration="1500" className='font-[600] text-[60px]'>&#2547; Loan Limit: {loanLimit} BDT</p>
    <p data-aos="fade-up" data-aos-duration="1500" className='font-[600] text-[60px]'>&#2547; Outstanding Loan: {loanAmount} BDT</p>
    
      <div className="flex gap-4">
        {/* Code for taking Loan Start */}
        <div className='flex flex-col pr-[80px]'>
          <div className='flex flex-col my-[20px]'>
            <h1 className='font-[700] px-[30px]'>Take Loan Amount:</h1>
            <div className='flex items-center mt-[10px] w-[400px] h-[80px] border-[1px] border-black rounded-[30px] p-7 hover:bg-gray-100 ease-in duration-150'>
                <i class="ri-wallet-3-line"></i>
                <input  className='h-[50px] w-[400px] text-[19px] bg-transparent focus:outline-none pl-[20px]' type='number' min="0" placeholder='Amount' 
                value={loanInput}
                onChange={(e) => setLoanInput(e.target.value)}/>
            </div>
        </div>
          <button className='flex justify-center items-center mt-[30px] w-[220px] h-[59px] bg-[#e8deff] text-primaryColor font-[700]
                     cursor-pointer rounded-full hover:bg-primaryColor hover:text-white ease-in duration-150'
                     onClick={handleTakeLoan}>Take Loan</button>
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

        {/* Code for Paying Loan */}
        <div className='flex flex-col pr-[80px]'>
          <div className='flex flex-col my-[20px]'>
            <h1 className='font-[700] px-[30px]'>Pay Loan Amount:</h1>
            <div className='flex items-center mt-[10px] w-[400px] h-[80px] border-[1px] border-black rounded-[30px] p-7 hover:bg-gray-100 ease-in duration-150'>
                <i class="ri-wallet-3-line"></i>
                <input  className='h-[50px] w-[400px] text-[19px] bg-transparent focus:outline-none pl-[20px]' type='number' min="0" placeholder='Amount' 
                value={payInput}
                onChange={(e) => setPayInput(e.target.value)}/>
            </div>
        </div>
          <button className='flex justify-center items-center mt-[30px] w-[220px] h-[59px] bg-[#e8deff] text-primaryColor font-[700]
                     cursor-pointer rounded-full hover:bg-primaryColor hover:text-white ease-in duration-150'
                     onClick={handlePayLoan}>Pay Loan</button>
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
    
export default TakeLoan;