import DashboardTopNav from "./DashboardTopNav";

const Dashboard = ({ signOut, username }) => {
  return (
    <div>
      <DashboardTopNav />
      {/* <button onClick={signOut}>Sign out</button> */}
    </div>
  );
};

export default Dashboard;
