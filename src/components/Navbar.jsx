import React, { useRef, useEffect } from "react";
import Logo from "../assets/final.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import defaultPic from '../assets/profile.png';
import { useState } from "react";
import host from "../api";

const Navbar = ({setToken, setUser, user, token}) => {
  let params = useParams();
  let { name } = params;
  const navigate = useNavigate();

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [profilePicSrc] = useState(defaultPic);

  const toggleSlideOver = () => {
    document.getElementById('slideover-container').classList.toggle('invisible');
    document.getElementById('slideover-bg').classList.toggle('opacity-0');
    document.getElementById('slideover-bg').classList.toggle('opacity-50');
    document.getElementById('slideover').classList.toggle('translate-x-full');
  } 

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] flex items-center bg-transparent"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ============ Logo ============ */}
          <Link to={token ? '/home' : ''}>
            <img className="w-[150px] my-4" src={Logo} alt=''/>
          </Link>

          {/* ============ Menu ============ */}
          {!token && (<div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>)}

          {/* ========================loggedin===================== */}

          {/* {token && (<div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>)} */}

          {/* ============ Menu Right ============ */}
          <div className="flex items-center gap-4">
            {!token && (<Link to="/register">
              <button className="flex items-center gap-1 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 pl-4 pr-3 rounded-full max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in duration-300">
                Get Started<i class="ri-arrow-right-s-line"></i>
              </button>
            </Link>)}

            {token && (<button onClick={toggleSlideOver} className="flex justify-center items-center border w-[45px] h-[45px] rounded-full">
              <img className="rounded-full" src={user.picture ? user.picture : profilePicSrc} alt="/" />
            </button>)}

            {/* =====================slide over==================== */}

            {token && (<div id="slideover-container" className="fixed inset-0 w-full h-full invisible">
                <div onClick={toggleSlideOver} id="slideover-bg" className="absolute duration-500 ease-out transition-all inset-0 w-full h-full bg-gray-900 opacity-0"></div>
                <div id="slideover" className="absolute duration-500 ease-out transition-all w-64 h-full bg-white right-0 top-0 translate-x-full">
                    <div onClick={toggleSlideOver} className="w-10 h-10 text-black text-[20px] cursor-pointer flex items-center justify-center top-0 mt-5">
                        <i class="ri-close-line"></i>
                    </div>
                    <Link to="/home">
                      <button className="flex items-center mt-[50px] px-[20px] w-full h-[50px] text-[20px] text-smallTextColor cursor-pointer hover:bg-[#f2edff] ease-in duration-75">
                      <i class="ri-home-2-line"></i>
                      <h1 className="ml-[15px]">Home</h1>
                      </button>
                    </Link>
                    <Link to="/profile">
                      <button className="flex items-center px-[20px] w-full h-[50px] text-[20px] text-smallTextColor cursor-pointer hover:bg-[#f2edff] ease-in duration-75">
                      <i class="ri-user-line"></i>
                      <h1 className="ml-[15px]">Proile</h1>
                      </button>
                    </Link>
                    {/* <Link to="/contacts"> */}
                      <button className="flex items-center px-[20px] w-full h-[50px] text-[20px] text-smallTextColor cursor-pointer hover:bg-[#f2edff] ease-in duration-75">
                        <i class="ri-contacts-line"></i>
                        <h1 className="ml-[15px]">Contacts</h1>
                      </button>
                    {/* </Link> */}
                    {/* <Link to="/history"> */}
                      <button className="flex items-center px-[20px] w-full h-[50px] text-[20px] text-smallTextColor cursor-pointer hover:bg-[#f2edff] ease-in duration-75">
                        <i class="ri-history-fill"></i>
                        <h1 className="ml-[15px]">Transaction History</h1>
                      </button>
                    {/* </Link> */}
                    <Link to="/contact">
                      <button className="flex items-center px-[20px] w-full h-[50px] text-[20px] text-smallTextColor cursor-pointer hover:bg-[#f2edff] ease-in duration-75">
                        <i class="ri-question-line"></i>
                        <h1 className="ml-[15px]">Help</h1>
                      </button>
                    </Link>
                    <button
                        onClick={() => {localStorage.removeItem('token'); setToken(false); setUser(false); navigate('/register')}} 
                        className="flex items-center px-[20px] w-full h-[50px] text-[20px] text-smallTextColor cursor-pointer hover:bg-[#f2edff] ease-in duration-75">
                        <i class="ri-logout-box-r-line"></i>
                        <h1 className="ml-[15px]">Log Out</h1>
                    </button>
                </div>
            </div>)}

            {/* <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i class="ri-menu-3-line"></i>
            </span> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;