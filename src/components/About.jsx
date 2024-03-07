import React from "react";
import HUNTER from "../assets/hunter.png";
import { FaAward, FaDev } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
function About() {
  return (
    <div
      id="about"
      className="h-fit mt-28 flex flex-col w-full"
    >
      <div className="flex flex-col items-center gap-4">
        <p className="text-2xl text-gray-300">Ce qu&apos;il faut savoir</p>
        <p className="text-3xl text-blue-500 font-bold">Sur moi</p>
        <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-20 mt-4">
          <div className="lg:w-1/2">
            <div className="aspect-w-1 aspect-h-1 rounded-2xl bg-gradient-to-tr from-transparent via-blue-500 to-transparent">
              <img className="rounded-3xl" src={HUNTER} alt="Hunter" />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col">
            <div className="flex flex-col sm:flex-row gap-4 w-full text-center">
              <article className="about_card :w-full">
                <FaAward className="text-2xl text-blue-500" />
                <h5 className="text-2xl text-gray-400 mt-2">Expérience</h5>
                <small className="text-lg text-gray-300">3 ans</small>
              </article>
              <article className="about_card  w-full">
                <FaDev className="text-2xl text-blue-500" />
                <h5 className="text-2xl text-gray-400 mt-2">Stack</h5>
                <small className="text-lg text-gray-300">
                  React, Next, Django
                </small>
              </article>
              <article className="about_card d w-full">
                <IoLogoJavascript className="text-2xl text-blue-500" />
                <h5 className="text-2xl text-gray-400 mt-2">Projets</h5>
                <small className="text-lg text-gray-300">20</small>
              </article>
            </div>
            <p className="mt-8 text-gray-400 text-xl text-center sm:text-left">
              Salut ! Je suis un développeur web fullstack avec 3 ans
              d&apos;expérience, j&apos;ai suivi deux formations de développeur web chez O&apos;Clock et OpenClassrooms dont l&apos;une en alternance d&apos;un an.
              Mes outils de prédilection sont React, Django,
              Next.js et JavaScript. J&apos;adore plonger dans mes projets et
              creuser toujours plus loin dans mes technologies favorites. Je
              suis toujours partant pour de nouveaux défis et projets variés.
            </p>
            <a
              href="#contact"
              className="bg-blue-500 text-background px-8 py-3 rounded mt-8 w-fit hover:bg-white ease-in-out transition duration-300 self-center sm:self-start"
            >
              Contactez-moi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
