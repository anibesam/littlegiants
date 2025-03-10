import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import WallOfLove from './pages/WallOfLove';
import WallOfLoveSingle from './pages/our-projects';
import Support from './pages/Support';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import RequestDemo from './pages/RequestDemo';
import PageNotFound from './pages/PageNotFound';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 500,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-projects" element={<WallOfLoveSingle />} />
        <Route path="/contact-us" element={<Support />} />
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
