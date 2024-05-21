import React from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import your tab content components
import UserDashboard from './UserDashboard';
import UserReservaton from './UserReservation';
import UserHistory from './UserHistory';
import Setting from './Setting';

function UserLayout() {
  return (
    <Router>
      <div>
        <button>Setting</button>
        <TabGroup>
        <TabPanels>
          <TabPanel>
          <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/reservation" element={<UserReservaton />} />
          <Route path="/history" element={<UserHistory />} />
        </Routes>
          </TabPanel>
        </TabPanels>
        <TabList>
          <Tab>
            <Link to="/">Home</Link>
          </Tab>
          <Tab>
            <Link to="/reservation">Reservation</Link>
          </Tab>
          <Tab>
            <Link to="/history">History</Link>
          </Tab>
        </TabList>
        </TabGroup>
      </div>
    </Router>
  );
}

export default UserLayout;