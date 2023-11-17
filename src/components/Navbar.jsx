import React, { useRef, useEffect } from "react";
import Logo from "../assets/final.png";
import { Link, useParams, useNavigate } from "react-router-dom";

const Navbar = ({setToken, setUser, token}) => {
  let params = useParams();
  let { name } = params;
  const navigate = useNavigate();

  const headerRef = useRef(null);
  const menuRef = useRef(null);

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
          <Link to="">
            <img className="w-[150px] my-4" src={Logo} alt="/" />
          </Link>

          {/* ============ Menu ============ */}
          {!token && (<div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="/"
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

          {/* ============ Menu Right ============ */}
          <div className="flex items-center gap-4">
            {!token && (<Link to="/register">
              <button className="flex items-center gap-1 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 pl-4 pr-3 rounded-full max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in duration-300">
                Get Started<i class="ri-arrow-right-s-line"></i>
              </button>
            </Link>)}

            {token && (<button onClick={() => {localStorage.removeItem('token'); setToken(false); setUser(false); navigate('/register')}} className="flex items-center gap-1 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 pl-4 pr-3 rounded-full max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in duration-300">
                Log Out<i class="ri-arrow-right-s-line"></i>
              </button>)}

            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i class="ri-menu-3-line"></i>
            </span>
            <button className="flex justify-center items-center text-smallTextColor font-[600] border border-solid border-smallTextColor w-[40px] h-[40px] rounded-full hover:bg-smallTextColor hover:text-white ease-in duration-300">
              <i class="ri-user-line"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;