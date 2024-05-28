import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
//import './App.css';

function Setting() {
  return (
    <div>
      <h1>Setting</h1>
      <Link to="/Login"><h2>Logout</h2></Link>
      </div>
  );
}

export default Setting;