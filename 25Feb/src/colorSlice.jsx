import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "mycolor",   // slice name

  initialState: {
    color: "white"   // default background color
  },

  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload.color;
    }
  }
});

// export action
export const { changeColor } = colorSlice.actions;

// export reducer
export default colorSlice.reducer;