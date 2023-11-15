import React, { useState } from "react";
import { Link } from "react-router-dom";
import host from "../api";
const LoginSignup = () => {
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [cPin, setCPin] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "phone") {
      setPhone(value);
    } else if (name === "pin") {
      setPin(value);
    } else if (name === "cpin") {
      setCPin(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin == cPin) {
      const form = { phone, pin };
      console.log(JSON.stringify(form));
      fetch(host + "/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="container flex flex-col mt-[100px] mb-[50px] bg-primaryColor w-[600px] rounded-[30px]">
      <div className="flex flex-col items-center w-full mt-[30px]">
        <h1 className="text-white font-700 text-[48px]">Sign Up</h1>
        <div className="mt-[30px] w-[70px] h-[6px] bg-white rounded-[10px]"></div>
      </div>
      <div className="mt-[45px] flex flex-col gap-[25px]">
        <div className="flex items-center m-auto w-[480px] h-[80px] bg-white rounded-[20px] p-7 focus:outline-none">
          <i className="ri-user-line"></i>
          <input
            className="h-[50px] w-[400px] bg-transparent text-[19px] focus:outline-none pl-[20px]"
            type="text"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        {/* <div className="flex items-center m-auto w-[480px] h-[80px] bg-white rounded-[20px] p-7 focus:outline-none">
          <i className="ri-mail-line"></i>
          <input
            className="h-[50px] w-full bg-transparent text-[19px] focus:outline-none pl-[20px]"
            type="email"
            placeholder="Email"
          />
        </div> */}
        <div className="flex items-center m-auto w-[480px] h-[80px] bg-white rounded-[20px] p-7 focus:outline-none">
          <i className="ri-lock-line"></i>
          <input
            className="h-[50px] w-[400px] bg-transparent text-[19px] focus:outline-none pl-[20px]"
            type="pin"
            onChange={handleChange}
            name="pin"
            value={pin}
            placeholder="6 Digit Pin"
          />
        </div>
        <div className="flex items-center m-auto w-[480px] h-[80px] bg-white rounded-[20px] p-7 focus:outline-none">
          <i className="ri-lock-line"></i>
          <input
            className="h-[50px] w-[400px] bg-transparent text-[19px] focus:outline-none pl-[20px]"
            type="cpin"
            onChange={handleChange}
            name="cpin"
            value={cPin}
            placeholder="Confirm Pin"
          />
        </div>
      </div>
      <div className="flex gap-[30px] my-[50px] mx-auto">
        <div
          onClick={handleSubmit}
          className={`flex justify-center items-center w-[220px] h-[59px] text-[19px] font-[700] cursor-pointer rounded-full bg-[#eaeaea] text-[#4c00b4]`}
        >
          Sign Up
        </div>
        <Link
          to={"/login"}
          className={`flex justify-center items-center w-[220px] h-[59px] text-[19px] font-[700] cursor-pointer rounded-full bg-[#3c009d] text-white`}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default LoginSignup;
