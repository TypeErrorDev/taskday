import Images from "../../assets/Images";

const DashboardSideNav = () => {
  return (
    <div className="flex flex-col justify-start items-center w-36 md:w-48 h-screen sticky bg-slate-100 border-r">
      <div className="flex flex-col mt-20 justify-center">
        <button className="border h-10 w-full rounded-lg bg-gradient-to-br  from-[#1B0EF1] from-[1%] to-[#8743FF] text-white shadow-md">
          New Project
        </button>
        <div className="list-none flex justify-evenly items-center w-32 py-1 mb-3 mt-10 rounded-full hover:bg-[#ab93db74] hover:shadow-md cursor-pointer">
          <img src={Images.projects} alt="Projects Icon" className="h-5" />
          <p>Projects</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="list-none flex justify-evenly items-center w-32 py-1 mb-3 rounded-full hover:bg-[#ab93db74] hover:shadow-md cursor-pointer">
          <img src={Images.tasks} alt="Projects Icon" className="h-5" />
          <p className="mr-5">Tasks</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="list-none flex justify-evenly items-center w-32 py-1 mb-3 rounded-full hover:bg-[#ab93db74] hover:shadow-md cursor-pointer">
          <img
            src={Images.analytics}
            alt="Projects Icon"
            className="h-5 mx-1"
          />
          <p>Analytics</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="list-none flex justify-evenly items-center w-32 py-1 mb-3 rounded-full hover:bg-[#ab93db74] hover:shadow-md cursor-pointer">
          <img src={Images.settings} alt="Projects Icon" className="h-5 " />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideNav;
