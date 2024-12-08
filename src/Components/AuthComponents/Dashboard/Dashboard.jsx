import { useState, useEffect } from "react";

import DashboardSideNav from "../Dashboard/DashboardSideNav";
import DashboardTopNav from "../Dashboard/DashboardTopNav";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Analytics from "./Analytics";
import Settings from "./Settings";

const Dashboard = ({ signOut, username, projects }) => {
  const [activeComponent, setActiveComponent] = useState("Projects");
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await projects();
      console.log("Fetched Projects:", data);
      setTimeout(() => {
        setProjectList(data);
      }, 500);
    };
    fetchProjects();
  }, [projects]);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Projects":
        return <Projects projects={projectList} />;
      case "Tasks":
        return <Tasks />;
      case "Analytics":
        return <Analytics />;
      case "Settings":
        return <Settings />;
      default:
        return <Projects projects={projectList} />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardTopNav signOut={signOut} />
      <div className="flex flex-1 mt-20 ml-36 md:ml-48">
        <DashboardSideNav setActiveComponent={setActiveComponent} />
        <div className="content flex flex-col items-center overflow-y-auto w-full ">
          <div className="text-7xl font-extrabold bg-gradient-to-br from-20% from-[#8743FF] to-[#4136F1] bg-clip-text text-transparent">
            Welcome back, {username}!
          </div>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
