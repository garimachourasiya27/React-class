// import React, { useState } from "react";
// const App=()=>{
//   const{name, setName} = useState("");
//   const{city, setCity} = useState("");

// const { useState } = require("react");

  

// const handleSubmit=()=>{
//   console.log({name:name , city:city});
// }

// return(
//   <>
//   <h1>Application form</h1>
//   enter name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
//   <br />
//   enter city : <input type="text" name="" id="" value={city} onChange={(e)=>{setCity(e.target.value)}} />
  
// <button onClick={handleSubmit}>save!!</button>
 
//   </>
// )
// }
// export default App;





import React, { useState } from "react";
const App =() =>{
   const [input , setInput] = useState({});

   const handleInput= (e) =>{
let name = e.target.name;
let value= e.target.value;
 setInput(values=>({...values, [name]:value}));
 console.log(input);
   }
return(
  <>
  <h1>Application form</h1>
  enter roll no: <input type="text" name="rollno" onChange = {handleInput} />
  <br />
  enter name : <input type="text" name="name" onChange={handleInput} />
  <br />
  enter city : <input type="text" name ="city"  onChange={handleInput} />
  <br />
  enter age : <input type="text" name ="age"  onChange={handleInput}/>

<button>save!!</button>
 
  </>
)
}
export default App;


























// import { useState } from "react";

// const App = () => {
//   const [isLogin, setIsLogin] = useState(false);

//   const [input, setInput] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setInput((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!isLogin && input.password !== input.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     if (isLogin) {
//       alert("Login Successful ✅");
//     } else {
//       alert("Registration Successful ✅");
//     }

//     console.log(input);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>
//           {isLogin ? "Login Form" : "Register Form"}
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {!isLogin && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Name"
//               value={input.name}
//               onChange={handleInput}
//               style={styles.input}
//               required
//             />
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             value={input.email}
//             onChange={handleInput}
//             style={styles.input}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             value={input.password}
//             onChange={handleInput}
//             style={styles.input}
//             required
//           />

//           {!isLogin && (
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={input.confirmPassword}
//               onChange={handleInput}
//               style={styles.input}
//               required
//             />
//           )}

//           <button type="submit" style={styles.button}>
//             {isLogin ? "Login" : "Register"}
//           </button>
//         </form>

//         <p style={styles.toggleText}>
//           {isLogin ? "Don't have an account?" : "Already have an account?"}
//           <span
//             style={styles.toggle}
//             onClick={() => setIsLogin(!isLogin)}
//           >
//             {isLogin ? " Sign Up" : " Login"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(to right, #4facfe, #00f2fe)"
//   },
//   card: {
//     background: "#fff",
//     padding: "30px",
//     borderRadius: "10px",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
//     width: "300px",
//     textAlign: "center"
//   },
//   heading: {
//     marginBottom: "20px"
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     margin: "10px 0",
//     borderRadius: "5px",
//     border: "1px solid #ccc"
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     background: "#4facfe",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontWeight: "bold"
//   },
//   toggleText: {
//     marginTop: "15px"
//   },
//   toggle: {
//     color: "#4facfe",
//     cursor: "pointer",
//     fontWeight: "bold"
//   }
// };

// export default App;
















