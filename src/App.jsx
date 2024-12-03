import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./createClient";

// import LandingPage from "./Components/LandingPage";
import Waitlist from "./Components/Waitlist";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Socials from "./Components/Socials";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";
import LandingPage from "./Components/LandingPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    if (error) {
      console.error("Error fetching users:", error);
      return;
    } else {
      setUsers(data);
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Waitlist />} />
      <Route path="/home" element={<LandingPage />} />
      <Route
        path="/register"
        element={<Registration onLogin={handleLogin} />}
      />

      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/socials" element={<Socials />} />
      {/* PROTECT THIS ROUTE FOR ONLY AUTHENTICATED USERS */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
