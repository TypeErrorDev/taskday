import { useState } from "react";
import { supabase } from "../createClient";

import Images from "../assets/Images";
const Waitlist = () => {
  const [waitlistEmail, setWaitlistEmail] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setWaitlistEmail((prevWaitlistEmail) => ({
      ...prevWaitlistEmail,
      [e.target.name]: e.target.value,
    }));
  };

  const submitWaitList = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("Waitlist")
        .insert([{ email: waitlistEmail.email, status: "pending" }])
        .select();

      if (error) {
        console.error("Error adding email to Waitlist:", error);
        alert(`Failed adding to Waitlist: ${error.message}`);
        return;
      }
      alert("Successfully added to waitlist!");
      console.log("Waitlist data:", data);
      setWaitlistEmail({ email: "" });
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className="bg-[#D0DCEC] flex  flex-col justify-center h-full">
      <div className="flex flex-col justify-center items-center bg-[#EFF6FF] w-11/12 m-5 md:w-[600px] md:m-auto md:mt-5 md:mb-5 rounded-3xl shadow-zinc-600 shadow-lg">
        <h1 className="text-purple-600 font-serif font-bold text-4xl mt-10">
          TaskDay Features
        </h1>
        {/* Cards starting */}
        <div className="flex flex-col justify-center mt-10">
          <div className="flex flex-col justify-center items-start h-[150px] w-96 rounded-lg border shadow-lg bg-white md:w-96 md:mb-3">
            <div className="h-full m-3 w-fit">
              <div className="flex justify-start items-center">
                <img
                  src={Images.calendarIcon}
                  alt="Calendar Icon"
                  className="mr-5"
                />

                <h1 className="text-xl font-semibold mt-3">Smart Scheduling</h1>
              </div>
              <p className="text-[#6F6F6F] mt-3">
                Intelligent calendar integration that optimizes your daily tasks
                and projects
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start h-[150px] w-96 rounded-lg border shadow-lg mt-5 md:w-96 lg:mt-0 bg-white md:mb-3">
            <div className="h-full m-3 ">
              <div className="flex justify-start items-center">
                <img src={Images.clockIcon} alt="Click Icon" className="mr-5" />
                <h1 className="text-xl font-semibold mt-3">Time Blocking</h1>
              </div>
              <p className="text-[#6F6F6F] mt-3">
                Effortlessly manage your time with advanced time blocking and
                productivity techniques.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start h-[150px] w-96 md:w-96 rounded-lg border shadow-lg mt-5 lg:mt-0 lg:mr-5 bg-white md:mb-3">
            <div className="h-full m-3">
              <div className="flex justify-start items-center">
                <img
                  src={Images.lightningIcon}
                  alt="Lightning Icon"
                  className="mr-3"
                />
                <h1 className="text-xl font-semibold mt-3">
                  AI-Powered Insights
                </h1>
              </div>
              <p className="text-[#6F6F6F] mt-3">
                Get personalized productivity recommendations based on your work
                patterns.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start h-[150px] w-96 md:w-96 rounded-lg border shadow-lg mt-5 lg:mt-0 lg:mr-5 bg-white md:flex-[50%]">
            <div className="h-full m-3">
              <div className="flex justify-start items-center">
                <img
                  src={Images.targetIcon}
                  alt="Lightning Icon"
                  className="mr-3"
                />
                <h1 className="text-xl font-semibold mt-3">Goal Tracking</h1>
              </div>
              <p className="text-[#6F6F6F] mt-3">
                Set, monitor and achieve your personal and professional goals
                with precision.
              </p>
            </div>
          </div>
        </div>
        {/* This is where they submit for waitlist */}
        <div className="bg-white w-full h-[375px] mt-10 flex flex-col justify-start items-center rounded-b-3xl text-center px-5 md:h-[330px]">
          <h1 className="text-4xl font-bold mt-5">
            Join TaskDay's Early Access
          </h1>
          <p className="text-[#6F6F6F] mt-5 md:w-[450px]">
            Transform your productivity. Be among the first to experience the
            future of Project Management.
          </p>
          <form action="submit" onSubmit={submitWaitList}>
            <input
              type="email"
              placeholder="Enter your Email Address"
              name="email"
              required
              className="border-2 h-12 w-full rounded-lg px-3 mt-5 md:w-96"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="bg-purple-600 shadow-md shadow-purple-200 text-white font-semibold h-12 w-full mt-2 rounded-md hover:bg-white hover:border-purple-600 hover:border-2 hover:text-purple-600 md:mx-4 md:w-96"
            >
              Join our Waitlist
            </button>
            <div className="flex justify-center items-center mt-5 ">
              <img src={Images.peopleIcon} alt="People Icon" />
              <p className="pl-3 text-[#6F6F6F] text-xl">
                150+ professionals are waiting
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
