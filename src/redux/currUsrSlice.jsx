import { createSlice } from "@reduxjs/toolkit";

const currUsrSlice = createSlice({
    name:'currUsr',
    initialState:{
        curr_user:0,
    },
    reducers:{
        setCurrUsr:(state,action)=>{
            state.curr_user = action.payload.curr_user
        },
       
    },
});

export const {setCurrUsr} = currUsrSlice.actions;
export default currUsrSlice.reducer;