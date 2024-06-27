import { useState,useEffect } from 'react'
import React from 'react'
import './App.css'
import Chessboard from './components/chessboard/chessboard'
import MouseFollower from './components/mouseFollower/mouseFollower'
function App() {
  const [start,setStart] = useState(false);
  const [rerender,set_Rerender] = useState(0);
  const quit = () =>{
    setStart(false);
  }
  const reset = () =>{
   set_Rerender(rerender + 1);
  }

  return (
    <div>
      {
        start ? (
         <Chessboard reset_prop={rerender}/> 
        )
        : <button className='start-btn' onClick={() => setStart(true)}>START</button>
        }
  
  <MouseFollower />
  {/* <button className='reset-btn' onClick={reset}>RESET</button> */}
   {start && <button className='quit-btn' onClick={quit}>QUIT</button>}
    </div>
  

  )
}

export default App
