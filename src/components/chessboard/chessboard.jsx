import { useState, useEffect } from 'react'
import React from 'react'
import Tile from '../tile/Tile'
import './chessboard.css'
import { useSelector } from 'react-redux';
// import { setCurrUsr } from '../../redux/currUsrSlice';
function Chessboard({ reset_prop }) {
    const [board, setBoard] = useState([])
    //const [Pieces , setPieces] = useState([])
    
    const curr_user = useSelector((state) => state.currUsr);
    const currentDragPiece = useSelector((state) => state.dragPiece);

    useEffect(() => {
        console.log(currentDragPiece);
    }, [currentDragPiece])

    useEffect(() => {
        createChessboard()
    }, [reset_prop])

    const createChessboard = () => {
        let newboard = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const tileColor = (row + col) % 2 === 0 ? 'white-tile' : 'black-tile';
                // setBoard(...<Tile key={`${row}-${col}`} row={row} col={col} tileColor={tileColor} />);
                newboard.push(<Tile key={`${row}-${col}`} row={row} col={col} tileColor={tileColor} reset={reset_prop} />);
            }
        }

        setBoard(newboard);
    };
    // const resetPieces = () =>{
    //     let Pieces
    // }

    return (

        <>
            <div className='PlayerInfo'>{

                curr_user.curr_user == 1 ? 'WHITE TURN' : 'BLACK TURN'
            }</div>
            <div className="chessboard">{board}</div>
        </>

    )
}

export default Chessboard