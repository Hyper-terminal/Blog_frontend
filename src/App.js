import React from 'react';
import './style.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from "./components/core/Home/Home";
import Navbar from './components/core/Navbar/Navbar';
import { Signin, Signup, Profile, Users, EditProfile } from './components/user';
import { isAuthenticated } from './components/auth';

export default function App() {

  const RequireAuth = ({ children }) => {
    let location = useLocation();

    if (!isAuthenticated()) {
      return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<RequireAuth><Users /></RequireAuth>} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/user/:userId" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route exact path='/user/edit/:userId' element={<RequireAuth><EditProfile /></RequireAuth>} />
      </Routes>
    </div>
  );
}
