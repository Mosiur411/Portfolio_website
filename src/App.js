import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home';
import Contact from './Components/Pages/Contact/Contact';
import Blog from './Components/Pages/Blog/Blog';
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
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
      </Routes>
    </div>
  );
}

export default App;
