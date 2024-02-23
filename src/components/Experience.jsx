import data from "../data/data.json";
import Details from "./ExperienceDetails/Details";

function Experience() {
  return (
    <div id="experience" className="h-fit w-full mt-28">
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-gray-400 text-lg">Mon profil technique</p>
        <p className="text-blue-500 text-2xl mb-4">Compétences</p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 w-full mt-8">
        <div className="md:w-1/2 experience_details">
          <p className="text-center text-2xl text-blue-500 mb-8">
            Développement Frontend
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.front.map((item, index) => (
              <Details key={index} title={item} />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 experience_details">
          <p className="text-center text-2xl text-blue-500 mb-8">
            Développement Backend
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.back.map((item, index) => (
              <Details key={index} title={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
