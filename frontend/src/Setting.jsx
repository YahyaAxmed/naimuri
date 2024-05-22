import logo from './logo.svg';
import React from 'react';
//import './App.css';

function Setting() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[430px] h-[932px] relative">
      <div className="absolute top-[81px] left-[43px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
        SETTING
      </div>
      <div className="absolute top-[164px] left-[44px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[24px] tracking-[0] leading-[normal]">
        CHANGE PASSWORD
      </div>
      <div className="absolute top-[208px] left-[44px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[24px] tracking-[0] leading-[normal]">
        LOGOUT
      </div>
      </div>
    </div>
  );
}

export default Setting;
