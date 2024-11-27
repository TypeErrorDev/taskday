import { useState } from "react";
import { supabase } from "../createClient";

const Login = () => {
  const [formData, setFormData] = useState({
<<<<<<< HEAD
    username: "",
=======
    userName: "",
>>>>>>> 2a85b9b04616247992e049a03d2d208740736d0f
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
<<<<<<< HEAD
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
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred.");
=======
            userName: formData.userName,
          },
        },
      });
    } catch (error) {
      alert(error);
>>>>>>> 2a85b9b04616247992e049a03d2d208740736d0f
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
<<<<<<< HEAD
          name="username"
=======
          name="userName"
>>>>>>> 2a85b9b04616247992e049a03d2d208740736d0f
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
