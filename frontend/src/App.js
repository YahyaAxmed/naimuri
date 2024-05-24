// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Routes, Outlet } from 'react-router-dom';
import Login from './Login';
import AdminLayout from './AdminLayout';
import UserLayout from './UserLayout';
//import Signup from './Signup';
import NotFound from './NotFound';
import UserDashboard from './UserDashboard';
import UserReservaton from './UserReservation';
import UserHistory from './UserHistory';
import Setting from './Setting';

function App() {
  return (
    <div className='App'>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/user" element={<UserLayout />} />
        <Route path="/signup" element={<Signup />} />/
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/reservation" element={<UserReservaton />} />
        <Route path="/history" element={<UserHistory />} />
        <Route path="/setting" element={<Setting />} />
      </Routes> */}
    <UserLayout></UserLayout>
    <Outlet/>
    </div>
  );
}

export default App;
