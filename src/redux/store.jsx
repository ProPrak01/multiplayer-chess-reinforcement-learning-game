import { configureStore } from "@reduxjs/toolkit";
import dragPieceReducer from "./dragPieceSlice";
import currUsrReducer from "./currUsrSlice";
import allElementReducer from "./allElementSlice";
import validElementReducer from "./validSlice";
import killedElementsReducer from "./killedSlice";
const store = configureStore({
  reducer: {
    dragPiece: dragPieceReducer,
    currUsr: currUsrReducer,
    allElements: allElementReducer,
    validElements: validElementReducer,
    killedElements: killedElementsReducer,
  },
});

export default store;