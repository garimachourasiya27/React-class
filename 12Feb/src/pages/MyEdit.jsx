import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
const MyEdit=()=>{
const [mydata, setMyData] = useState({});
 const {id} = useParams();
 let loadData = async()=>{
     let api = `http://localhost:3000/students/${id}`;
        const response = await axios.get(api);
        console.log(response.data);
        setMyData(response.data);
 }
  useEffect (()=>{
   loadData();
    }, []);

    const handleInput=(e)=>{
     let name =e.target.name;
     let value =e.target.value;
     setMyData(values=>({...values, [name]:value}))
     console.log(mydata)
   }

      const handleSubmit = async () => {
    let api=`http://localhost:3000/students/${id}`;
    const response = await axios.put(api, mydata);
   
    alert("Data updated");
      }
      
    return(



        <>
         <h1>Edit page</h1>
         Enter roll no : <input type="text" name = "rollno" value ={mydata.rollno} onChange={handleInput} />
         <br />
          Enter name : <input type="text" name = "name" value ={mydata.name} onChange={handleInput} />
          <br />
          Enter city : <input type="text" name = "city" value ={mydata.city} onChange={handleInput} />
          <br />
         Enter fees : <input type="text" name = "fees" value ={mydata.fees} onChange={handleInput} />
         <br />
         <button onClick={handleSubmit}>Update</button>
        
        </>
    )
      }

    
export default MyEdit;