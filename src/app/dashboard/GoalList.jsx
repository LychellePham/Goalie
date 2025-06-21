export default function GoalList({goals}){
    return (
        <ul className="bg-amber-600">
            <p> POOOOO</p>
            {goals.map((goal, index) => (
                <li key={index}>
                    <h3 className="">{goal.title}</h3>
                    <p>{goal.description}</p>
                </li>
            ))}
        </ul>
    )

}