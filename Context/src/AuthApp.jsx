// import { useState } from "react";
import { useContext } from "react";
import {UserLogin} from "./LoginContext";

const AuthApp=()=>{
const {user, logout} = useContext(UserLogin);
return(

    <>
    <h1>auth app</h1>
    <h2>Welcome {user.name}</h2>
    <button onClick={logout}>logout</button>
    
    
    </>
)
}
export default AuthApp;