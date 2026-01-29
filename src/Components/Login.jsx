import { useState } from "react";
import { supabase } from "../createClient";
import { useNavigate, Link } from "react-router-dom";

import LandingNav from "./LandingNav";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
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
      // 1. Attempt the login
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      // 2. Immediate Error Check: This prevents the 'null' reading error
      if (error) {
        console.error("Login failed:", error.message);
        alert(`Login failed: ${error.message}`);
        return; // Exit the function here
      }

      // 3. If we have a user, fetch their profile from the 'Users' table
      if (data?.user) {
        const { data: userData, error: userError } = await supabase
          .from("Users")
          .select("username")
          .eq("id", data.user.id) // This matches the ID we linked in Registration
          .single();

        if (userError) {
          console.error("Error fetching profile:", userError);
          alert("Login successful, but profile data could not be found.");
          return;
        }

        // 4. Finalize Login
        onLogin(userData.username);
        // alert("Login successful!");
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Unexpected error during login flow:", err);
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
          type="email"
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
            type="button"
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
