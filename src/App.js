import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home';
import Contact from './Components/Pages/Contact/Contact';
import Navbar from './Components/Sheare/Navbar';
import Portfolio from './Components/Pages/Portfolio/Portfolio ';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='project' element={<Portfolio/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
