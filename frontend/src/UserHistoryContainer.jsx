import logo from './logo.svg';
import React from 'react';
import BookingDate from './BookingDate';
import BookingMonth from './BookingMonth'
import BookingName from './BookingName';
import BookingDoW from './BookingDoW';
import TeamName from './TeamName';
import BookedRoom from './BookedRoom';
import BookingId from './BookingId';
import BookingStatus from './BookingStatus';
import BookingEquipment from './BookingEquipment';
import BookingTester from './Tester';

function UserHistoryContainer() {
  return (
    <div className="w-[378px] h-[220px]">
        <div className="relative h-[220px]">
            <div className="absolute w-[341px] h-[220px] top-0 left-0 bg-[#ededed] rounded-[22px] shadow-[0px_4px_4px_#00000040]" />
                <div className="absolute top-[69px] left-[146px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                    STATUS: <BookingStatus></BookingStatus>
                </div>
                <div className="absolute w-[232px] top-[30px] left-[146px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                    ID: <BookingId></BookingId>
                </div>
                <div className="absolute w-[115px] top-[69px] left-[19px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[24px] tracking-[0] leading-[normal] uppercase">
                    <BookingDoW></BookingDoW>
                </div>
                <div className="absolute top-[20px] left-[65px] [font-family:'Inter-Black',Helvetica] font-black text-[#ff0000] text-[35px] tracking-[0] leading-[normal] whitespace-nowrap uppercase">
                    <BookingMonth></BookingMonth>
                </div>
                <div className="absolute top-[16px] left-[19px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                    <BookingDate></BookingDate>
                </div>
                <div className="absolute top-[115px] left-[19px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Total Equipment: <BookingEquipment></BookingEquipment>
                </div>
                <div className="absolute top-[150px] left-[19px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Total Attendees: <BookingTester></BookingTester>
                </div>
                <div className="absolute top-[180px] left-[19px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Tester: <TeamName></TeamName>
                </div>
                
        </div>
    </div>
  );
}

export default UserHistoryContainer;
