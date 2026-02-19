import { useState, createContext } from "react";
import Comp1 from "./Comp1";

const MyContext = createContext();

const App = () => {
  const [user, setUser] = useState("Garima");

  return (
    <>
      <h1>Welcome To My App : {user}</h1>

      <MyContext.Provider value={user}>
        <Comp1 />
      </MyContext.Provider>
    </>
  );
};

export default App;
export { MyContext };