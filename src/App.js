import React from 'react';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import Signup from './user/signup/Signup';
import Signin from './user/signin/Signin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
