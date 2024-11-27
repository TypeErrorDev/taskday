import { useState } from "react";
import { supabase } from "../createClient";

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.userName,
          },
        },
      });

      if (error) {
        console.error("Sign-up error:", error);
        alert(`Error: ${error.message}`);
      } else {
        console.log("Sign-up successful:", data);
        alert("Check your email for the verification link!");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
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
        <button type="submit" className="border" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Login;
