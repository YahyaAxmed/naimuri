import React, { useState } from 'react';
import { Link, Routes, Route} from 'react-router-dom';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

// Import your tab content components
import UserDashboard from './UserDashboard';
import UserReservaton from './UserReservation';
import UserHistory from './UserHistory';
import Setting from './Setting';

function UserLayout() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
        <TabGroup>
          <TabPanels>
            <TabPanel>
              <Routes>
                <Route path="/*" element={<UserDashboard />} />
                <Route path="/reservation" element={<UserReservaton />} />
                <Route path="/history" element={<UserHistory />} />
                <Route path="/setting" element={<Setting />} />
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
            <Tab>
              <Link to="/setting">Setting</Link>
            </Tab>
          </TabList>
        </TabGroup>
    </div>
  );
}


export default UserLayout;