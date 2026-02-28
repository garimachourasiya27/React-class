import { useSelector, useDispatch } from "react-redux";
import { colorChange } from "./colorSlice";

const App = () => {
  const myclr = useSelector((state) => state.mycolor.color);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Welcome</h1>

      <button onClick={() => dispatch(colorChange())}>
        Click Here
      </button>

      <div
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: myclr,
          marginTop: "20px",
        }}
      ></div>
    </>
  );
};

export default App;