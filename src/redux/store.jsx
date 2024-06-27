import { configureStore } from "@reduxjs/toolkit";
import dragPieceReducer from "./dragPieceSlice";
import currUsrReducer from "./currUsrSlice";
const store = configureStore({
  reducer: {
    dragPiece: dragPieceReducer,
    currUsr: currUsrReducer,
  },
});

export default store;