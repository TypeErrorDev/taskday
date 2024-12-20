import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./createClient";

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
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

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
    console.log("User signed out successfully!");
    navigate("/login");
  };

  // Check if the user is already authenticated
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
      setIsAuthenticated(true);
    }
  }, []);

  // useEffect to fetch users, projects, and tasks from the database
  useEffect(() => {
    fetchUsers();
    fetchProjects();
    fetchTasks();
  }, []);

  // Function to fetch users from the database
  async function fetchUsers() {
    let { data, error } = await supabase.from("Users").select("*");
    if (error) {
      console.error("Error fetching users:", error);
      return;
    } else {
      setUsers(data);
    }
  }

  // Function to fetch projects from the database
  const fetchProjects = async () => {
    const { data, error } = await supabase.from("Projects").select("*");
    if (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
    setProjects(data);
  };

  // Function to fetch tasks from the database
  const fetchTasks = async () => {
    const { data, error } = await supabase.from("Tasks").select("*");
    if (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
    setTasks(data);
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
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Dashboard
              username={username}
              signOut={handleLogout}
              projects={projects}
              tasks={tasks}
            />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
