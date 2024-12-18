import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ token, user, setUser }) => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1" style={{ overflowY: "scroll" }}>
        <Header token={token} user={user} setUser={setUser} />
        {<Outlet token={token} user={user} setUser={setUser} />}
      </div>
    </div>
  );
};

export default Layout;
