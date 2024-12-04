// ---------------------------
// Required imports
// ---------------------------

// ---------------------------
// Import components
// ---------------------------
import Images from "../assets/Images";
// ---------------------------
// Code Begins
// ---------------------------
const Socials = () => {
  return (
    <div className="bg-[#D0DCEC] flex flex-col justify-center items-center h-screen">
      <div className="h-fit w-96">
        <a href="https://www.x.com/typeerrordev" target="_blank">
          <div className="h-14 w-30 rounded-full bg-gradient-to-br from-[#6C38CA] from-40% to-[#B28FF1] flex justify-center text-center shadow-black shadow-lg hover:transition-all hover:scale-105 mb-5 ">
            <img src={Images.xIcon} alt="X Icon" className="mr-5" />
          </div>
        </a>
        <a href="https://www.instagram.com/typeerrordev/" target="_blank">
          <div className="h-14 w-30 rounded-full bg-gradient-to-br from-[#6C38CA] from-40% to-[#B28FF1] flex justify-center text-center shadow-black shadow-lg hover:transition-all hover:scale-105 mb-5">
            <img src={Images.instagramIcon} alt="X Icon" className="mr-5" />
          </div>
        </a>
        <a
          href="https://bsky.app/profile/typeerrordev.bsky.social"
          target="_blank"
        >
          <div className="h-14 w-30 rounded-full bg-gradient-to-br from-[#6C38CA] from-40% to-[#B28FF1] flex justify-center text-center shadow-black shadow-lg hover:transition-all hover:scale-105 mb-5">
            <img src={Images.blueskyIcon} alt="X Icon" className="mr-5" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Socials;
