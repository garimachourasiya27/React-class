import { useState } from "react";
import axios from "axios";


const Insert =()=>{
  const[input, setInput]=useState({}); 
   const handleInput=(e)=>{
     let name =e.target.name;
     let value =e.target.value;
     setInput(values=>({...values,[name]:value}))
     console.log(input)
   }
   const handleSubmit=async()=>{
    let api="http://localhost:3000/students"
    const response = await axios.post(api, input);
    console.log(response);
    alert("registered")
   }

return(

    <>
   <h4>Welcome to Insert page</h4>
   enter roll no: <input type="text" name="rollno" onChange = {handleInput} />
  <br />
  enter name : <input type="text" name="name" onChange={handleInput} />
  <br />
  enter city : <input type="text" name ="city"  onChange={handleInput} />
  <br />
  enter fees : <input type="text" name ="fees"  onChange={handleInput}/>
  <br />
  <button onClick={handleSubmit}>save!!</button>
    </>
)




} 
export default Insert;

// npm i axios ,  json server -- watch db.json
//npx json-server --watch db.json