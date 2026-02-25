import{createSlice} from "@reduxjs/toolkit"
const counterSlice = createSlice({
    name:"mycounter",
    initialState:{
        count:0
    },
    reducers:{
        Increment:(state)=>{
            state.count++;
        },
        Decrement:(state)=>{
            state.count--;
        }
    }
})
export const {Increment,Decrement} = counterSlice.actions;
export default counterSlice.reducer;