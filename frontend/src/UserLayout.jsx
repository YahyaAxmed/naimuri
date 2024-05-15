import logo from './logo.svg';
import React from 'react';
//import './App.css';
import Login from './Login';
import User_NavBar from './UserNavBar';

function UserLayout() {
  return (
    <div>
        <h1>Main</h1>
      <User_NavBar></User_NavBar>
    </div>
  );
}

export default UserLayout;
