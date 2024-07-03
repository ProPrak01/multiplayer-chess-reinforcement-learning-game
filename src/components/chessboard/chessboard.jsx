import { useState, useEffect } from 'react';
import React from 'react';
import Tile from '../tile/Tile';
import './chessboard.css';
import { useSelector } from 'react-redux';

function Chessboard({ reset_prop }) {
    const [board, setBoard] = useState([]);
    const [validMoves, setValidMoves] = useState([]);
    const curr_user = useSelector((state) => state.currUsr);
    const currentDragPiece = useSelector((state) => state.dragPiece);
    const all_Elements = useSelector((state)=> state.allElements);
    const getValidMoves = (piece, position, board)=>{
        const validMoves = [];
        const { row, col } = position;
        if (piece === null) {
            return validMoves;
        }
        const addMove=(row,col)=>{
            if(row < 0 || row > 7 || col < 0 || col > 7){
                return
            }
            if(board[row][col].piece != null){
                if(board[row][col].piece.color != piece.color){
                    validMoves.push({row,col})
                }   
            }
            else{
                validMoves.push({row,col})
            }
        }
        if(piece.pieceId == 0){
            addMove(row-1,col-1)
            addMove(row-1,col+1)
            addMove(row+1,col-1)
            addMove(row+1,col+1)
        }
        
        
    }
    const CheckValidPlaces = (piece, position) => {
        const validMoves = getValidMoves(piece, position, board);
        setValidMoves(validMoves);
    };

    useEffect(() => {
        console.log(currentDragPiece);
    }, [currentDragPiece]);

    useEffect(() => {
        createChessboard();
    }, [reset_prop]);

    const createChessboard = () => {
        let newboard = [];
        for (let row = 0; row < 8; row++) {
            let newRow = [];
            for (let col = 0; col < 8; col++) {
                const tileColor = (row + col) % 2 === 0 ? 'white-tile' : 'black-tile';
                newRow.push({
                    row,
                    col,
                    tileColor,
                   
                });
            }
            newboard.push(newRow);
        }
        setBoard(newboard);
    };

    return (
        <>
            <div className='PlayerInfo'>{
                curr_user.curr_user === 1 ? 'WHITE TURN' : 'BLACK TURN'
            }</div>
            <div className="chessboard">
                {board.map((row, rowIndex) =>
                    row.map((tile, colIndex) =>
                        <Tile 
                            key={`${rowIndex}-${colIndex}`} 
                            row={tile.row} 
                            col={tile.col} 
                            tileColor={tile.tileColor} 
                            
                            reset={reset_prop} 
                            checkValid={() => CheckValidPlaces(currentDragPiece, { row: tile.row, col: tile.col })} 
                            isValidMove={validMoves.some(move => move.row === tile.row && move.col === tile.col)}
                        />
                    )
                )}
            </div>
        </>
    );
}

export default Chessboard;
