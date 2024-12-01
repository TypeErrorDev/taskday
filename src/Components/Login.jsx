import { useState } from "react";
import { supabase } from "../createClient";
import { useNavigate } from "react-router-dom";

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
        navigate("/");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="h-28 w-24 bg-purple-600 rounded-md"></div>
        <span>WebApp Name</span>
      </div>
      <form
        className="mt-52 flex flex-col justify-center items-center"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          className="border"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className="border"
        />
        <button type="submit" className="border">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
