"use client"

import AddGoalContainer from "./AddGoalContainer";
import Logo from "../../components/Logo";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";
import {supabase} from "@/lib/supabaseClient"





export default function DashboardPage(){
    // useEffect to fetch goals from backend
    const [user, setUser] = useState(null)

    useEffect(() => {
        const getSession = async () => {
            const {data: {session}} = await supabase.auth.getSession()
            setUser(session?.user || null)
        }
        getSession()
    }, [])

    if (!user) return <p>Please PLEAPLSPLS log in </p>


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