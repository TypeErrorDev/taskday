import Images from "../../assets/Images";

const DashboardSideNav = () => {
  return (
    <div className="container border-r w-[274px] h-[845px]">
      <div className="flex justify-center items-center h-[775px] ">
        <button className="border-2 rounded-xl w-56 h-10 bg-gradient-to-br from-[#1B0EF1] from-27% to-[#8743FF] text-white text-xl text-center">
          New Project
        </button>
      </div>
      <div className="flex justify-around items-center border-t-[1px] h-[70px]">
        <img src={Images.projects} alt="X Icon" className="h-9" />
      </div>
    </div>
  );
};

export default DashboardSideNav;
