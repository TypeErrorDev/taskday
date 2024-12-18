const Projects = ({ projects, tasks }) => {
  if (!projects || projects.length === 0) {
    return <div>Loading your projects!</div>;
  }

  if (!tasks) {
    tasks = [];
  }

  const timeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(seconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
  };

  const getProgress = (projectId) => {
    const projectTasks = tasks.filter((task) => task.project_id === projectId);
    if (!Array.isArray(projectTasks) || projectTasks.length === 0) {
      return 0;
    }
    const totalTasks = projectTasks.length;
    const completedTasks = projectTasks.filter(
      (task) => task.status === "completed" || task.status === "Completed"
    ).length;

    return Math.floor((completedTasks / totalTasks) * 100);
  };

  return (
    <div className="flex flex-col justify-center items-center w-[800px] md:w-fit">
      <ul className="m-auto">
        {projects.map((project, index) => (
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
            <div className="mt-5 italic text-sm">Progress</div>
            <div className="progress-bar w-full h-2 bg-gray-200 rounded-lg mt-5 mb-5">
              {/* Progress filling */}
              <div
                className="h-full bg-gradient-to-r from-[#8743FF] to-[#4136F1] rounded-lg"
                style={{ width: `${getProgress(project.id)}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
