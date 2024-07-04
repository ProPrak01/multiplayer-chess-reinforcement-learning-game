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
        resetCurrUsr:(state)=>{
            state.curr_user = 0;
        }
       
    },
});

export const {setCurrUsr,resetCurrUsr} = currUsrSlice.actions;
export default currUsrSlice.reducer;