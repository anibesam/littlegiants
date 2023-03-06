import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition';
import Dropdown from '../utils/Dropdown';

import Logo from '../images/giants/logo.png';

function Header({
  mode
}) {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block text-blue-600 transition duration-150 ease-in-out" aria-label="Cruip">
             <img src={Logo} className="w-16 h-16"/>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link to="/" className="font-medium text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Impact</Link>
              </li>
              <li>
                <Link to="/" className="font-medium text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Our work</Link>
              </li>
              <li>
                <Link to="/" className="font-medium text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"> About us</Link>
              </li>      
              <li>
                <Link to="/" className="font-medium text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Contact</Link>
              </li>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
             
              <li>
                <Link to="/" className="font-medium shadow-sm btn bg-orange-500 text-white  px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group">
                  Donate           
                </Link>
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden">

            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-slate-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"              
              >
                <ul className="px-5 py-2">
                  <li>
                    <Link to="/" className="flex font-medium text-black hover:text-blue-600 py-2">Impact</Link>
                  </li>
                  <li>
                    <Link to="/" className="flex font-medium text-black hover:text-blue-600 py-2">Our work</Link>
                  </li>
                  <li>
                    <Link to="/" className="flex font-medium text-black hover:text-blue-600 py-2">About</Link>
                  </li>  
                  <li>
                    <Link to="/" className="flex font-medium text-black hover:text-blue-600 py-2">Contact</Link>
                  </li>                                                    
                  
                  <li>
                    <Link to="/" className="btn bg-orange-500 font-medium w-full text-white py-2">Donate</Link>
                  </li>
                 
                </ul>
              </Transition>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
