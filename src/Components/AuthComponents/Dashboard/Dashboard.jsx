import DashboardSideNav from "../Dashboard/DashboardSideNav";
import DashboardTopNav from "../Dashboard/DashboardTopNav";
import ProjectView from "./ProjectView";

const Dashboard = ({ signOut, username }) => {
  return (
    <div className="flex flex-col h-screen">
      <DashboardTopNav />
      <div className="flex flex-1">
        <DashboardSideNav />
        <ProjectView username={username} />
      </div>
    </div>
  );
};

export default Dashboard;
