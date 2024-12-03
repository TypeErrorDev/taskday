import Images from "../assets/Images";
const Waitlist = () => {
  return (
    <div className="bg-[#D0DCEC] flex justify-center h-full">
      <div className="flex flex-col justify-center items-center bg-[#EFF6FF] w-11/12 mt-5 rounded-md">
        <h1 className="text-purple-600 font-serif font-bold text-5xl mt-10">
          TaskDay Features
        </h1>
        {/* Cards starting */}
        <div className="flex flex-col justify-center md:mt-5 lg:flex-row mt-10">
          <div className="flex flex-col justify-center items-start h-[200px] w-80 rounded-lg border shadow-lg md:w-96 lg:mr-5 bg-white">
            <div className="h-full m-3">
              <img src={Images.calendarIcon} alt="Calendar Icon" />

              <h1 className="text-xl font-semibold mt-3">Smart Scheduling</h1>
              <p className="text-[#6F6F6F] mt-3">
                Intelligent calendar integration that optimizes your daily tasks
                and projects
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start h-[200px] w-80 rounded-lg border shadow-lg mt-5 md:w-96 lg:mt-0 bg-white">
            <div className="h-full m-3">
              <img src={Images.clockIcon} alt="Click Icon" />
              <h1 className="text-xl font-semibold mt-3">Time Blocking</h1>
              <p className="text-[#6F6F6F] mt-3">
                Effortlessly manage your time with advanced time blocking and
                productivity techniques.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start h-[200px] w-80 md:w-96 rounded-lg border shadow-lg mt-5 lg:mt-0 lg:mr-5 bg-white">
            <div className="h-full m-3">
              <img src={Images.lightningIcon} alt="Lightning Icon" />
              <h1 className="text-xl font-semibold mt-3">
                AI-Powered Insights
              </h1>
              <p className="text-[#6F6F6F] mt-3">
                Get personalized productivity recommendations based on your work
                patterns.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start h-[200px] w-80 md:w-96 rounded-lg border shadow-lg mt-5 lg:mt-0 lg:mr-5 bg-white">
            <div className="h-full m-3">
              <img src={Images.targetIcon} alt="Lightning Icon" />
              <h1 className="text-xl font-semibold mt-3">Goal Tracking</h1>
              <p className="text-[#6F6F6F] mt-3">
                Set, monitor and achieve your personal and professional goals
                with precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
