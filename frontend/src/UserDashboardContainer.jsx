import logo from './logo.svg';
import React from 'react';
import BookingDate from './BookingDate';
import BookingName from './BookingName';
import BookingDoW from './BookingDoW';
import TeamName from './TeamName';
import BookedRoom from './BookedRoom';
import { Button } from '@headlessui/react'
import BookingMonth from './BookingMonth';

function UserDashboardContainer() {
  return (
    <div className="w-[378px] h-[170px]">
        <div className="relative h-[170px]">
            <div className="absolute w-[341px] h-[170px] top-0 left-0 bg-[#ededed] rounded-[22px] shadow-[0px_4px_4px_#00000040]" />
                <div className="absolute top-[69px] left-[146px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <TeamName></TeamName>
                </div>
                <div className="absolute w-[232px] top-[30px] left-[146px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <BookingName></BookingName>
                </div>
                <div className="absolute w-[115px] top-[69px] left-[19px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[24px] tracking-[0] leading-[normal]">
                    <BookingDoW></BookingDoW>
                </div>
                <div className="absolute top-[25px] left-[65px] [font-family:'Inter-Black',Helvetica] font-black text-[#ff0000] text-[30px] tracking-[0] leading-[normal] whitespace-nowrap uppercase">
                    <BookingMonth></BookingMonth>
                </div>
                <div className="absolute top-[16px] left-[19px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <BookingDate></BookingDate>
                </div>
                <div className="absolute top-[70px] left-[246px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <BookedRoom></BookedRoom>
                </div>
                <Button
                className="!h-[36px] !rounded-[10px] !shadow-[0px_4px_4px_#00000040] !flex !absolute !left-[19px] !overflow-hidden !bg-white !w-[144px] !top-[114px]"
                content="text"
                divClassName="!text-black"
                size="normal"
                state="default"
                text="Check-In"
                type="primary"
                />

                <Button
                className="!h-[36px] !rounded-[10px] !shadow-[0px_4px_4px_#00000040] !flex !absolute !left-[177px] !bg-white !w-[144px] !top-[114px]"
                content="text"
                divClassName="!text-black"
                size="normal"
                state="default"
                text="Modify"
                type="primary"
                />
        </div>
    </div>
  );
}

export default UserDashboardContainer;
