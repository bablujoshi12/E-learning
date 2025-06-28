import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Pages/Nav.js";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import UserDashboard from "./Pages/UserDashboard";
import ProtectedRoute from "./Pages/ProtectedRoute";
import SignUpPage from "./Pages/SignUpPage";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import ContactPage from "./Pages/ContactPage";
import { useState, useEffect } from "react";
import PaidCourses from './Pages/PaidCourses';
import FreeCourses from './Pages/FreeCourses';
import CheatSheetPage from './Pages/CheatSheetPage';
import CheatSheetC from './Pages/CheatSheetC';
import CheatSheetCpp from './Pages/CheatSheetCpp';
import CheatSheetJS from './Pages/CheatSheetJS';
import CheatSheetCSS from './Pages/CheatSheetCSS';
import CheatSheetHTML from './Pages/CheatSheetHTML';
import CheatSheetDS from './Pages/CheatSheetDS';
import CheatSheetRDBMS from './Pages/CheatSheetRDBMS';
import CheatSheetGit from './Pages/CheatSheetGit';
import CourseDetail from './Pages/CourseDetail';
import Checkout from './Pages/Checkout';
import MyCourses from './Pages/MyCourses';
import Certificates from './Pages/Certificates';

function NavbarWrapper({ user, cart, logout }) {
  const location = useLocation();
  // Hide Navbar only on homepage
  if (location.pathname === "/") return null;
  return <Navbar user={user} cart={cart} logout={logout} />;
}

function App() {
  const [user, setUser] = useState(null);
  const [loginPrefill, setLoginPrefill] = useState({ email: "", password: "" });
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [cart, setCart] = useState([]);

  // Load user data from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedPurchasedCourses = localStorage.getItem('purchasedCourses');
    const savedCart = localStorage.getItem('cart');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedPurchasedCourses) {
      setPurchasedCourses(JSON.parse(savedPurchasedCourses));
    }
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('purchasedCourses', JSON.stringify(purchasedCourses));
  }, [purchasedCourses]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (course) => {
    if (!cart.find(item => item.id === course.id)) {
      setCart([...cart, course]);
    }
  };

  const removeFromCart = (courseId) => {
    setCart(cart.filter(item => item.id !== courseId));
  };

  const purchaseCourses = () => {
    if (user && cart.length > 0) {
      const newPurchasedCourses = [...purchasedCourses, ...cart];
      setPurchasedCourses(newPurchasedCourses);
      setCart([]);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setCart([]);
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
  };

  return (
    <Router>
      <NavbarWrapper user={user} cart={cart} logout={logout} />
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
          path="/dashboard"
          element={
            <ProtectedRoute isAllowed={user}>
              {user && user.isAdmin ? (
                <div style={{
                  padding: '40px',
                  textAlign: 'center',
                  color: '#fff',
                  backgroundColor: '#1c1d1f',
                  minHeight: '100vh',
                  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
                }}>
                  <h1 style={{ color: '#a435f0', marginBottom: '20px' }}>Admin Dashboard</h1>
                  <p style={{ color: '#cec0fc', fontSize: '18px' }}>
                    Admin dashboard will be implemented with Node.js backend later.
                  </p>
                  <p style={{ color: '#6b7280', marginTop: '10px' }}>
                    Currently showing placeholder content.
                  </p>
                </div>
              ) : (
                <UserDashboard 
                  user={user} 
                  purchasedCourses={purchasedCourses}
                  logout={logout}
                />
              )}
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route 
          path="/paid-courses" 
          element={
            <PaidCourses 
              user={user}
              purchasedCourses={purchasedCourses}
              addToCart={addToCart}
              cart={cart}
            />
          } 
        />
        <Route path="/free-courses" element={<FreeCourses />} />
        <Route path="/cheatsheet/:courseId" element={<CheatSheetPage />} />
        <Route path="/cheatsheet/c" element={<CheatSheetC />} />
        <Route path="/cheatsheet/cpp" element={<CheatSheetCpp />} />
        <Route path="/cheatsheet/javascript" element={<CheatSheetJS />} />
        <Route path="/cheatsheet/css" element={<CheatSheetCSS />} />
        <Route path="/cheatsheet/html" element={<CheatSheetHTML />} />
        <Route path="/cheatsheet/ds" element={<CheatSheetDS />} />
        <Route path="/cheatsheet/rdbms" element={<CheatSheetRDBMS />} />
        <Route path="/cheatsheet/git" element={<CheatSheetGit />} />
        <Route path="/cheatsheet/python" element={<CheatSheetPage courseId="python" />} />
        <Route path="/cheatsheet/react" element={<CheatSheetPage courseId="react" />} />
        <Route path="/cheatsheet/nodejs" element={<CheatSheetPage courseId="nodejs" />} />
        <Route path="/cheatsheet/ml" element={<CheatSheetPage courseId="ml" />} />
        <Route 
          path="/course/:courseId" 
          element={
            <CourseDetail 
              user={user}
              purchasedCourses={purchasedCourses}
              addToCart={addToCart}
              cart={cart}
            />
          } 
        />
        <Route 
          path="/checkout" 
          element={
            <Checkout 
              cart={cart}
              removeFromCart={removeFromCart}
              purchaseCourses={purchaseCourses}
              user={user}
            />
          } 
        />
        <Route 
          path="/my-courses" 
          element={
            <MyCourses 
              user={user}
              purchasedCourses={purchasedCourses}
            />
          } 
        />
        <Route 
          path="/certificates" 
          element={
            <Certificates 
              user={user}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;