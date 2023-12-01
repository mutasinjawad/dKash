import { useEffect, useState } from "react";
import "./App.css";
import host from "./api";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Admin/Layout";
import Dashboard from "./components/Admin/Dashboard";
import UserView from "./components/Admin/UserView";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import UserHome from "./components/UserHome";
import AddMoney from "./components/AddMoney";
import Cashout from "./components/Cashout";
import SendMoney from "./components/SendMoney";
import Payment from "./components/Payment";
import ProfileEdit from "./components/ProfileEdit";
import QRGenerator from "./components/QRGenerator";
import QRScanner from "./components/QRScanner";
import TanStackTable from "./components/TanStackTable";
import Chatroom from "./components/Admin/Chatroom";
import UserChatBox from "./components/UserChatBox";
import Aos from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "aos/dist/aos.css";
import ContactTable  from "./components/ContactTable";
import TakeLoan from "./components/TakeLoan";
import Recharge from "./components/Recharge";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      fetch (host + "/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
      .then((data) => data.json())
      .then((data) => {
        setUser(data);
      })
    }
  }, []);

  const [user, setUser] = useState(false);
  const [token, setToken] = useState(false);

  return (
    <>
      <div>
        <BrowserRouter>
          {user.type !== 'admin' ? <Navbar token={token} setToken={setToken} setUser={setUser} user={user}/> : null}
          <Routes>
              <Route index element={<Home />} />
              <Route
                path="/login"
                element={
                  <Login setToken={setToken} token={token} setUser={setUser} />
                }
              />
              <Route 
                path="/contact" 
                element={<Contact token={token} user={user} setUser={setUser}/>} 
                />
              {token &&(<><Route
                path="/profile"
                element={<Profile token={token} user={user} setUser={setUser} />}
              />
              <Route
                path="/home"
                element={<UserHome token={token} user={user} setUser={setUser} />}
              />
              <Route
                path="/add"
                element={<AddMoney token={token} user={user} setUser={setUser} />}
              />
              <Route
                path="/send"
                element={
                  <SendMoney token={token} user={user} setUser={setUser} />
                }
              />
              <Route
                path="/qr"
                element={<QRGenerator token={token} user={user} setUser={setUser} />}
              />
              <Route
                path="/scan"
                element={<QRScanner />} 
              />
              <Route  
                path="/chat" 
                element={<UserChatBox token={token} user={user} setUser={setUser}/>}
              />
              <Route
                path="/cashout"
                element={
                  <Cashout token={token} user={user} setUser={setUser} />
                }
              />
              <Route
                path="/payment"
                element={
                  <Payment token={token} user={user} setUser={setUser} />
                }
              />
              <Route
                path="/edit"
                element={
                  <ProfileEdit token={token} user={user} setUser={setUser} />
                }
              />
              <Route 
                path="/table" 
                element={<TanStackTable token={token} user={user} setUser={setUser}/>} 
              />
              </>
              )}
            <Route path="/register" element={<Register token={token} setToken={setToken} setUser={setUser}/>} />
            <Route path="/contacts" element={<ContactTable token={token} setToken={setToken} user={user}/>} />
            <Route path="/loan" element={<TakeLoan token={token} user={user} setUser={setUser}/>} />
            <Route path="/recharge" element={<Recharge token={token} user={user} setUser={setUser}/>} />
          </Routes>
          <Routes>
            <Route path="/admin" element={<Layout token={token} user={user} setUser={setUser}/>}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<UserView token={token} user={user} setUser={setUser}/>} />
              <Route path="chat" element={<Chatroom token={token} user={user} setUser={setUser}/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    
         </>
  );
}

export default App;
