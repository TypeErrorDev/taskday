import { Link } from "react-router-dom";
import Login from "./Login";

const CTA = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mt-16">Track Projects with</h1>
        <span className="text-4xl font-extrabold text-purple-600">
          Confidence
        </span>
        <div className="flex justify-center items-center text-wrap w-[400px] text-center mt-5 text-lg">
          <p className="text-[#6F6F6F] leading-loose">
            Streamline your workflow, boost productivity, and never miss a
            deadline. The ultimate project tracking solution for developers and
            teams.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link to="/login" element={<Login />}>
            <button className="bg-purple-600 shadow-md text-white font-semibold h-9 w-96 my-4 rounded-md hover:transition-transform hover:scale-[1.02] hover:bg-slate-800">
              Get Started Free <span className="font-bold h-4 w-3">→</span>
            </button>
          </Link>
          <a
            href="https://github.com/TypeErrorDev/project-tracking"
            target="_blank"
          >
            <button className="border shadow-md font-semibold h-9 w-96 hover:transition-transform hover:scale-[1.02] hover:bg-[#faf9f9] rounded-md">
              View on Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
