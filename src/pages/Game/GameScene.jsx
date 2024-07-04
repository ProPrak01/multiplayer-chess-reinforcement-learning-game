import { useState, useEffect } from 'react'
import React from 'react'

import Chessboard from '../../components/chessboard/chessboard'
import MouseFollower from '../../components/mouseFollower/mouseFollower'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { resetAllValid } from '../../redux/validSlice'
import { resetDragPiece } from '../../redux/dragPieceSlice'
import { resetCurrUsr } from '../../redux/currUsrSlice'
import { resetKilledSlice } from '../../redux/killedSlice'
import { resetElement } from '../../redux/allElementSlice'

function GameScene() {
  const [start, setStart] = useState(false);
  const [rerender, set_Rerender] = useState(0);
  const all_Elements = useSelector((state) => state.allElements);
  const dispatch = useDispatch();
  const quit = () => {
    setStart(false);
  }
  const reset = () => {
    set_Rerender(rerender + 1);
  }
  const startGame = ()=>{
    setStart(true);
    set_Rerender(rerender + 1);
    dispatch(resetDragPiece());
    dispatch(resetAllValid());
    dispatch(resetCurrUsr());
    dispatch(resetKilledSlice());
    dispatch(resetElement());
  }
  const GetAllElements = () => {
    console.log(all_Elements);
  }

  return (
    <div>

      {
        start ? (
          <Chessboard reset_prop={rerender} />
        )
          : <button className='start-btn' onClick={startGame}>START</button>
      }

      <MouseFollower />
      {/* <button className='reset-btn' onClick={reset}>RESET</button> */}
      {start && <button style={{ position: 'absolute', bottom: '0', left: '0' }} className='quit-btn' onClick={quit}>QUIT</button>}
      {start && <button style={{ position: 'absolute', bottom: '0', right: '0' }} className='quit-btn' onClick={GetAllElements}>Get All Elements</button>}
    </div>


  )
}

export default GameScene
