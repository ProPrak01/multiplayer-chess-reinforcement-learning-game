import { createSlice } from "@reduxjs/toolkit";

const dragPieceSlice = createSlice({
    name:'dragPiece',
    initialState:{
        pieceId:null,
        color:null,
        initialPos:{
            row:null,
            col:null
        }
    },
    reducers:{
        setDragPiece:(state,action)=>{
            state.pieceId = action.payload.pieceId
            state.color = action.payload.color
            state.initialPos.row = action.payload.row
            state.initialPos.col = action.payload.col

        },
        resetDragPiece:(state)=>{
            state.pieceId = null
            state.color = null
            state.initialPos.row = null
            state.initialPos.col = null
        },
    },
});

export const {setDragPiece,resetDragPiece} = dragPieceSlice.actions;
export default dragPieceSlice.reducer;