import Images from "../../assets/Images";

const DashboardSideNav = () => {
  return (
    <div className="flex flex-col justify-center items-center w-36 h-screen sticky bg-slate-100 border-r">
      <div className="flex flex-col">
        <div className="list-none flex justify-evenly items-center w-32 py-1 mb-3 rounded-full hover:bg-[#ab93db74] cursor-pointer">
          <img src={Images.projects} alt="Projects Icon" className="h-5" />
          <p>Projects</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="list-none flex justify-evenly items-center w-32 py-1 mb-3 rounded-full hover:bg-[#ab93db74] cursor-pointer">
          <img src={Images.tasks} alt="Projects Icon" className="h-5" />
          <p className="mr-5">Tasks</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="list-none flex justify-evenly items-center w-32 py-1 mb-3 rounded-full hover:bg-[#ab93db74] cursor-pointer">
          <img
            src={Images.analytics}
            alt="Projects Icon"
            className="h-5 mx-1"
          />
          <p className="">Analytics</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="list-none flex justify-evenly items-center w-32 py-1 mb-3 rounded-full hover:bg-[#ab93db74] cursor-pointer">
          <img
            src={Images.analytics}
            alt="Projects Icon"
            className="h-5 mx-1"
          />
          <p className="">Analytics</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideNav;
