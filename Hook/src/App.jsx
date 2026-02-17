// -------1--------

// import { useState } from "react";
// const App=()=>{
//   const [name, setName]= useState("asdf")

// import { useState } from "react";

//   const myDisplay=()=>{
//     setName("Aman")
//   }
//   return(



//     <>
//     <h1>Welcome !{name}</h1>
//     <button onClick={myDisplay}>click here!</button>
    
    
    
//     </>
//   )

// }
// export default App;


// -------2--------
// const App=()=>{
//   const [color, setColor]= useState("red");



//   return(

// <>

// <h1 style={{color:color}}>My color : {color}</h1>
// <button onClick={()=>{setColor("green")}}>Green</button>
// <button onClick={()=>{setColor("blue")}}>blue</button>
// <button onClick={()=>{setColor("orange")}}>orange</button>
// <button onClick={()=>{setColor("yellow")}}>yellow</button>
// </>
//   )
// }
// export default App;


// ------------3-----------------
import { useState } from "react";
const App=()=>{

  const[count, setCount] = useState(0)

  const mydec=()=>{
    if (count>0){
      setCount(count-1)
    }
    else{
      alert("you can not more negative")
    }
  }
  return(


    <>
    <h1>Counter app :</h1>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    {/* <button onClick={()=>{setCount(count-1)}}>Decrement</button> */}
    <h1>{count}</h1>
    <button onClick={mydec}>Decrement</button>
    
    </>
  )

}
export default App;