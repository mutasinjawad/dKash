import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
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
import Aos from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "aos/dist/aos.css";
import ContactTable  from "./components/ContactTable";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      const user = jwtDecode(token);
      setUser(user);
    }
  }, []);

  const [user, setUser] = useState(false);
  const [token, setToken] = useState(false);

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar token={token} setToken={setToken} setUser={setUser}/>
          <Routes>
            <Route path="" element={<Home />} />
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
               element={<TanStackTable token={token} user={user} setUser={setUser}/>} />
            </>
            )}
            <Route path="/register" element={<Register />} />
            <Route path="/contacts" element={<ContactTable />} />

          </Routes>
        </BrowserRouter>
      </div>
    
         </>
  );
}

export default App;
