import React from 'react'
import Logo from './Logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
              <img src={Logo} 
                alt="Logo" 
                className='h-7 cursor-pointer'
                onClick={() => navigate("/")}
              />
            </div>
            <div>
              <ul className='flex space-x-10'>
                <li
                  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                    pathMatchRoute("/") && "text-black border-b-blue-600"
                  }`}
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <li className={`cursor-pointer py-3 text-sm font-semibold  text-gray-400 border-b-[3px] border-b-transparent ${
                  pathMatchRoute("/offers") && "text-black border-b-blue-600"
                  }`}
                  onClick={() => navigate("/offers")}
                >
                  Offers
                </li>
                <li className={`cursor-pointer py-3 text-sm font-semibold  text-gray-400 border-b-[3px] border-b-transparent  ${
                  pathMatchRoute("/sign-in") && "text-black border-b-blue-600"
                  }`}
                  onClick={() => navigate("/sign-in")}
              >
                Sign in
              </li>
              </ul>
            </div>
        </header>
    </div>
  )
}
