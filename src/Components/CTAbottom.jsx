import { Link } from "react-router-dom";

import Login from "./Login";

const CTAbottom = () => {
  return (
    <div className=" flex justify-center h-[550px] w-screen bg-gradient-to-br from-[#6C38CA] from-40% to-[#B28FF1]">
      <div className="flex flex-col justify-center items-center h-full p-10 md:w-[700px]">
        <p className=" text-4xl font-extrabold text-white mb-5 text-center">
          Ready to supercharge your project management?
        </p>
        <p className="text-3xl mt-5 text-white text-center mb-10">
          Join thousands of developers and people managers who are already using
          <span className="font-semibold"> TaskDay</span> to track their
          projects!
        </p>
        <Link to="/login" element={<Login />}>
          <button className="mt-5 border shadow-md font-semibold h-9 w-80 md:w-60 hover:transition-transform hover:scale-[1.02] bg-white hover:bg-[#faf9f] rounded-md">
            Get Started For Free <span className="font-bold h-4 w-3">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTAbottom;
