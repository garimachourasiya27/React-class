import axios from "axios";
import { useEffect, useState } from "react";
const Display =()=>{
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
    const ans = mydata.map((key)=>{
        return(
            <>
            <tr>
             <td>{key.rollno}</td>
              <td>{key.name}</td>
               <td>{key.city}</td>
                <td>{key.fees}</td>
    
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


export default Display;