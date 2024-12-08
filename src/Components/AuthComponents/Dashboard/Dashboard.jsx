import { useState } from "react";

import DashboardSideNav from "../Dashboard/DashboardSideNav";
import DashboardTopNav from "../Dashboard/DashboardTopNav";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Analytics from "./Analytics";
import Settings from "./Settings";

const Dashboard = ({ signOut, username }) => {
  const [activeComponent, setActiveComponent] = useState("projects");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Projects":
        return <Projects />;
      case "Tasks":
        return <Tasks />;
      case "Analytics":
        return <Analytics />;
      case "Settings":
        return <Settings />;
      default:
        return <Projects />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardTopNav />
      <div className="flex flex-1">
        <DashboardSideNav setActiveComponent={setActiveComponent} />
        <div className="content">
          <div>Welcome {username}</div>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
