import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import { supabase } from "./createClient";

function App() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
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
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
    </Routes>
  );
}

export default App;
