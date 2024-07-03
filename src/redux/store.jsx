import { configureStore } from "@reduxjs/toolkit";
import dragPieceReducer from "./dragPieceSlice";
import currUsrReducer from "./currUsrSlice";
import allElementReducer from "./allElementSlice";
const store = configureStore({
  reducer: {
    dragPiece: dragPieceReducer,
    currUsr: currUsrReducer,
    allElements: allElementReducer,
  },
});

export default store;