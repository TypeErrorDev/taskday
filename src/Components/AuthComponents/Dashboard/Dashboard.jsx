import DashboardSideNav from "../Dashboard/DashboardSideNav";
import DashboardTopNav from "../Dashboard/DashboardTopNav";

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
