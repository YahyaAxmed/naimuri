import React from "react";
import { CheckboxDefault } from "./CheckBox";

function Login(){
    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="bg-white w-[430px] h-[932px] relative">
                <div className="top-[259px] left-[40px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[64px] absolute text-black tracking-[0] leading-[normal]">
                    Login
                </div>
                <div className="w-[342px] h-[198px] top-[360px] left-[44px] bg-[#ededed] shadow-[0px_4px_4px_#00000040] absolute rounded-[10px]">
                    <div className="absolute top-[90px] left-[144px] [font-family:'Inter-Light',Helvetica] font-light text-[#3781b6] text-[14px] tracking-[0] leading-[normal]">
                        Forget Password
                    </div>
                    <div className="absolute top-[90px] left-[36px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[14px] tracking-[0] leading-[normal]">
                        Remember Me
                    </div>
                    <div className="absolute top-[22px] left-[17px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                        USERNAME:
                    </div>
                    <div className="absolute top-[57px] left-[16px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                        PASSWORD:
                    </div>
                    <div className="w-[185px] h-[24px] top-[23px] left-[144px] absolute bg-white" />
                    <div className="w-[185px] h-[24px] top-[58px] left-[144px] absolute bg-white" />
                    <div className="w-[110px] h-[31px] top-[117px] left-[144px] absolute rounded-[10px]">
                        <div className="w-[110px] h-[31px] top-0 left-0 rounded-[10px] shadow-[0px_4px_4px_#00000040] absolute bg-white" />
                        <div className="top-[3px] left-[24px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Inter-Light',Helvetica] font-light text-[20px] whitespace-nowrap absolute text-black tracking-[0] leading-[normal]">
                            LOGIN
                        </div>
                    </div>
                    <CheckboxDefault className="!absolute !left-[17px] !top-[92px]" stateProp="default" />
                </div>
            </div>
        </div>
    );
};

export default Login;
