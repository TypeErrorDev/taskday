// import { useState } from "react";
import Images from "../../../assets/Images";

const DashboardSideNav = ({ setActiveComponent }) => {
  const handleLinkClick = (component) => {
    setActiveComponent(component);
  };

  const navLinkEls = document.querySelectorAll(".nav__link");
  navLinkEls.forEach((navLinkEl) => {
    navLinkEl.addEventListener("click", () => {
      document.querySelector(".active")?.classList.remove("active");
      navLinkEl.classList.add("active");
    });
  });

  return (
    <div className="fixed top-20 left-0 w-36 md:w-48 h-[calc(100vh-80px)] bg-slate-100 border-r z-10 flex flex-col justify-start items-center">
      <div className="flex flex-col mt-20 justify-center">
        <button className="border h-10 w-full rounded-lg bg-gradient-to-br from-[#1B0EF1] from-[1%] to-[#8743FF] text-white shadow-md">
          New Project
        </button>
        <li
          className="nav__link active list-none flex justify-evenly items-center w-32 py-1 mb-3 mt-10 rounded-full shadow-md cursor-pointer"
          onClick={() => handleLinkClick("Projects")}
        >
          <img src={Images.projects} alt="Projects Icon" className="h-5" />
          <p>Projects</p>
        </li>
      </div>
      <div className="flex flex-col">
        <li
          className="nav__link list-none flex justify-evenly items-center w-32 py-1 mb-3 rounded-full shadow-md cursor-pointer"
          onClick={() => handleLinkClick("Tasks")}
        >
          <img src={Images.tasks} alt="Tasks Icon" className="h-5" />
          <p className="mr-5">Tasks</p>
        </li>
      </div>
      <div className="flex flex-col">
        <li
          className="nav__link list-none flex justify-evenly items-center w-32 py-1 mb-3 rounded-full shadow-md cursor-pointer"
          onClick={() => handleLinkClick("Analytics")}
        >
          <img
            src={Images.analytics}
            alt="Analytics Icon"
            className="h-5 mx-1"
          />
          <p>Analytics</p>
        </li>
      </div>
      <div className="flex flex-col">
        <li
          className="nav__link list-none flex justify-evenly items-center w-32 py-1 mb-3 rounded-full shadow-md cursor-pointer"
          onClick={() => handleLinkClick("Settings")}
        >
          <img src={Images.settings} alt="Settings Icon" className="h-5" />
          <p>Settings</p>
        </li>
      </div>
    </div>
  );
};

export default DashboardSideNav;
