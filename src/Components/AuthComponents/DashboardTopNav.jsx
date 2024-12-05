import Images from "../../assets/Images";

const DashboardTopNav = () => {
  // TODO: Create SEARCH functionality => Project Name, Task Name, Username, Email, Tags, Budget Range, Deadline Date Range

  // TODO: Create NOTIFICATION functionality => Project Assigned/status updated/closed, Task Assigned/status updated/closed, Project over budget, deadline date approaching

  // TODO: Add svg notification circle for new notifications

  return (
    // Nav Container
    <div className="flex h-16">
      <div className="border h-full w-80">
        {/* bell and profile picture */}
        <div className="flex justify-evenly items-center m-1">
          <img
            src={Images.profile_pic}
            alt="Profile Pic"
            className="h-12 rounded-full border-2 border-black"
          />
          <img
            src={Images.bellIcon24}
            alt="Bell Icon 24"
            className="h-7 w-8 m5"
          />
        </div>
      </div>
      <div className="border-b h-full w-full flex justify-center">
        {/* search bar */}
        <form action="submit">
          <input
            type="text"
            placeholder="Search for Project or Task"
            className="rounded-md h-10 w-[500px] px-3 m-3 mr-36 shadow-md"
          />
        </form>
      </div>
    </div>
  );
};

export default DashboardTopNav;
