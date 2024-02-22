import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { ImFilesEmpty } from 'react-icons/im';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  
  return (
    <nav className="bg-black bg-opacity-20 inline-block px-6 py-2 z-20 fixed left-1/2 transform -translate-x-1/2 bottom-8 flex gap-2 rounded-full backdrop-blur-md">
      <a href="#" onClick={() => setActiveNav('#')} className={`bg-transparent rounded-full flex items-center justify-center text-gray-200 text-lg px-4 py-3 transition duration-300 ease-in-out ${activeNav === '#' ? 'active' : ''}`}>
        <span className={`flex items-center justify-center w-10 h-10 border-2 border-transparent rounded-full p-1 ${activeNav === '#' ? 'border-white' : ''}`}>
          <AiOutlineHome />
        </span>
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={`bg-transparent rounded-full flex items-center justify-center text-gray-200 text-lg px-4 py-3 transition duration-300 ease-in-out ${activeNav === '#about' ? 'active' : ''}`}>
        <span className={`flex items-center justify-center w-10 h-10 border-2 border-transparent rounded-full p-1 ${activeNav === '#about' ? 'border-white' : ''}`}>
          <AiOutlineUser />
        </span>
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={`bg-transparent rounded-full flex items-center justify-center text-gray-200 text-lg px-4 py-3 transition duration-300 ease-in-out ${activeNav === '#experience' ? 'active' : ''}`}>
        <span className={`flex items-center justify-center w-10 h-10 border-2 border-transparent rounded-full p-1 ${activeNav === '#experience' ? 'border-white' : ''}`}>
          <ImFilesEmpty />
        </span>
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={`bg-transparent rounded-full flex items-center justify-center text-gray-200 text-lg px-4 py-3 transition duration-300 ease-in-out ${activeNav === '#portfolio' ? 'active' : ''}`}>
        <span className={`flex items-center justify-center w-10 h-10 border-2 border-transparent rounded-full p-1 ${activeNav === '#portfolio' ? 'border-white' : ''}`}>
          <BiBook />
        </span>
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={`bg-transparent rounded-full flex items-center justify-center text-gray-200 text-lg px-4 py-3 transition duration-300 ease-in-out ${activeNav === '#contact' ? 'active' : ''}`}>
        <span className={`flex items-center justify-center w-10 h-10 border-2 border-transparent rounded-full p-1 ${activeNav === '#contact' ? 'border-white' : ''}`}>
          <BiMessageSquareDetail />
        </span>
      </a>
    </nav>
  );
}

export default Nav;
