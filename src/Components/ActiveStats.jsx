const ActiveStats = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="text-center">
        {/* Dynamically count users */}
        <p className="text-purple-700 text-4xl">1,500+</p>
        <p className="text-2xl text-[#4e4d4d] m-2">Active Users</p>
      </div>
      <div className="text-center mt-10">
        {/* Dynamically count projects */}
        <p className="text-purple-700 text-4xl">15,000+</p>
        <p className="text-2xl text-[#4e4d4d] m-2">Projects Tracked</p>
      </div>
      <div className="text-center mt-10">
        {/* Dynamically count projects */}
        <p className="text-purple-700 text-4xl">99.9%</p>
        <p className="text-2xl text-[#4e4d4d] mb-5">Uptime</p>
      </div>
    </div>
  );
};

export default ActiveStats;
