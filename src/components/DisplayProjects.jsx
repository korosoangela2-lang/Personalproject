import { useState } from "react";
import ProjectCard from "./projectCard";

const DisplayProjects = ({ projects }) => {
  const [queryFilter, setQueryFilter] = useState("");

  const filteredProjects = projects.filter((a) =>
    a.title.toLowerCase().includes(queryFilter.toLowerCase()),
  );

  return (
    <div className="border border-black rounded-xl overflow-hidden bg-white">
      <div className="p-4 border-b border-black">
        <input
          id="search"
          type="text"
          placeholder="Search Projects"
          className="w-full p-2 border border-black rounded-md outline-none"
          value={queryFilter}
          onChange={(e) => setQueryFilter(e.target.value)}
        />
      </div>

      <div className="p-6 flex flex-col gap-8">
        {filteredProjects.map((i, idx) => (
          <ProjectCard key={idx} project={i} />
        ))}
        {filteredProjects.length === 0 && (
          <p className="text-gray-400 italic">No projects found...</p>
        )}
      </div>
    </div>
  );
};

export default DisplayProjects;
