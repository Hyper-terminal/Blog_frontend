import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/core/Home/Home";
import Navbar from './components/core/Navbar/Navbar';
import { Signin, Signup, Profile, Users, EditProfile } from './components/user';

export default function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<Users/>} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/user/:userId" element={<Profile />} />
        <Route exact path='/edit' element={<EditProfile/>} />
      </Routes>
    </div>
  );
}
