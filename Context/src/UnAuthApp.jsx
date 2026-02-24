
import { useState } from "react";
import { useContext } from "react";
import {UserLogin} from "./LoginContext";

const UnAuthApp=()=>{
const [txtval, setTxtVal] = useState("");
const {login} = useContext(UserLogin);
 return(

<>
<h1> UnAuth app</h1>
Enter name : <input type="text"  value={txtval} onChange={(e)=>{setTxtVal(e.target.value)}}/>
<button onClick={()=>{login(txtval)}}>Login </button>


</>


 )


}
export default UnAuthApp;