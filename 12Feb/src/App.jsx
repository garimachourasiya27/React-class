//useeffect -> hr rendr pr chalega
// import { useEffect, useState } from "react";
// const App=()=>{

// const[count, setCount] = useState(0);
// useEffect(()=>{
// // setTimeout(()=>{
// //     setCount(count+1);
// // } ,1000);
// setTimeout(()=>{
//     setCount(count+1);
// } , 5000 );

// } , []);
// return(

//     <>
    
//     <h1>Welcome my count :{count} </h1>
    
//     </>
// )

// } 
// export default App;


// ---------------------

// import { useEffect, useState } from "react";
// const App=()=>{

// const[count, setCount] = useState(0);
// const[multi, setMulti] = useState(0);
//   useEffect(()=>{
//     setMulti(count*2);
//   }, [count])

// return(

//     <>
    
//     <h1>Welcome my count :{count} </h1>
//     <h2>Multiplication : {multi}</h2>
//     <button onClick={()=>{setCount(count+1)}}> click here </button>
    
//     </>
// )

// } 
// export default App;



import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Insert from "./pages/insert"
import Display from "./pages/Display"
import Update from "./pages/Update"
import MyEdit from "./pages/MyEdit"
import Search from "./pages/Search"

const App=()=>{




    return(
        <>
         <BrowserRouter>
         <Routes>
            <Route path ="/" element={<Layout/>} >
            <Route index element ={<Home/>} /> 
            <Route path="home" element ={<Home/>} />
            <Route path ="insert" element={<Insert/>} />
            <Route path = "display" element={<Display/>}/>
            <Route path = "update" element={<Update/>}/>
             <Route path = "myEdit/:id" element={<MyEdit/>}/>
             <Route path = "search" element={<Search/>}/>

            </Route>
         </Routes>
         </BrowserRouter>
        
        
        
        </>
    )
} 
export default App;