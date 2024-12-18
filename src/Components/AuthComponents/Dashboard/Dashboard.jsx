import { useState } from "react";

import DashboardSideNav from "../Dashboard/DashboardSideNav";
import DashboardTopNav from "../Dashboard/DashboardTopNav";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Analytics from "./Analytics";
import Settings from "./Settings";

const Dashboard = ({ signOut, username, projects, tasks }) => {
  const [activeComponent, setActiveComponent] = useState("Projects");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Projects":
        return <Projects projects={projects} tasks={tasks} />;
      case "Tasks":
        return <Tasks tasks={tasks} />;
      case "Analytics":
        return <Analytics projects={projects} tasks={tasks} />;
      case "Settings":
        return <Settings />;
      default:
        return <Projects projects={projects} tasks={tasks} />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardTopNav signOut={signOut} />
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
