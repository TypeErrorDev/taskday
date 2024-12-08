import Images from "../../../assets/Images";

const DashboardTopNav = () => {
  // TODO: Create SEARCH functionality => Project Name, Task Name, Username, Email, Tags, Budget Range, Deadline Date Range

  // TODO: Create NOTIFICATION functionality => Project Assigned/status updated/closed, Task Assigned/status updated/closed, Project over budget, deadline date approaching

  // TODO: Add svg notification circle for new notifications

  return (
    <div className="fixed top-0 left-0 right-0 h-20 border-b bg-white z-10 flex">
      <div className="border-r w-36 md:max-w-52 h-[80px] flex justify-center items-center text-4xl font-mono text-purple-600">
        <p>TaskDay</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <form action="submit" className="hidden lg:block">
          <input
            type="text"
            placeholder="Search for a Project or Task"
            className="border shadow-md rounded-lg p-2 w-80"
          />
        </form>
      </div>
      <div className="hidden lg:flex lg:justify-center lg:items-center mr-10">
        <img
          src={Images.bellIcon24}
          alt="Notification Icon"
          className="h-10 w-12 mr-10"
        />
        <img
          src={Images.profile_pic}
          alt="Profile Pic"
          className="rounded-full h-16 w-[70px] border-4 border-purple-600"
        />
      </div>
    </div>
  );
};

export default DashboardTopNav;
