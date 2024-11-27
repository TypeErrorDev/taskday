import Images from "../../public/assets/Images";

const FeaturesSections = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#F8F8F8] max-h-fit mt-20">
        {/* Top Text */}
        <div className="flex justify-center items-center flex-col text-center  p-5">
          <h1 className="text-2xl font-bold italic">
            Everything you need to manage projects effectively
          </h1>
          <p className="mt-5 text-purple-500 font-semibold text-xl italic ">
            Powerful features that help you take control of your projects
          </p>
        </div>
        {/* Feature Cards */}
        <div>
          <div className="flex flex-col justify-center items-start h-[150px] w-96 rounded-md border shadow-lg">
            <div className="bg-purple-400 rounded-lg m-5">
              <img src={Images.taskIcon} alt="Task Icon" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Task Management</h1>
              <p className="text-[#6F6F6F]">
                Create, assign, and track tasks with ease. Set priorities and
                deadlines to keep your projects on schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSections;
