// import { Link } from "react-router-dom";
import CTA from "./CTA";
import FeaturesSections from "./FeaturesSections";
import LandingNav from "./LandingNav";

const LandingPage = () => {
  return (
    <div>
      <LandingNav />
      <CTA />
      <FeaturesSections />
    </div>
  );
};

export default LandingPage;
