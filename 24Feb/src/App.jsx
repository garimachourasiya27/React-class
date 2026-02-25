//redux 
import { useDispatch, useSelector } from "react-redux"
import { Decrement,Increment } from "./counterSlice"
const App=()=>{
 const myval = useSelector(state=>state.mycounter.count)
 const dispath = useDispatch();
 return(
    <>
     <h1>welcome</h1>
     <button onClick={()=>{dispath(Increment())}}>Increment </button>
     <h1>{myval}</h1>
     <button onClick={()=>dispath(Decrement())}>Decrement</button>
    
    </>
 )
}
export default App;