import { useState } from "react"
import { supabase } from "@/lib/supabaseClient";


export default function AddGoalContainer({goals, setGoals}){

    const [newGoal, setNewGoal] = useState({title: "", description: ""})
    // This is the box that lets the user enter data to create new goal

    const handleChange = (e) => {
      const {name, value} = e.target;
      setNewGoal((prev) => ({...prev, [name]: value}));
    }

    const handleAddGoal = async (e) => {
      e.preventDefault();
      console.log("POOOP")
      if (newGoal.title.trim() === "") return;

      setGoals((prev) => [...prev, newGoal]);
      

      const {error} = await supabase.from("goals").insert([
        {
          title: newGoal.title,
          desc: newGoal.description
        },
      ]);

      if (error){
        console.error("Error adding goal", error.message);
      }

      setNewGoal({title: "", description: ""});
    };

    return(
      <>
      <form onSubmit={handleAddGoal}>
      <div className="bg-seagreen bg-contain w-full rounded-2xl object-scale-down m-5 grid grid-cols-2 grid-rows-4 shadow-custom shadow-dark">


      
        <div className="col-span-1 row-span-1">
          <p className="text-dark text-2xl font-bold m-4">Title</p>
        </div>
        
        <div className="col-span-1">
          <input 
            type="text" 
            name="title"
            value={newGoal.title}
            placeholder="type here..."
            className="bg-dark text-beige p-2.5 m-2.5 rounded-md w-64"
            //onChange={(e) => setNewGoal((prev) => ({...prev, title: e.target.value}))}
            onChange={handleChange}
            
            >

          </input>
        </div>


        <div className="col-span-1 row-span-1">
          <p className="text-dark text-2xl font-bold m-4">Goal Date</p>
        </div>
        
        <div className="col-span-1">
          <input 
            type="date" 
            className="bg-dark text-beige p-2.5 m-2.5 rounded-md w-64 cursor-pointer">

          </input>
        </div>


        <div className="col-span-1 row-span-1">
          <p className="text-dark text-2xl font-bold m-4">Goal Desc</p>
        </div>
        
        <div className="col-span-1">
          <input 
            type="text" 
            name="description"
            value={newGoal.description}
            placeholder="type here..."
            className="bg-dark text-beige p-2.5 m-2.5 rounded-md w-64"
            //onChange={(e) => setNewGoal((prev) => ({...prev, description: e.target.value}))}
            onChange={handleChange}
            >

            </input>
        </div>


        <div className="col-span-2 flex justify-center">
          <button className="bg-green m-5 px-6 p-1 rounded-full" type="submit">Add Goal</button>
        </div>
        
    

        
    

  
      
      </div>
      </form>
      </>  
    )
}