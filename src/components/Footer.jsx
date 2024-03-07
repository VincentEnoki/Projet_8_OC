import React from "react";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-28 bg-blue-400 text-black w-full flex flex-col items-center justify-center py-12">
      <a href="#" className="flex flex-row gap-2 items-center font-bold text-3xl hover:text-white transition-all duration-300 ease-in-out mb-6">
        <FaRegCopyright />
        Bouchard Vincent
      </a>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            <li><a className="hover:text-white transition-all duration-300 ease-in-out" href="#">Accueil</a></li>
            <li><a className="hover:text-white transition-all duration-300 ease-in-out" href="#about">Présentation</a></li>
            <li><a className="hover:text-white transition-all duration-300 ease-in-out" href="#experience">Compétences</a></li>
            <li><a className="hover:text-white transition-all duration-300 ease-in-out" href="#portfolio">Portfolio</a></li>
            <li><a className="hover:text-white transition-all duration-300 ease-in-out" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
