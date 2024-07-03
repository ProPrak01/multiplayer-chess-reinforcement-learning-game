import { useState, useEffect } from 'react';
import React from 'react';
import Tile from '../tile/Tile';
import './chessboard.css';
import { updateValidElement } from '../../redux/validSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function Chessboard({ reset_prop }) {
    const dispatch = useDispatch();
    const [board, setBoard] = useState([]);
  //  const [validMoves, setValidMoves] = useState([]);
    const curr_user = useSelector((state) => state.currUsr);
    const currentDragPiece = useSelector((state) => state.dragPiece);
    const all_Elements = useSelector((state)=> state.allElements);

    const valid_Elements = useSelector((state)=> state.validElements);










    const getValidPositions = (piece, position)=>{
        const validPositions = [];
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
    const CheckValidPlaces = () => {

        const this_row = currentDragPiece.initialPos.row;
        const this_col = currentDragPiece.initialPos.col;
        const this_pieceId = currentDragPiece.pieceId;
        const this_color = currentDragPiece.color;
        console.log("current checkings : ",currentDragPiece);
        const valid_Positions = getValidPositions({ pieceId: this_pieceId, color: this_color }, { row: this_row, col: this_col });
        // valid_Positions is and array of-> {row,col}
            // for(let i = 0 ; i< 8;i++){
            //     for(let j = 0 ; j< 8;j++){
            //         if(valid_Positions.includes({row:i,col:j})){
            //             dispatch(updateValidElement({row:i,col:j,valid:true}))
            //         }
            //     }
            // }
     //   setValidMoves(validMoves);

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
                            checkValidPlaces={CheckValidPlaces} 
                        />
                    )
                )}
            </div>
        </>
    );
}

export default Chessboard;
