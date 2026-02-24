//useReducer(inc/dec counter)

// import { useReducer } from "react";

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action) {
//     case "Increment":
//       return state + 1;

//     case "Decrement":
//       return state - 1;

//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <h1>Welcome | My Program {count}</h1>

//       <button onClick={() => dispatch("Increment")}>
//         Increment
//       </button>

//       <button onClick={() => dispatch("Decrement")}>
//         Decrement
//       </button>
//     </>
//   );
// };

// export default App;
// ----------------------------------------------
//useRef+useEffect (Render count)


import { useState, useEffect, useRef } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <h1>Render Count: {count.current}</h1>
    </>
  );
};

export default App;