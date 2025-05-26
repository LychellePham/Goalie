import AddGoalContainer from "./AddGoalContainer";
import Logo from "../../components/Logo";

export default function DashboardPage(){
    // useEffect to fetch goals from backend

    return(
        <>
        <div className="bg-beige p-4 min-h-screen">
            <div className="">
                <Logo></Logo>
                
                
                <h2>bum</h2>
                <p>pee</p>
                <AddGoalContainer></AddGoalContainer>

            </div>

        </div>
        
        </>
    );
}