import logo from './logo.svg';
import React from 'react';
import UserDashboardContainer from './UserDashboardContainer';
//import './App.css';

function UserDashboard() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[430px] h-[932px] relative">
      <div className="absolute top-[81px] left-[43px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
        DASHBOARD
      </div>
      <div className="!absolute !left-[35px] !top-[155px]">
        <UserDashboardContainer/>
      </div>
      </div>
    </div>
  );
}

export default UserDashboard;
