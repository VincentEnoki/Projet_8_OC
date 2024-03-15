import propTypes from "prop-types";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function ProjectDetail({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project_detail flex flex-col gap-4">
      <img className="border rounded-t-lg" src={project.image} alt="project" />
      <p className="text-xl font-bold text-left">{project.name}</p>
      <p className="text-base text-gray-300 text-left">{project.description}</p>
      <p className="text-left text-gray-200 text-lg">{project.technologies}</p>
      <a href={project.link} target="_blank" rel="noreferrer" className="bg-blue-500 text-background px-8 py-3 rounded w-fit hover:bg-white ease-in-out transition duration-300">
          Voir le code du projet
      </a>
      <p
        className={`flex flex-row justify-center items-center gap-1 cursor-pointer `}
        onClick={() => setIsOpen(!isOpen)}
      >
        Plus d&apos;infos{" "}
        <MdKeyboardArrowDown
          className={`${
            isOpen ? "rotate-180 ease-in-out transition duration-300" : ""
          }`}
        />
      </p>
      {isOpen == true && (
        <div className="flex flex-col gap-4">
          <p className="text-left text-gray-300">{project.problems}</p>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;

ProjectDetail.propTypes = {
  project: propTypes.object,
};
