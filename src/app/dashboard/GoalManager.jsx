import AddGoalContainer from "./AddGoalContainer";
import GoalList from "./GoalList";
import { useState } from "react";

export default function GoalManager(){
    const [goals, setGoals] = useState([]);

    return(
        <div>
            <AddGoalContainer goals={goals} setGoals={setGoals}></AddGoalContainer>
            <GoalList goals={goals}></GoalList>
        </div>
    )
}