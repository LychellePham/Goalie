

export default function AddGoalContainer(){

    // This is the box that lets the user enter data to create new goal
    return(
      <>
      <div className="bg-seagreen bg-contain w-full rounded-2xl object-scale-down m-4 grid grid-cols-2 grid-rows-4 shadow-custom shadow-dark">


      
        <div className="col-span-1 row-span-1">
          <p className="text-dark text-2xl font-bold m-4">Title</p>
        </div>
        
        <div className="col-span-1">
          <input 
            type="text" 
            placeholder="type here..."
            className="bg-dark text-beige p-2.5 m-2.5 rounded-md w-64"></input>
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
            placeholder="type here..."
            className="bg-dark text-beige p-2.5 m-2.5 rounded-md w-64"></input>
        </div>


        <div className="col-span-2 flex justify-center">
          <button className="bg-green m-5 px-6 p-1 rounded-full">Add Goal</button>
        </div>
        


        
    

  
      
      </div>
      </>  
    )
}