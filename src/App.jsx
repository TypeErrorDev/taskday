import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./createClient";

// import LandingPage from "./Components/LandingPage";
import Waitlist from "./Components/Waitlist";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Socials from "./Components/Socials";
import Dashboard from "./Components/AuthComponents/Dashboard/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";
import LandingPage from "./Components/LandingPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedusername = localStorage.getItem("username");
    return Boolean(savedusername);
  });
  const [username, setUsername] = useState(() => {
    const savedUsername = localStorage.getItem("username");
    return savedUsername || "";
  });

  const navigate = useNavigate();

  const handleLogin = (loginUsername) => {
    setUsername(loginUsername);
    localStorage.setItem("username", loginUsername);
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setUsername("");
    setIsAuthenticated(false);
    localStorage.removeItem("username");
    supabase.auth.signOut();
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
      setIsAuthenticated(true);
    }
  }, []);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    let { data, error } = await supabase.from("Users").select("*");
    if (error) {
      console.error("Error fetching users:", error);
      return;
    } else {
      setUsers(data);
    }
  }

  const fetchProjects = async () => {
    const { data, error } = await supabase.from("Projects").select("*");
    if (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
    console.log("Supabase Projects Data:", data); // Debugging line
    return data;
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Waitlist />} />
      <Route path="/home" element={<LandingPage />} />
      <Route
        path="/register"
        element={<Registration onLogin={handleLogin} />}
      />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/socials" element={<Socials />} />
      {/* Authenticated Routes */}
      <Route
        path="/dashboard"
        element={
          <Dashboard
            username={username}
            signOut={handleLogout}
            projects={fetchProjects}
          />
          // <PrivateRoute isAuthenticated={isAuthenticated}>
          //   <Dashboard username={username} signOut={handleLogout} />
          // </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
