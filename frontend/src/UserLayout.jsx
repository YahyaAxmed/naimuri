import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

// Import your tab content components
import UserDashboard from './UserDashboard';
import UserReservaton from './UserReservation';
import UserHistory from './UserHistory';
import Setting from './Setting';
import Navbar from './NavBar';


function UserLayout() {
  return (
      <div>
        {/* <TabGroup>
        <TabPanels>
          <TabPanel> */}
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/reservation" element={<UserReservaton />} />
            <Route path="/history" element={<UserHistory />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
          <Navbar/>
          {/* </TabPanel>
        </TabPanels>
        <TabList >
          <Tab>
            <Link to="/">Home</Link>
          </Tab>
          <Tab>
            <Link to="/reservation">Reservation</Link>
          </Tab>
          <Tab>
            <Link to="/history">History</Link>
          </Tab>
          <Tab>
            <Link to="/setting">Setting</Link>
          </Tab>
        </TabList>
        </TabGroup> */}
      </div>
  );
}

export default UserLayout;