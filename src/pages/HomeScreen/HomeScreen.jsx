import { useState, useEffect } from 'react'

import React from 'react'
import './HomeScreen.css'

function HomeScreen() {
    return(
       <div className='Home'>
        <div className="home-head">
        Play Chess Online on the #1 Site!
        </div>
        <div className='home-buttons'>
            <div className='btn PlayMultiplayer'>Play Multiplayer</div>
            <div className='btn PlayComputer'>Play Computer</div>
        </div>
       </div>
    )
}



export default HomeScreen