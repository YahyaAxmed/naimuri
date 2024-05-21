import logo from './logo.svg';
import React from 'react';
import BookingDate from './BookingDate';
import BookingName from './BookingName';
import BookingDoW from './BookingDoW';
import TeamName from './TeamName';
import BookedRoom from './BookedRoom';
import BookingId from './BookingId';
import { Button } from '@headlessui/react'
import BookingStatus from './BookingStatus';

function UserHistoryContainer() {
  return (
    <div className="w-[378px] h-[170px]">
        <div className="relative h-[170px]">
            <div className="absolute w-[341px] h-[170px] top-0 left-0 bg-[#ededed] rounded-[22px] shadow-[0px_4px_4px_#00000040]" />
                <div className="absolute top-[69px] left-[146px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                    STATUS: <BookingStatus></BookingStatus>
                </div>
                <div className="absolute w-[232px] top-[30px] left-[146px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                    ID: <BookingId></BookingId>
                </div>
                <div className="absolute w-[115px] top-[69px] left-[19px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[24px] tracking-[0] leading-[normal]">
                    <BookingDoW></BookingDoW>
                </div>
                <div className="absolute top-[16px] left-[44px] [font-family:'Inter-Black',Helvetica] font-black text-[#ff0000] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <BookingDate></BookingDate>
                </div>
                <div className="absolute top-[16px] left-[19px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <BookingDate></BookingDate>
                </div>
                <div className="absolute top-[110px] left-[19px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Total Equipment: <BookingStatus></BookingStatus>
                </div>
                
        </div>
    </div>
  );
}

export default UserHistoryContainer;
