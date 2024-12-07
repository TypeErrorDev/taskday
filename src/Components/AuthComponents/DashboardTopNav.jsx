import Images from "../../assets/Images";

const DashboardTopNav = () => {
  // TODO: Create SEARCH functionality => Project Name, Task Name, Username, Email, Tags, Budget Range, Deadline Date Range

  // TODO: Create NOTIFICATION functionality => Project Assigned/status updated/closed, Task Assigned/status updated/closed, Project over budget, deadline date approaching

  // TODO: Add svg notification circle for new notifications

  return (
    // Nav Container
    <div className="hidden md:flex h-20 border-b">
      <div className="border-r w-36 md:min-w-48 h-[80px] flex justify-center items-center text-4xl font-mono text-purple-600">
        <p>TaskDay</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <form action="submit">
          <input
            type="text"
            placeholder="Search for anything"
            className="border shadow-md rounded-lg p-2 w-80"
          />
        </form>
      </div>
    </div>
  );
};

export default DashboardTopNav;
