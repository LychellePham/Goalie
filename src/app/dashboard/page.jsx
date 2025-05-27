"use client"

import AddGoalContainer from "./AddGoalContainer";
import Logo from "../../components/Logo";
import ProgressBar from "./ProgressBar";





export default function DashboardPage(){
    // useEffect to fetch goals from backend

    return(
        <>
        <div className="bg-beige p-4 min-h-screen">
            <Logo></Logo>
            <div className="">
                
                
                <h1 className="text-5xl">Dashboard</h1>


            <div className="w-fit">
                <ProgressBar></ProgressBar>
                
                

                <AddGoalContainer></AddGoalContainer>
            </div>

            </div>

        </div>
        
        </>
    );
}