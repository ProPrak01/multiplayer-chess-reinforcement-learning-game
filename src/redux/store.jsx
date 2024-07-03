import { configureStore } from "@reduxjs/toolkit";
import dragPieceReducer from "./dragPieceSlice";
import currUsrReducer from "./currUsrSlice";
import allElementReducer from "./allElementSlice";
import validElementReducer from "./validSlice";

const store = configureStore({
  reducer: {
    dragPiece: dragPieceReducer,
    currUsr: currUsrReducer,
    allElements: allElementReducer,
    validElements: validElementReducer,
  },
});

export default store;