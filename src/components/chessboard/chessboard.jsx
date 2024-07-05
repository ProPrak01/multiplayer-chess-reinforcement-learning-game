import { useState, useEffect } from 'react';
import React from 'react';
import Tile from '../tile/Tile';
import './chessboard.css';
import { updateValidElement } from '../../redux/validSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Pieces from '../pieces/pieces';

function Chessboard({ reset_prop }) {
    
    const [piece, setPiece] = useState();
    const dispatch = useDispatch();
    const [board, setBoard] = useState([]);
    //  const [validMoves, setValidMoves] = useState([]);
    const curr_user = useSelector((state) => state.currUsr);
    const currentDragPiece = useSelector((state) => state.dragPiece);
    const all_Elements = useSelector((state) => state.allElements);
    const killStore = useSelector((state) => state.killedElements);
    const valid_Elements = useSelector((state) => state.validElements);
    const [gameOver, setGameOver] = useState(false);
    const GameOver = ()=>{
     setGameOver(true);
    }
    const getValidPositions = (piece, position) => {
        const validPositions = [];
        const { row, col } = position;
        if (piece === null) {
            console.log("x")
            return validPositions;
        }
        const addMove = (row, col) => {
            if (row < 0 || row > 7 || col < 0 || col > 7) {
                console.log("y")
                return
            }
            if (all_Elements.list_elements[row][col].piece != null) {
                // if(board[row][col].piece.color != piece.color){
                //     validMoves.push({row,col})
                // }
                if (all_Elements.list_elements[row][col].piece.color != piece.color) {
                    validPositions.push({ row: row, col: col })
                    return;
                }
                console.log("z")
                return;
            }
            else {
               
                validPositions.push({ row: row, col: col })
            }
        }

        if (piece.pieceId == 0) {
            if (piece.color == 0) {
                if(row == 6){
                    if(all_Elements.list_elements[row-2][col].piece == null && all_Elements.list_elements[row-1][col].piece == null ){
                        addMove(row-2,col);
                    }
                }
               
                if(all_Elements.list_elements[row-1][col].piece == null){
                    addMove(row - 1, col);
                }
               
                if(col>= 1 && all_Elements.list_elements[row-1][col-1].piece != null){
                    addMove(row - 1, col-1);
                }
                if(col<= 6 && all_Elements.list_elements[row-1][col+1].piece != null){
                    addMove(row - 1, col+1);
                }

            }
            else {
                if(row == 1){
                    if(all_Elements.list_elements[row+2][col].piece == null && all_Elements.list_elements[row+1][col].piece == null ){
                        addMove(row+2,col);
                    }
                }
                console.log("a")
                if(all_Elements.list_elements[row+1][col].piece == null){
                    addMove(row + 1, col);
                }
                if(col>= 1 && all_Elements.list_elements[row+1][col-1].piece != null){
                    addMove(row + 1, col-1);
                }
                if(col<= 6 && all_Elements.list_elements[row+1][col+1].piece != null){
                    addMove(row + 1, col+1);
                }
            }
        }
        else if (piece.pieceId == 1) {
            //rook:
            let i = row - 1;
            while (i >= 0) {
                if (all_Elements.list_elements[i][col].piece != null) {
                    break;
                }
                addMove(i, col);
                i--;
            }
            i = row + 1;
            while (i < 8) {
                if (all_Elements.list_elements[i][col].piece != null) {
                    break;
                }
                addMove(i, col);
                i++;
            }
            i = col + 1;
            while (i < 8) {
                if (all_Elements.list_elements[row][i].piece != null) {
                    break;
                }
                addMove(row, i);
                i++;
            }
            i = col - 1;
            while (i >= 0) {
                if (all_Elements.list_elements[row][i].piece != null) {
                    break;
                }
                addMove(row, i);
                i--;
            }
        }
        else if (piece.pieceId == 5) {
            //king:
            addMove(row - 1, col);
            addMove(row + 1, col);
            addMove(row, col - 1);
            addMove(row, col + 1);
            addMove(row - 1, col - 1);
            addMove(row - 1, col + 1);
            addMove(row + 1, col - 1);
            addMove(row + 1, col + 1);
        }
        //kinght:
        else if (piece.pieceId == 2) {
            addMove(row - 2, col - 1);
            addMove(row + 2, col - 1);
            addMove(row - 2, col + 1);
            addMove(row + 2, col + 1);
            addMove(row - 1, col - 2);
            addMove(row + 1, col - 2);
            addMove(row - 1, col + 2);
            addMove(row + 1, col + 2);
        }
        //bishop:
        else if (piece.pieceId == 3) {
            // bishop:
            let i = row - 1, j = col - 1;
            while (i >= 0 && j >= 0) {
                if (all_Elements.list_elements[i][j].piece != null) {
                    addMove(i, j);
                    break;
                }
                addMove(i, j);
                i--;
                j--;
            }

            i = row - 1, j = col + 1;
            while (i >= 0 && j < 8) {
                if (all_Elements.list_elements[i][j].piece != null) {
                    addMove(i, j);
                    break;
                }
                addMove(i, j);
                i--;
                j++;
            }

            i = row + 1, j = col - 1;
            while (i < 8 && j >= 0) {
                if (all_Elements.list_elements[i][j].piece != null) {
                    addMove(i, j);
                    break;
                }
                addMove(i, j);
                i++;
                j--;
            }

            i = row + 1, j = col + 1;
            while (i < 8 && j < 8) {
                if (all_Elements.list_elements[i][j].piece != null) {
                    addMove(i, j);
                    break;
                }
                addMove(i, j);
                i++;
                j++;
            }
        }

        //queen:
        else if (piece.pieceId == 4) {
            //straight : 
            let i = row - 1;
            while (i >= 0) {
                if (all_Elements.list_elements[i][col].piece != null) {
                    addMove(i, col);
                    break;
                }
                addMove(i, col);
                i--;
            }
            i = row + 1;
            while (i < 8) {
                if (all_Elements.list_elements[i][col].piece != null) {
                    addMove(i, col);
                    break;
                }
                addMove(i, col);
                i++;
            }
            i = col + 1;
            while (i < 8) {
                if (all_Elements.list_elements[row][i].piece != null) {
                    addMove(row, i);
                    break;
                }
                addMove(row, i);
                i++;
            }
            i = col - 1;
            while (i >= 0) {
                if (all_Elements.list_elements[row][i].piece != null) {
                    addMove(row, i);
                    break;
                }
                addMove(row, i);
                i--;
            }
            // diagonal : 
            i = row - 1
            let j = col - 1;
            while (i >= 0 && j >= 0) {
                if (all_Elements.list_elements[i][j].piece != null) {
                    addMove(i, j);
                    break;
                }
                addMove(i, j);
                i--;
                j--;
            }

            i = row - 1, j = col + 1;
            while (i >= 0 && j < 8) {
                if (all_Elements.list_elements[i][j].piece != null) {
                    addMove(i, j);
                    break;
                }
                addMove(i, j);
                i--;
                j++;
            }

            i = row + 1, j = col - 1;
            while (i < 8 && j >= 0) {
                if (all_Elements.list_elements[i][j].piece != null) {
                    addMove(i, j);
                    break;
                }
                addMove(i, j);
                i++;
                j--;
            }

            i = row + 1, j = col + 1;
            while (i < 8 && j < 8) {
                if (all_Elements.list_elements[i][j].piece != null) {
                    addMove(i, j);
                    break;
                }
                addMove(i, j);
                i++;
                j++;
            }

        }

        return validPositions

    }
    const CheckValidPlaces = (this_row, this_col, this_pieceId, this_color) => {
        console.log("current checkings p : ", this_row, this_col, this_pieceId, this_color);

        let valid_Positions = getValidPositions({ pieceId: this_pieceId, color: this_color }, { row: this_row, col: this_col });
        // valid_Positions is and array of-> {row,col}
        console.log("current checkings 2: ", valid_Positions);
        for (let v in valid_Positions) {
            dispatch(updateValidElement({ row: valid_Positions[v].row, col: valid_Positions[v].col, valid: true }))
        }
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
        gameOver ?   
            <>
            <div className='PlayerInfo'>{
                curr_user.curr_user === 1 ? 'WHITE Wins' : 'BLACK Wins'
            }</div>
           <button onClick={() => setGameOver(false)}>Restart!</button>
            </>
            
        :
        <>
            <div className='PlayerInfo'>{
                curr_user.curr_user === 1 ? 'WHITE TURN' : 'BLACK TURN'
            }</div>
            <div className="killStore whiteK">
            {
                //kill list:
                killStore.killed_elements.white.map((element, index) => {
                    return   <div className={`piece ${element.color === 0 ? 'black' : 'white'} piece-${element.pieceId}` } style={{position:'relative'}} key={index}></div>
                })
            }
           
            </div>
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
                            GameOver = {GameOver}
                        />
                    )
                )}
            </div>
            <div className="killStore blackK">
            {
                //kill list:
                killStore.killed_elements.black.map((element, index) => {
                    return   <div className={`piece ${element.color === 0 ? 'black' : 'white'} piece-${element.pieceId}` } style={{position:'relative'}} key={index}></div>
                })
            }
            
            </div>
        </>
    );
}

export default Chessboard;