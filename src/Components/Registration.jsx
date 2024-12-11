import { useState } from "react";
import { supabase } from "../createClient";

import LandingNav from "./LandingNav";
import { Link } from "react-router-dom";

const Registration = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.username,
          },
        },
      });
      if (error) {
        console.error("Error with signing up new user:", error);
        alert(`Sign up has failed: ${error.message}`);
        return;
      }
      if (data?.user) {
        const { error: insertError } = await supabase.from("Users").insert([
          {
            id: data.user.id,
            username: formData.username,
            email: formData.email,
          },
        ]);
        if (insertError) {
          console.error("Insert Error:", insertError);
          alert(`Failed to save user data: ${insertError.message}`);
          return;
        }
        alert(
          "Sign-up successful! Please check your email for verification link"
        );
        onLogin(formData.username);
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
        Create Your Account
      </h1>
      <form
        className=" mt-10 flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
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
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={handleChange}
          className="border-2 h-12 w-80 rounded-lg px-3 mt-5"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={handleChange}
          className="border-2 h-12 w-80 rounded-lg px-3 mt-5"
        />
        <label className="text-[#6F6F6F] text-sm mt-5">
          <input
            type="checkbox"
            className="h-4 w-4 border-[#6F6F6F]"
            required
          />
          <span className="text-black p-4">
            I agree to the Terms of Service
          </span>
        </label>
        <button
          type="submit"
          className="bg-purple-600 shadow-md text-white font-semibold h-9 w-80 mt-5 rounded-md  hover:bg-slate-800 md:mx-4"
        >
          Submit
        </button>
        <Link to="/">
          <button
            type="reset"
            className="bg-white shadow-md text-black font-semibold h-9 w-80 my-2 rounded-md  hover:bg-slate-800 hover:text-white md:mx-4"
          >
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
