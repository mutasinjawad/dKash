import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import host from "../api";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setToken, token, setUser }) => {
  const [phone, setPhone] = useState("");
  const [pin, setpin] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "phone") {
      setPhone(value);
    } else if (name === "pin") {
      setpin(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 14) {
      toast.warn('Invalid Phone Number!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        });
      return;
    }
    if (pin.length !== 6) {
      toast.warn('Invalid Pin!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        });
      return;
    }
    
    const form = { phone, pin };
    // fetch(host + "/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(form),
    // })
    // .then((data) => data.text())
    // .catch((err) => console.log(err),
    // toast.warn('Log in Failed!', {
    // position: "top-center",
    // autoClose: 2000,
    // hideProgressBar: false,
    // closeOnClick: true,
    // pauseOnHover: true,
    // draggable: true,
    // progress: undefined,
    // theme: "dark",
    // }))
    //   .then((t) => {
    //     localStorage.setItem("token", t);
    //     setToken(t);
    //     const user = jwtDecode(t);
    //     setUser(user);
    //     if (user.type === 'admin') {
    //       navigate('/admin');
    //     } else {
    //       navigate('/home');
    //     }
    //   })

    fetch(host + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    .then((data) => {
      if (data.status !== 200){
        throw new Error('Log in Failed!');
      }
      return data.text()})
    .then((t) => {
      localStorage.setItem("token", t);
      setToken(t);
      const user = jwtDecode(t);
      setUser(user);
      if (user.type === 'admin') {
        navigate('/admin');
      } else {
        navigate('/home');
      }
    })
    .catch((err) => console.log(err),
    )
  };

  return (
    <div className="container flex flex-col mt-[100px] mb-[50px] bg-primaryColor w-[600px] rounded-[30px]">
      <div className="flex flex-col items-center w-full mt-[30px]">
        <h1 className="text-white font-700 text-[48px]">Login</h1>
        <div className="mt-[30px] w-[70px] h-[6px] bg-white rounded-[10px]"></div>
      </div>
      <div className="mt-[45px] flex flex-col gap-[25px]">
        <div className="flex items-center m-auto w-[480px] h-[80px] bg-white rounded-[20px] p-7 focus:outline-none">
          <i class="ri-phone-line"></i>
          <input
            className="h-[50px] w-[400px] bg-transparent text-[19px] focus:outline-none pl-[20px]"
            type="text"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center m-auto w-[480px] h-[80px] bg-white rounded-[20px] p-7 focus:outline-none">
          <i className="ri-lock-line"></i>
          <input
            className="h-[50px] w-[400px] bg-transparent text-[19px] focus:outline-none pl-[20px]"
            type="password"
            name="pin"
            placeholder="6 Digit Pin"
            value={pin}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex gap-[30px] my-[50px] mx-auto">
      <div>
            <h1 className="text-[13px] text-gray-600">Don't have an account?</h1>
            <Link to={"/register"} className="text-gray-700 cursor-pointer hover:text-white hover:underline ease-in duration-100">Sign Up Here!</Link>
      </div>
        <div
          onClick={handleSubmit}
          className={`flex justify-center items-center w-[220px] h-[59px] text-[19px] font-[700] cursor-pointer rounded-full bg-[#e8deff] text-[#3c009d] hover:bg-[#3c009d] hover:text-white ease-in-out duration-300`}
        >
          Login
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
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
  );
};

export default Login;
