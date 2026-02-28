import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./colorSlice";
import { useState } from "react";

const App = () => {

  const [txtval, setTxtVal] = useState("");

  const clr = useSelector(state => state.mycolor.color);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Welcome</h1>

      Enter color :
      <input 
        type="text" 
        value={txtval} 
        onChange={(e) => setTxtVal(e.target.value)} 
      />

      <button onClick={() => dispatch(changeColor({ color: txtval }))}>
        Change Color
      </button>

      <br /><br />

      <div 
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: clr
        }}
      >
      </div>
    </>
  );
}

export default App;