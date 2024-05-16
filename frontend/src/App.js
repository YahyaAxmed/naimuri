import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import AdminLayout from './AdminLayout';
import UserLayout from './UserLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/user" element={<UserLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
