const ProjectsSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[800px] md:w-fit animate-pulse">
      <ul className="m-auto">
        <li className="bg-white border flex flex-col mt-6 w-full md:w-[600px] lg:w-[800px] p-4 rounded-lg shadow-md">
          <div className="flex justify-between w-full">
            <div>
              <h2 className="h-5 w-36 border rounded-lg bg-zinc-100 shadow-md"></h2>
              <p className=" w-16 mt-2 h-4 border rounded-lg bg-zinc-100 shadow-md"></p>
              <p className="w-24 h-4 mt-2 border rounded-lg bg-zinc-100 shadow-md"></p>
            </div>
            <div className="w-fit">
              <p className="w-24 h-6 rounded-full bg-zinc-100 border shadow-md"></p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <span className="w-20 h-4 border rounded-lg bg-zinc-100 shadow-md"></span>
          </div>
          <div className="progress-bar w-full h-2 bg-gray-200 rounded-lg mt-5 mb-5">
            <div className="h-full rounded-lg"></div>
            <div className="w-40 h-4 border rounded-lg bg-zinc-100 shadow-md mt-2"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsSkeleton;
