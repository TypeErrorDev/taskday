import DashboardSideNav from "./DashboardSideNav";
import DashboardTopNav from "./DashboardTopNav";

const Dashboard = ({ signOut, username }) => {
  return (
    <div>
      <DashboardTopNav />
      <DashboardSideNav />
      {/* <button onClick={signOut}>Sign out</button> */}
    </div>
  );
};

export default Dashboard;
