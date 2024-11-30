// import { Link } from "react-router-dom";
import LandingNav from "./LandingNav";
import CTA from "./CTA";
import FeaturesSections from "./FeaturesSections";
import ActiveStats from "./ActiveStats";
import CTAbottom from "./CTAbottom";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <LandingNav />
      <CTA />
      <FeaturesSections />
      <ActiveStats />
      <CTAbottom />
      <Footer />
    </div>
  );
};

export default LandingPage;
