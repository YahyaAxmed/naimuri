import React, { useState } from 'react';
import { Link, Routes, Route} from 'react-router-dom';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

// Import your tab content components
import UserDashboard from './UserDashboard';
import UserReservaton from './UserReservation';
import UserHistory from './UserHistory';
import Setting from './Setting';
import UserNav from './UserNav';

function UserLayout() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
        <TabGroup>
          <TabPanels>
            <TabPanel>
              <Routes>
                <Route path="/" element={<UserDashboard />} />
                <Route path="/reservation" element={<UserReservaton />} />
                <Route path="/history" element={<UserHistory />} />
                <Route path="/setting" element={<Setting />} />
              </Routes>
            </TabPanel>
          </TabPanels>
          <UserNav></UserNav>
        </TabGroup>
    </div>
  );
}


export default UserLayout;