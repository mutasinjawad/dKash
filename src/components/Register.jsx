import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import host from "../api";
const Register = ({ token, setToken, setUser }) => {
  const [uName, setUName] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [cPin, setCPin] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "phone") {
      setPhone(value);
    } else if (name === "uName") {
      setUName(value);
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
      fetch(host + "/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((data) => data.text())
        .then((t) => {
          localStorage.setItem("token", t);
          setToken(t);
          const user = jwtDecode(t);
          setUser(user);
        })
        .then(() => {
          navigate("/home");
        })
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
        {/* <div className="flex items-center m-auto w-[480px] h-[80px] bg-white rounded-[20px] p-7 focus:outline-none">
            <i class="ri-phone-line"></i>
            <input
              className="h-[50px] w-[400px] bg-transparent text-[19px] focus:outline-none pl-[20px]"
              type="text"
              placeholder="Name"
              name="uName"
              value={uName}
              onChange={handleChange}
            />
        </div> */}
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
          className={`flex justify-center items-center w-[220px] h-[59px] text-[19px] font-[700] cursor-pointer rounded-full bg-[#e8deff] text-[#3c009d] hover:bg-[#3c009d] hover:text-white ease-in-out duration-300`}
        >
          Sign Up
        </div>
        <Link
          to={"/login"}
          className={`flex justify-center items-center w-[220px] h-[59px] text-[19px] font-[700] cursor-pointer rounded-full bg-white text-[#3c009d] hover:bg-[#eaeaea] hover:text-[#3c009d] ease-in-out duration-300`}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
