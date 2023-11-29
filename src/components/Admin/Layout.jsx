import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';

const Layout = ({token, user, setUser}) => {

    return(
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <Sidebar />
                <div className='p-4'>
                    {/* <div>header</div>
                    <div>{<Outlet />}</div> */}
            </div>
        </div>
    )
};

export default Layout;