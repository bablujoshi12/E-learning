import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Pages/Nav";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import AdminDashboard from "./Pages/AdminDashboard";
import UserDashboard from "./Pages/UserDashboard";
import ProtectedRoute from "./Pages/ProtectedRoute";
import SignUpPage from "./Pages/SignUpPage";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import ContactPage from "./Pages/ContactPage";
import { useState } from "react";

// Helper component to conditionally render Navbar
function NavbarWrapper() {
  const location = useLocation();
  // Hide Navbar only on homepage
  if (location.pathname === "/") return null;
  return <Navbar />;
}

function App() {
  const [user, setUser] = useState(null);
  const [loginPrefill, setLoginPrefill] = useState({ email: "", password: "" });

  return (
    <Router>
      <NavbarWrapper />
      <Routes>
  <Route path="/" element={<HomePage />} />
  <Route
    path="/login"
    element={
      <LoginPage
        setUser={setUser}
        prefill={loginPrefill}
      />
    }
  />
  <Route
    path="/signup"
    element={
      <SignUpPage setLoginPrefill={setLoginPrefill} />
    }
  />
  <Route
    path="/admin-dashboard"
    element={
      <ProtectedRoute isAllowed={user && user.isAdmin}>
        <AdminDashboard />
      </ProtectedRoute>
    }
  />
  <Route path="/user-dashboard" element={<UserDashboard />} />
  <Route path="/about" element={<AboutPage />} /> 
  <Route path="/courses" element={<CoursesPage />} />
  <Route path="/contact" element={<ContactPage />} />

</Routes>
    </Router>
  );
}

export default App;