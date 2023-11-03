import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoginSignup from './components/LoginSignup';
import Home from './components/Home';
import Profile from './components/Profile';
import Aos from 'aos';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'aos/dist/aos.css';

function App() {
  useEffect (() => {
    Aos.init();
  }, []);

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='/getstarted' element={<LoginSignup />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App