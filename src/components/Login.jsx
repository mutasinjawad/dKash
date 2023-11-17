import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import host from "../api";

const Login = ({setToken, token, setUser}) => {
  const [phone, setPhone] = useState('');
  const [pin, setpin] = useState(''); 
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
      const form = { phone, pin };
      fetch(host + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((data) => data.text()).then(t => {setToken(t)
            const user = jwtDecode(t);
            setUser(user);}).then(() => {navigate("/profile")})
        .catch((err) => console.log(err));
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
            type="pinword"
            name='pin'
            placeholder="6 Digit Pin"
            value={pin}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="pl-[62px] mt-[27px] text-gray-400 text-[18px]">
        Lost pinword?{" "}
        <span className="text-white cursor-pointer">Click Here!</span>
      </div>
      <div className="flex gap-[30px] my-[50px] mx-auto">
        <div
          onClick={handleSubmit}
          className={`flex justify-center items-center w-[220px] h-[59px] text-[19px] font-[700] cursor-pointer rounded-full bg-[#eaeaea] text-[#4c00b4]`}
        >
          Login
        </div>
        <Link
          to={"/register"}
          className={`flex justify-center items-center w-[220px] h-[59px] text-[19px] font-[700] cursor-pointer rounded-full bg-[#3c009d] text-white`}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;