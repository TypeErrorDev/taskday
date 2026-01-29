import { useState, useEffect, useRef } from "react";
import Images from "../../../assets/Images";
import NofiticationModal from "./NofiticationModal";

const DashboardTopNav = ({ signOut }) => {
  // State to control modal visibility
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Lifted state to keep track of dismissed notification IDs across modal toggles
  const [dismissedIds, setDismissedIds] = useState([]);

  const notificationRef = useRef(null);

  const notificationOnClick = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  // Close modal when clicking outside of the bell icon or modal area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
    };

    if (isNotificationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 h-20 border-b bg-white z-10 flex">
      {/* Logo Section */}
      <div className="border-r w-[254px] h-[80px] flex justify-center items-center text-4xl font-mono text-purple-600">
        <img src={Images.logo} alt="TaskDay Logo" className="h-20 w-44 p-2" />
      </div>

      {/* Main Navigation Controls */}
      <div className="w-full flex justify-center items-center">
        <button
          className="border h-10 w-20 mr-2 rounded-lg bg-gradient-to-br from-[#1B0EF1] from-[1%] to-[#8743FF] text-white shadow-md transition-all hover:brightness-110"
          onClick={signOut}
        >
          Signout
        </button>
        <form action="submit" className="hidden lg:block">
          <input
            type="text"
            placeholder="Search for a Project or Task"
            className="border shadow-md rounded-lg p-2 w-80 focus:outline-purple-500"
          />
        </form>
      </div>

      {/* User Actions & Notifications Container */}
      <div
        className="hidden lg:flex lg:justify-center lg:items-center mr-10 relative"
        ref={notificationRef}
      >
        {/* Notification Bell */}
        <div className="relative cursor-pointer" onClick={notificationOnClick}>
          <img
            src={Images.bellIcon24}
            alt="Notification Icon"
            className="h-10 w-12 mr-10"
          />
          {/* Visual indicator for new notifications can be added here later */}
        </div>

        {/* Dropdown Modal with Lifted State */}
        {isNotificationOpen && (
          <div className="absolute top-16 right-24 z-50">
            <NofiticationModal
              dismissedIds={dismissedIds}
              setDismissedIds={setDismissedIds}
            />
          </div>
        )}

        {/* Profile Picture */}
        <img
          src={Images.profile_pic}
          alt="Profile Pic"
          className="rounded-full h-16 w-[70px] border-4 border-purple-600 shadow-sm"
        />
      </div>
    </div>
  );
};

export default DashboardTopNav;
