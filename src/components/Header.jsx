import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Header() {
  return (
    <div className="pt-28 h-screen flex items-center flex-col gap-2">
      <p className="text-center text-xl font-normal">Salut je suis</p>
      <h1 className="text-4xl text-center font-semibold">Vincent Bouchard</h1>
      <p className="text-3xl text-center text-gray-300 mt-2">
        Développeur Web Fullstack
      </p>
      <div className="flex flex-row gap-4 mt-8">
        <button className="text-background bg-blue-500 px-4 py-2 rounded-md hover:bg-white hover:border-blue-500 transition duration-300 ease-in-out">
          Télécharger mon CV
        </button>
        <button className="text-white border-blue-500 border px-4 py-2 rounded-md hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out">
          Me contacter
        </button>
      </div>
      <div className="flex flex-row gap-4 mt-4">
        <a
          className="text-blue-500 hover:text-white ease-in-out duration-300 transition"
          href=""
        >
          <FaGithub size={48} />
        </a>
        <a
          className="text-blue-500 hover:text-white ease-in-out duration-300 transition"
          href=""
        >
          <FaLinkedin size={48} />
        </a>
      </div>
    </div>
  );
}

export default Header;
