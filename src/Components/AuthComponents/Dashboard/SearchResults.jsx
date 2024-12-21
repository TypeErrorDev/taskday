import React from "react";
import { useLocation } from "react-router-dom";

const SearchResult = ({ projects, tasks }) => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Search Results for "{searchQuery}"</h1>
      <div className="w-full mt-5">
        <h2 className="text-xl font-semibold">Projects</h2>
        <ul>
          {filteredProjects.map((project) => (
            <li key={project.id} className="border p-2 m-2">
              {project.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full mt-5">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id} className="border p-2 m-2">
              {task.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResult;
