// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import AdminLayout from './AdminLayout';
import UserLayout from './UserLayout';
import Signup from './Signup';
import NotFound from './NotFound';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/user" element={<UserLayout />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
