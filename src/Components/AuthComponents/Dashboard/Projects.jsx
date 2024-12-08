const Projects = ({ projects }) => {
  console.log("Projects Prop:", projects);
  if (!projects || projects.length === 0) {
    return <div>Loading your projects!</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center w-[800px]">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className="border flex flex-col m-2 w-screen p-5 max-w-md rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold">{project.name}</h2>
            <p>Projets Budget: ${project.budget.toLocaleString()}</p>
            <p>{project.deadline}</p>
            <p>{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-gray-200 px-2 py-1 rounded text-sm"
                >
                  {tag}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
