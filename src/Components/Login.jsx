import { useState } from "react";
import { supabase } from "../createClient";

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
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
    console.log("submitted");
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            userName: formData.userName,
          },
        },
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <form
        className="mt-52 flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          name="userName"
          onChange={handleChange}
          className="border"
        />
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
