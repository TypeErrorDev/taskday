import { useState, useEffect } from "react";

import DashboardSideNav from "../Dashboard/DashboardSideNav";
import DashboardTopNav from "../Dashboard/DashboardTopNav";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Analytics from "./Analytics";
import Settings from "./Settings";

const Dashboard = ({ signOut, username, projects, tasks }) => {
  const [activeComponent, setActiveComponent] = useState("Projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    const filteredProjects = projects.filter((project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredTasks = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProjects(filteredProjects);
    setFilteredTasks(filteredTasks);
  }, [searchQuery, projects, tasks]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Projects":
        return <Projects projects={filteredProjects} tasks={filteredTasks} />;
      case "Tasks":
        return <Tasks tasks={filteredTasks} />;
      case "Analytics":
        return <Analytics projects={filteredProjects} tasks={filteredTasks} />;
      case "Settings":
        return <Settings />;
      default:
        return <Projects projects={filteredProjects} tasks={filteredTasks} />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardTopNav signOut={signOut} onSearch={handleSearch} />
      <div className="flex flex-1 mt-20 ml-36 md:ml-48">
        <DashboardSideNav setActiveComponent={setActiveComponent} />
        <div className="content flex flex-col items-center overflow-y-auto w-full ">
          <div className="text-7xl font-extrabold bg-gradient-to-br from-20% from-[#8743FF] to-[#4136F1] bg-clip-text text-transparent text-center">
            Welcome back, {username}!
          </div>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
