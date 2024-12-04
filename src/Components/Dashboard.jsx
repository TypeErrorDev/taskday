const Dashboard = ({ signOut }) => {
  return (
    <div>
      <p>This is the dashboard!!</p>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Dashboard;
