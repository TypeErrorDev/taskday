const Projects = ({ projects }) => {
  /* TODO: need to associate the UUID => username */

  console.log("Projects Prop:", projects);
  if (!projects || projects.length === 0) {
    return <div>Loading your projects!</div>;
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

  return (
    <div className="flex justify-center items-center w-[800px] m-auto cursor-default">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className="border flex flex-col m-2 w-screen p-5 max-w-md rounded-lg shadow-md"
          >
            <div className="flex justify-between w-full">
              <div>
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p>{timeAgo(project.last_updated)}</p>
              </div>
              <div className="w-fit">
                <p className="w-20 text-center rounded-full bg-gradient-to-br from-[#1141ff5d] from-10% to-[#9693AC] shadow-black shadow-sm">
                  {project.status}
                </p>
              </div>
            </div>

            {/* <p>Projets Budget: ${project.budget.toLocaleString()}</p> */}

            {/* TODO: Move the tags to the Tasks.jsx component */}
            {/* <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-gray-200 px-2 py-1 rounded text-sm shadow-black shadow-sm"
                >
                  {tag}
                </div>
              ))}
            </div> */}
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
