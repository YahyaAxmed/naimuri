import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import AdminLayout from './AdminLayout';
import UserLayout from './UserLayout';

function App() {
  return (
    <UserLayout></UserLayout>
  );
}

export default App;
