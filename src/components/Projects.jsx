import ProjectDetail from "./ProjectDetail/Details";
import data from "../data/project_data.json";

function Projects() {
  return (
    <div id="portfolio" className="h-fit mt-28 text-center">
      <p className="text-gray-400 text-lg">Mes projets</p>
      <p className="text-blue-500 text-2xl mb-4">Portfolio</p>
      <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((project, index) => (
          <ProjectDetail project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
