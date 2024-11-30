import Images from "../assets/Images";

const FeaturesSections = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#F8F8F8] h-[850px] lg:h-[500px] mt-10 pb-10 ">
        {/* Top Text */}
        <div className="flex justify-center items-center flex-col text-center  p-5 w-[380px] md:w-fit">
          <h1 className="text-2xl font-bold">
            Everything you need to manage projects effectively
          </h1>
          <p className="mt-5 text-purple-500 font-semibold text-xl italic ">
            Powerful features that help you take control of your projects
          </p>
        </div>
        {/* Feature Cards */}
        <div className="flex flex-col justify-center md:mt-5 lg:flex-row">
          <div className="flex flex-col justify-center items-start h-[200px] w-80 rounded-lg border shadow-lg md:w-96 lg:mr-5">
            <div className="h-full m-3">
              <img src={Images.taskIcon} alt="Task Icon" />
              <h1 className="text-xl font-semibold mt-3">Task Management</h1>
              <p className="text-[#6F6F6F] mt-3">
                Create, assign, and track tasks with ease. Set priorities and
                deadlines to keep your projects on schedule.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start h-[200px] w-80 md:w-96 rounded-lg border shadow-lg mt-5 lg:mt-0 lg:mr-5">
            <div className="h-full m-3">
              <img src={Images.analyticsIcon} alt="Task Icon" />
              <h1 className="text-xl font-semibold mt-3">
                Analytics Dashboard
              </h1>
              <p className="text-[#6F6F6F] mt-3">
                Get insights into your project progress with real-time analytics
                and visual reports.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start h-[200px] w-80 rounded-lg border shadow-lg mt-5 md:w-96 lg:mt-0">
            <div className="h-full m-3">
              <img src={Images.clockIcon} alt="Task Icon" />
              <h1 className="text-xl font-semibold mt-3">Time Tracking</h1>
              <p className="text-[#6F6F6F] mt-3">
                Monitor time spent on tasks and projects to optimize your team’s
                productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSections;
