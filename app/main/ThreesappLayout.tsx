//app/main/Threesapplayout.tsx

import React from 'react'
import Header from "@/app/main/Header";
import MainSection from "@/app/main/MainSection";
import MainSidebar from "@/app/main/MainSidebar";
import SideSection from "@/app/main/SideSection";

const ThreesappLayout = () => {
    return (
        <div className="h-screen w-screen flex flex-col bg-gray-100">
            <Header />

            <div className="flex flex-1">
                <MainSidebar/>
                <div className="flex flex-1 bg-primary1">
                    <div className="flex flex-1 rounded-xl overflow-hidden ">
                        <SideSection />
                        <MainSection />
                    </div>
                </div>


            </div>
        </div>
    );
}
export default ThreesappLayout
