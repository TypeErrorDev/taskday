import { Link } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";

const CTA = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mt-16">Track Projects with</h1>
        <span className="text-4xl font-extrabold text-purple-600">
          Confidence
        </span>
        <div className="flex justify-center items-center text-wrap w-[350px] md:w-[700px] text-center mt-5 text-lg">
          <p className="text-[#6F6F6F] leading-loose">
            Streamline your workflow, boost productivity, and never miss a
            deadline. The ultimate project tracking solution for developers and
            teams.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row">
          <Link to="/register" element={<Registration />}>
            <button className="bg-purple-600 shadow-md text-white font-semibold h-9 w-80 my-4 rounded-md hover:transition-transform hover:scale-[1.02] hover:bg-slate-800 md:w-60 md:mx-4">
              Get Started For Free <span className="font-bold h-4 w-3">→</span>
            </button>
          </Link>
          <Link to="/login" element={<Login />}>
            <button className="border shadow-md font-semibold h-9 w-80 md:w-60 hover:transition-transform hover:scale-[1.02] hover:bg-[#faf9f9] rounded-md ">
              Already Registered?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
