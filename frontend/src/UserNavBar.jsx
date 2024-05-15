import React from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import your tab content components
import UserDashboard from './UserDashboard';
import UserReservaton from './UserReservation';
import UserHistory from './UserHistory';

function User_NavBar() {
  return (
    <Router>
      <div>
        <TabGroup>
        <TabPanels>
          <TabPanel>
          <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/about" element={<UserReservaton />} />
          <Route path="/contact" element={<UserHistory />} />
        </Routes>
          </TabPanel>
        </TabPanels>
        <TabList>
          <Tab>
            <Link to="/">Home</Link>
          </Tab>
          <Tab>
            <Link to="/about">About</Link>
          </Tab>
          <Tab>
            <Link to="/contact">Contact</Link>
          </Tab>
        </TabList>
        </TabGroup>
      </div>
    </Router>
  );
}

export default User_NavBar;
