import React from "react";
import ProjectsSkeleton from "./ProjectsSkeleton";

const Projects = ({ projects, tasks, username }) => {
  if (!projects || projects.length === 0) {
    return (
      // <div>
      //   <ProjectsSkeleton />
      // </div>
      // skeleton loader
      <div className="flex flex-col justify-center items-center w-full opacity-70">
        {[...Array(3)].map((_, index) => (
          <ProjectsSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!tasks) {
    tasks = [];
  }

  const timeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;
    if (seconds < 3600)
      return `${Math.floor(seconds / 60)} minute${
        Math.floor(seconds / 60) > 1 ? "s" : ""
      } ago`;
    if (seconds < 86400)
      return `${Math.floor(seconds / 3600)} hour${
        Math.floor(seconds / 3600) > 1 ? "s" : ""
      } ago`;
    return `${Math.floor(seconds / 86400)} day${
      Math.floor(seconds / 86400) > 1 ? "s" : ""
    } ago`;
  };

  const getProgress = (projectId) => {
    const projectTasks = tasks.filter((task) => task.project_id === projectId);

    // Return 0 if no tasks exist
    if (!Array.isArray(projectTasks) || projectTasks.length === 0) {
      return {
        percentage: 0,
        completedTasks: 0,
        totalTasks: 0,
      };
    }

    const totalTasks = projectTasks.length;
    const completedTasks = projectTasks.filter(
      (task) => task.status.toLowerCase() === "completed"
    ).length;

    return {
      percentage: Math.floor((completedTasks / totalTasks) * 100),
      completedTasks,
      totalTasks,
    };
  };

  return (
    <div className="flex flex-col justify-center items-center w-[800px] md:w-fit">
      <ul className="m-auto">
        {projects.map((project, index) => {
          const progress = getProgress(project.id);

          return (
            <li
              key={`${project.id}-${index}`}
              className="bg-white border flex flex-col mt-20 w-full md:w-[600px] lg:w-[800px] p-4 rounded-lg shadow-md cursor-pointer"
            >
              <div className="flex justify-between w-full">
                <div>
                  <h2 className="text-xl text-[#6F6F6F] font-semibold">
                    {project.name}
                  </h2>
                  <p className="italic text-md text-[#6F6F6F]">
                    Owned by: {project.project_owner}
                  </p>
                  <p className="text-xs italic text-[#6F6F6F]">
                    {timeAgo(project.last_updated)}
                  </p>
                </div>
                <div className="w-fit">
                  <p className="w-24 text-center rounded-full bg-gradient-to-br from-[#1141ff5d] from-10% to-[#9693AC] shadow-black shadow-sm text-[#5b5b5b] p-1">
                    {project.status}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-5">
                <span className="italic text-sm">Progress</span>
              </div>
              <div className="progress-bar w-full h-2 bg-gray-200 rounded-lg mt-5 mb-5">
                <div
                  className="h-full bg-gradient-to-r from-[#8743FF] to-[#4136F1] rounded-lg transition-all duration-500"
                  style={{ width: `${progress.percentage}%` }}
                ></div>
                <span className="text-xs text-[#6F6F6F]">
                  {progress.completedTasks} / {progress.totalTasks} tasks
                  completed
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
