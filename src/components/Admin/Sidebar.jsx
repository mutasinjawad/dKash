import React from 'react'
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const linkClass = 'flex items-center gap-2 p-2 text-[18px] rounded-[6px] cursor-pointer hover:bg-[#193256] duration-150 ease-in-out';

  return (
    <div className='flex flex-col w-60 p-3 bg-primaryColor text-white'>
        <div className='flex items-center px-2 py-11'>
            <img className="w-[110px]" src={Logo} alt="" />
        </div>
        <div className='flex-1'>
            <ul className='flex flex-col gap-2'>
                <Link to='/admin'>
                    <div className={linkClass}>
                        <i class="ri-dashboard-line"></i>
                        <li>Dashboard</li>
                    </div>
                </Link>
                <Link to='/admin/users'>
                    <div className={linkClass}>
                        <i class="ri-user-6-line"></i>
                        <li>Users</li>
                    </div>
                </Link>
                <div className={linkClass}>
                    <i class="ri-bank-line"></i>
                    <li>Transactions</li>
                </div>
                <div className={linkClass}>
                    <i class="ri-settings-3-line"></i>
                    <li >Settings</li>
                </div>
            </ul>
        </div>
            <Link to='/login'>
                <button
                    onClick={() => {localStorage.removeItem('token'); setToken(false); setUser(false); navigate('/login')}} 
                    className='flex items-center gap-2 p-2 text-[18px] rounded-[6px] cursor-pointer hover:bg-red-100 hover:text-red-500 hover:font-[700] duration-150 ease-in-out'>
                        <i class="ri-logout-box-r-line"></i>
                        <h1 >Log Out</h1>
                </button>
            </Link>
    </div>
  )
}

export default Sidebar;