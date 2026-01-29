import { useState, useEffect, useRef } from "react"; // Added useEffect and useRef
import Images from "../../../assets/Images";
import NofificationModal from "./NofiticationModal";

const DashboardTopNav = ({ signOut }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null); // Reference to the notification container

  const notificationOnClick = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the modal is open and the click is NOT inside the notificationRef area
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
    };

    // Add listener when modal is open
    if (isNotificationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 h-20 border-b bg-white z-10 flex">
      <div className="border-r w-[254px] h-[80px] flex justify-center items-center text-4xl font-mono text-purple-600">
        <img src={Images.logo} alt="TaskDay Logo" className="h-20 w-44 p-2" />
      </div>

      <div className="w-full flex justify-center items-center">
        <button
          className="border h-10 w-20 mr-2 rounded-lg bg-gradient-to-br from-[#1B0EF1] from-[1%] to-[#8743FF] text-white shadow-md"
          onClick={signOut}
        >
          Signout
        </button>
        <form action="submit" className="hidden lg:block">
          <input
            type="text"
            placeholder="Search for a Project or Task"
            className="border shadow-md rounded-lg p-2 w-80"
          />
        </form>
      </div>

      {/* Attach the ref to this container so clicks inside it are ignored by the "close" logic */}
      <div
        className="hidden lg:flex lg:justify-center lg:items-center mr-10 relative"
        ref={notificationRef}
      >
        <img
          src={Images.bellIcon24}
          alt="Notification Icon"
          className="h-10 w-12 mr-10 cursor-pointer"
          onClick={notificationOnClick}
        />

        {isNotificationOpen && (
          <div className="absolute top-16 right-24">
            <NofificationModal />
          </div>
        )}

        <img
          src={Images.profile_pic}
          alt="Profile Pic"
          className="rounded-full h-16 w-[70px] border-4 border-purple-600"
        />
      </div>
    </div>
  );
};

export default DashboardTopNav;
