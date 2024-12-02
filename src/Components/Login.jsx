import { useState } from "react";
import { supabase } from "../createClient";
import { useNavigate } from "react-router-dom";

import LandingNav from "./LandingNav";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        console.error("Error logging in:", error);
        alert(`Login has failed: ${error.message}`);
        return;
      }

      if (data?.user) {
        alert("Login successful!");
        console.log();
        // TODO: change to navigate("/dashboard")
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div>
      <LandingNav />
      <h1 className="text-5xl text-center mt-20 font-semibold">
        Login to your account
      </h1>
      <form
        className=" mt-10 flex flex-col justify-center items-center"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          required
          onChange={handleChange}
          className="border-2 h-12 w-80 rounded-lg px-3 "
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={handleChange}
          className="border-2 h-12 w-80 rounded-lg px-3 mt-5"
        />

        <button
          type="submit"
          className="bg-purple-600 shadow-md text-white font-semibold h-9 w-80 my-5 rounded-md hover:transition-transform hover:scale-[1.02] hover:bg-slate-800 md:mx-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
