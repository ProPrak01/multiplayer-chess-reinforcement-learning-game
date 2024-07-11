import { useState, useEffect } from "react";
import React from "react";

import OnlineChessboard from "../../components/chessboard/OnlineChessboard";
import MouseFollower from "../../components/mouseFollower/mouseFollower";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetAllValid } from "../../redux/validSlice";
import { resetDragPiece } from "../../redux/dragPieceSlice";
import { resetCurrUsr } from "../../redux/currUsrSlice";
import { resetKilledSlice } from "../../redux/killedSlice";
import { resetElement } from "../../redux/allElementSlice";

function OnlineGameScene() {
  const [start, setStart] = useState(false);
  const [rerender, set_Rerender] = useState(0);
  const all_Elements = useSelector((state) => state.allElements);
  const dispatch = useDispatch();
  const quit = () => {
    setStart(false);
  };
  const reset = () => {
    set_Rerender(rerender + 1);
  };
  const startGame = () => {
    setStart(true);
    set_Rerender(rerender + 1);
    dispatch(resetDragPiece());
    dispatch(resetAllValid());
    dispatch(resetCurrUsr());
    dispatch(resetKilledSlice());
    dispatch(resetElement());
  };
  const GetAllElements = () => {
    console.log(all_Elements);
  };

  return (
    <div>
      {start ? (
        <OnlineChessboard reset_prop={rerender} />
      ) : (
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%]">
          <button
            onClick={startGame}
            className="relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-9 py-5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-64 h-64 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Start ?</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-16 -mb-3 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
      )}

      <MouseFollower />
      {/* <button className='reset-btn' onClick={reset}>RESET</button> */}
      {start && (
        <button
          style={{ position: "absolute", bottom: "0", left: "0" }}
          className="quit-btn"
          onClick={quit}
        >
          QUIT
        </button>
      )}
      {start && (
        <button
          style={{ position: "absolute", bottom: "0", right: "0" }}
          className="quit-btn"
          onClick={GetAllElements}
        >
          Get All Elements
        </button>
      )}
    </div>
  );
}

export default OnlineGameScene;
