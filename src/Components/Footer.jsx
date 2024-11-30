import { Link } from "react-router-dom";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="h-[375px] w-screen flex flex-col justify-center items-center ">
      <div className="text-center">
        <p className="text-xl font-extrabold mb-2">Product</p>
        <p className="text-[#6F6F6F]">Github</p>
        <p className="mb-2 text-[#6F6F6F]">
          Pricing{" "}
          <span className="text-[10px] text-purple-600">(Coming Soon)</span>
        </p>
      </div>
      <div className="text-center mt-5">
        <p className="text-xl font-extrabold mb-2">Company</p>
        <Link to="/socials" element={<Socials />}>
          <p className="mb-2 text-[#6F6F6F]">Socials</p>
        </Link>
        <p className="text-[#6F6F6F]">
          Roadmap{" "}
          <span className="text-[10px] text-purple-600">(Coming Soon)</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
