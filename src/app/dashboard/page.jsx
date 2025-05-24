import AddGoalContainer from "./AddGoalContainer";

export default function DashboardPage(){
    // useEffect to fetch goals from backend

    return(
        <>
        <div className="bg-beige p-4">
            <div className="">
                <h1 className="text-9xl">Goalie</h1>
                <img src="/GOALIE2.png" alt="Goalie Logo"></img>
                <h2>bum</h2>
                <p>pee</p>
                <AddGoalContainer></AddGoalContainer>

            </div>

        </div>
        
        </>
    );
}