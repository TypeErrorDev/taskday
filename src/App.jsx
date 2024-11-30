import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./createClient";

import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Socials from "./Components/Socials";

function App() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/register");
  };

  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    let { data, error } = await supabase.from("Users").select("*");

    setUsers(data);
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/register"
        element={<Registration onLogin={handleLogin} />}
      />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/socials" element={<Socials />} />
    </Routes>
  );
}

export default App;
