import { useState,useEffect } from 'react'
import React from 'react'
import './App.css'
import Chessboard from './components/chessboard/chessboard'
import MouseFollower from './components/mouseFollower/mouseFollower'
import { useSelector } from 'react-redux';

function App() {
  const [start,setStart] = useState(false);
  const [rerender,set_Rerender] = useState(0);
  const all_Elements = useSelector((state)=> state.allElements);
  const quit = () =>{
    setStart(false);
  }
  const reset = () =>{
   set_Rerender(rerender + 1);
  }
  const GetAllElements = ()=>{
    console.log(all_Elements);
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
   {start && <button className='quit-btn' onClick={GetAllElements}>Get All Elements</button>}
    </div>
  

  )
}

export default App
