import { useState } from "react";
import { supabase } from "../createClient";
import { useNavigate, Link } from "react-router-dom";

import LandingNav from "./LandingNav";

const Login = ({ onLogin }) => {
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
        // Fetch the username from the Users table
        const { data: userData, error: userError } = await supabase
          .from("Users")
          .select("username")
          .eq("id", data.user.id)
          .single();

        if (userError) {
          console.error("Error fetching username:", userError);
          alert("Could not retrieve username");
          return;
        }

        // Call onLogin with the fetched username
        onLogin(userData.username);
        alert("Login successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred.");
    }
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data, error } = await supabase.auth.signInWithPassword({
  //       email: formData.email,
  //       password: formData.password,
  //     });

  //     if (error) {
  //       console.error("Error logging in:", error);
  //       alert(`Login has failed: ${error.message}`);
  //       return;
  //     }

  //     if (data?.user) {
  //       alert("Login successful!");
  //       onLogin(formData.email);
  //       console.log("User data:", data.user);
  //       navigate("/dashboard");
  //     }
  //   } catch (error) {
  //     console.error("Unexpected error:", error);
  //     alert("An unexpected error occurred.");
  //   }
  // };

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
          className="bg-purple-600 shadow-md text-white font-semibold h-9 w-80 mt-5 rounded-md hover:transition-transform hover:scale-[1.02] hover:bg-slate-800 md:mx-4"
        >
          Submit
        </button>
        <Link to="/">
          <button
            type="reset"
            className="bg-white shadow-md text-black font-semibold h-9 w-80 mt-3 rounded-md  hover:bg-slate-800 hover:text-white md:mx-4"
          >
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
