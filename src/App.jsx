import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
import UserHome from './components/UserHome';
import AddMoney from './components/AddMoney';
import SendMoney from './components/SendMoney';
import ProfileEdit from './components/ProfileEdit';
import Aos from 'aos';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'aos/dist/aos.css';

function App() {
  useEffect (() => {
    Aos.init();
  }, []);

  const [user, setUser] = useState(false);
  const [token, setToken] = useState(false);


  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='/login' element={<Login setToken={setToken} token={token} setUser={setUser}/>} />
            <Route path='/profile' element={<Profile token={token} user={user} setUser={setUser}/>} />
            <Route path='/home' element={<UserHome token={token} user={user} setUser={setUser}/>} />
            <Route path='/add' element={<AddMoney />} />
            <Route path='/send' element={<SendMoney />} />
            <Route path='/edit' element={<ProfileEdit token={token} user={user} setUser={setUser}/>} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App