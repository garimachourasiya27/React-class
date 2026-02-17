import axios from "axios";
import { useEffect, useState } from "react";
const Update=()=>{
    const [mydata , setMydata]= useState([]);
    const loadData = async ()=>{
        let api = "http://localhost:3000/students"
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }
    useEffect (()=>{
   loadData();

   
    }, [])
     const myDel=async(id)=>{
    let api =`http://localhost:3000/students/${id}`;
    const response = await axios.delete(api);
    // console.log(response.data);
    alert("data deleted");
    loadData();
    
     }

    const ans = mydata.map((key)=>{
        return(
            <>
            <tr>
             <td>{key.rollno}</td>
              <td>{key.name}</td>
               <td>{key.city}</td>
                <td>{key.fees}</td>
      <td>
        <button> Edit</button>
      </td>
      <td>
        <button onClick={()=>{myDel(key.id)}}>Delete</button>
      </td>
            </tr>
            
            
            
            </>
        )
    })
return (
    <>
     <h5> Welcome to Display page</h5>
     <hr />
     <table>
      <tr>
       <th>Rollno</th>
        <th>Name</th>
        <th>City</th>
        <th>Fees</th>
      </tr>
   {ans}


     </table>
    </>
)

}


export default Update;


//edit search