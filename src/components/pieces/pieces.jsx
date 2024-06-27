import { useState,useEffect } from 'react'
import React from 'react'
import './pieces.css'


function Pieces({pieceId,color}) {
    

    // pawn: 0
    // rook: 1
    // knight:2
    // bishop:3
    // queen: 4
    // king:5
    // color
    // black: 0
    // white: 1


    return(
        <div className={`piece ${color === 0 ? 'black' : 'white'} piece-${pieceId}`}></div>
    )
}

export default Pieces
