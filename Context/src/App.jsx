// import { useState, createContext } from "react";
// // import Comp1 from "./Comp1";
// import Bhopal from "./Bhopal";
// import {createContext } from "react";
// const UserContext = createContext();

// const App = () => {
//   const [user, setUser] = useState("Garima");

//   return (
//     <>
//       <h1>Welcome To My App : {user}</h1>

//       <UserContext.Provider value={user}>
//         <Comp1 />
//         <Bhopal/>
//       </UserContext.Provider>
//     </>
//   );
// };

// export default App;
// export {UserContextContext };
// import College from "./College";
// const App=()=>{
//  return (
// <>
//   <h1>Welcome</h1>
//   <hr />
//  <College>
//   <h2> react js</h2>
//  </College>
// </>

//  )
// }
//  export default App;

      
// import College from "./College";
// import MyContext from "./MyContext";
 
// const App=()=>{
//  return (
// <>
//   <h1>Welcome app</h1>
//   <MyContext>

//      <College/>

//   </MyContext>
// </>

//  )
// }
//  export default App;
import AuthApp from "./AuthApp";
import UnAuthApp from "./UnAuthApp";
import { UserLogin } from "./LoginContext";
import { useContext } from "react";
const App=()=>{

const {user} = useContext(UserLogin);
return(

<>
<h1>Welcome app</h1>
{user.auth ?<AuthApp/> : <UnAuthApp/>}
</>

)
}
export default App;
