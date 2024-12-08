const Projects = ({ projects }) => {
  console.log("Projects Prop:", projects);
  if (!projects || projects.length === 0) {
    return <div>Loading your projects!</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="border p-2 m-2 w-full max-w-md">
            <h2 className="text-xl font-bold">{project.name}</h2>
            <p>{project.description}</p>
            <p>${project.budget}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
