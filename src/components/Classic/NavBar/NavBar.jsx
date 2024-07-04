import { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";

import React from 'react'
import './NavBar.css'

function NavBar() {
    return(
        // <div className='nav'>
        //     <div className="buttons">
        //         <button className='btn'>Classic</button>
        //         <button className='btn'>Multiplayer</button>
        //         <button className='btn'>Settings</button>
        //         <button className='btn'>Quit</button>
        //         <button className='btn'>Help</button>
        //         <button className='btn'>About</button>
        //         <button className='btn'>Login</button>
        //         <button className='btn'>Register</button>
        //     </div>
        // </div>
        <>
        
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/GameScene">GameScreen</Link>
            </li>
            
          </ul> */}
         



  
        <Outlet />
      </>
    )
}



export default NavBar