import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import AdminLayout from './AdminLayout';
import UserLayout from './UserLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route path="/admin" component={AdminLayout} />
        <Route path="/user" component={UserLayout} />
      </Routes>
    </Router>
  );
}

export default App;
