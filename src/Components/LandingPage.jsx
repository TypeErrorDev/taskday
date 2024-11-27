// import { Link } from "react-router-dom";
import CTA from "./CTA";
import FeaturesSections from "./FeaturesSections";
import ActiveStats from "./ActiveStats";
import LandingNav from "./LandingNav";

const LandingPage = () => {
  return (
    <div>
      <LandingNav />
      <CTA />
      <FeaturesSections />
      <ActiveStats />
    </div>
  );
};

export default LandingPage;
