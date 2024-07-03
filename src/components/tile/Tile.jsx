// src/components/Tile.js
import React, { useEffect, useState } from 'react';
import './tile.css';
import Pieces from '../pieces/pieces';
import {  useDispatch } from 'react-redux';
import { setDragPiece,resetDragPiece } from '../../redux/dragPieceSlice';
import { useSelector } from 'react-redux';
import { setCurrUsr } from '../../redux/currUsrSlice';
import { updateElement } from '../../redux/allElementSlice';
import { updateValidElement,resetAllValid } from '../../redux/validSlice';

const Tile = ({ row, col, tileColor,reset,checkValidPlaces}) => {
    const currentDragPiece = useSelector((state) => state.dragPiece);
    const curr_user = useSelector((state) => state.currUsr);
    const valid_Elements = useSelector((state)=> state.validElements.valid_elements);
   // console.log(valid_Elements)
    const [piece,setPiece] = useState();
    const [current_piece,setCurrent_piece] = useState({ pieceId: null, color: null });
    const dispatch = useDispatch();
  //  let isValidMove = false;
    const negativeAnimation = () => {
        return;
    };
    const press = ()=>{
        if(current_piece.pieceId == null && currentDragPiece.pieceId == null)
        {
            negativeAnimation();
            return
        }
        if(current_piece.pieceId != null && currentDragPiece.pieceId != null)
        {
            negativeAnimation();
            return
        }
        
        if(current_piece.color != null &&  current_piece.color != curr_user.curr_user)
        {
            return
        }
       
        
        if(current_piece.pieceId ==null && currentDragPiece.pieceId != null &&  valid_Elements[row][col].valid){
            setCurrent_piece(currentDragPiece);
            setPiece(<Pieces pieceId={currentDragPiece.pieceId} color={currentDragPiece.color}/>);
            dispatch(updateElement({ row, col, piece: { pieceId: currentDragPiece.pieceId, color: currentDragPiece.color} }));
            dispatch(resetDragPiece());
            dispatch(resetAllValid()); 
            //dispatch(setCurrUsr(curr_user.curr_user))
            if(curr_user.curr_user == 0){
                dispatch(setCurrUsr({curr_user:1}))
            }
            else{
                dispatch(setCurrUsr({curr_user:0}))
            }
            return
        }
        
        dispatch(setDragPiece({pieceId:current_piece.pieceId,color:current_piece.color,row:row,col:col}))
        setPiece(null);
        setCurrent_piece({ pieceId: null, color: null });


        dispatch(updateElement({ row, col,  piece: null}));
        dispatch(updateValidElement({row:row,col:col,valid:true}))

        checkValidPlaces();
       
    }
    useEffect( () => {
        if(row == 0 && col == 0){
            setPiece(<Pieces pieceId={1} color={1}/>)
            setCurrent_piece({pieceId:1 , color:1})
            dispatch(updateElement({ row, col, piece:{pieceId:1 , color:1},}));
        }
        else if(row == 0 && col == 1){
            setPiece(<Pieces pieceId={2} color={1}/>)
            setCurrent_piece({pieceId:2 , color:1})
            dispatch(updateElement({ row, col,  piece:{pieceId:2 , color:1}}));
        }
        else if(row == 0 && col == 2){
            setPiece(<Pieces pieceId={3} color={1}/>)
            setCurrent_piece({pieceId:3 , color:1})
             dispatch(updateElement({ row, col,  piece:{pieceId:3 , color:1} }));
        }
        else if(row == 0 && col == 3){
            setPiece(<Pieces pieceId={4} color={1}/>)
            setCurrent_piece({pieceId:4 , color:1})
             dispatch(updateElement({ row, col,  piece:{pieceId:4 , color:1}}));
        }
        else if(row == 0 && col == 4){
            setPiece(<Pieces pieceId={5} color={1}/>)
            setCurrent_piece({pieceId:5 , color:1})
             dispatch(updateElement({ row, col,  piece:{pieceId:5 , color:1} }));
        }
        else if(row == 0 && col == 5){
            setPiece(<Pieces pieceId={3} color={1}/>)
            setCurrent_piece({pieceId:3 , color:1})
             dispatch(updateElement({ row, col,  piece:{pieceId:3 , color:1} }));
        }
        else if(row == 0 && col == 6){
            setPiece(<Pieces pieceId={2} color={1}/>)
            setCurrent_piece({pieceId:2 , color:1})
             dispatch(updateElement({ row, col,  piece:{pieceId:2 , color:1}}));
        }
        else if(row == 0 && col == 7){
            setPiece(<Pieces pieceId={1} color={1}/>)
            setCurrent_piece({pieceId:1 , color:1})
             dispatch(updateElement({ row, col,  piece:{pieceId:1 , color:1} }));
        }
        else if(row == 1 && col == 0){
            setPiece(<Pieces pieceId={0} color={1}/>)
            setCurrent_piece({pieceId:0 , color:1})
             dispatch(updateElement({ row, col,  piece:{pieceId:0 , color:1} }));
        }
        else if(row == 1 && col == 1){
            setPiece(<Pieces pieceId={0} color={1}/>)
            setCurrent_piece({pieceId:0 , color:1})
             dispatch(updateElement({ row, col,  piece:{pieceId:0 , color:1} }));
        }
        else if(row == 1 && col == 2){
            setPiece(<Pieces pieceId={0} color={1}/>)
            setCurrent_piece({pieceId:0 , color:1})
             dispatch(updateElement({ row, col, piece:{pieceId:0 , color:1} }));
        }
        else if(row == 1 && col == 3){
            setPiece(<Pieces pieceId={0} color={1}/>)
            setCurrent_piece({pieceId:0 , color:1})
             dispatch(updateElement({ row, col, piece:{pieceId:0 , color:1} }));
        }
        else if(row == 1 && col == 4){
            setPiece(<Pieces pieceId={0} color={1}/>)
            setCurrent_piece({pieceId:0 , color:1})
             dispatch(updateElement({ row, col, piece:{pieceId:0 , color:1} }));
        }
        else if(row == 1 && col == 5){
            setPiece(<Pieces pieceId={0} color={1}/>)
            setCurrent_piece({pieceId:0 , color:1})
             dispatch(updateElement({ row, col, piece:{pieceId:0 , color:1}}));
        }
        else if(row == 1 && col == 6){
            setPiece(<Pieces pieceId={0} color={1}/>)
            setCurrent_piece({pieceId:0 , color:1})
             dispatch(updateElement({ row, col, piece:{pieceId:0 , color:1} }));
        }
        else if(row == 1 && col == 7){
            setPiece(<Pieces pieceId={0} color={1}/>)
            setCurrent_piece({pieceId:0 , color:1})
             dispatch(updateElement({ row, col, piece:{pieceId:0 , color:1} }));
        }
        else if(row == 7 && col == 0){
            setPiece(<Pieces pieceId={1} color={0}/>)
            setCurrent_piece({pieceId:1 , color:0})
             dispatch(updateElement({ row, col, piece:{pieceId:1 , color:0} }));
        }
        else if(row == 7 && col == 1){
            setPiece(<Pieces pieceId={2} color={0}/>)
            setCurrent_piece({pieceId:2 , color:0})
             dispatch(updateElement({ row, col, piece:{pieceId:2 , color:0}  }));
        }
        else if(row == 7 && col == 2){
            setPiece(<Pieces pieceId={3} color={0}/>)
            setCurrent_piece({pieceId:1 , color:0})
             dispatch(updateElement({ row, col, piece:{pieceId:1 , color:0} }));
        }
        else if(row == 7 && col == 3){
            setPiece(<Pieces pieceId={4} color={0}/>)
            setCurrent_piece({pieceId:4 , color:0})
             dispatch(updateElement({ row, col, piece:{pieceId:4 , color:0}  }));
        }
        else if(row == 7 && col == 4){
            setPiece(<Pieces pieceId={5} color={0}/>)
            setCurrent_piece({pieceId:5 , color:0})
             dispatch(updateElement({ row, col, piece:{pieceId:5 , color:0} }));
        }
        else if(row == 7 && col == 5){
            setPiece(<Pieces pieceId={3} color={0}/>)
            setCurrent_piece({pieceId:3 , color:0})
             dispatch(updateElement({ row, col, piece:{pieceId:3 , color:0} }));
        }
        else if(row == 7 && col == 6){
            setPiece(<Pieces pieceId={2} color={0}/>)
            setCurrent_piece({pieceId:2 , color:0})
             dispatch(updateElement({ row, col, piece:{pieceId:2 , color:0} }));
        }
        else if(row == 7 && col == 7){
            setPiece(<Pieces pieceId={1} color={0}/>)
            setCurrent_piece({pieceId:1 , color:0})
             dispatch(updateElement({ row, col, piece:{pieceId:1 , color:0}  }));
        }
        else if(row == 6 && col == 0){
            setPiece(<Pieces pieceId={0} color={0}/>)
            setCurrent_piece({pieceId:0 , color:0})
             dispatch(updateElement({ row, col, piece:{pieceId:0 , color:0} }));
        }
        else if(row == 6 && col == 1){
            setPiece(<Pieces pieceId={0} color={0}/>)
            setCurrent_piece({pieceId:0 , color:0})
             dispatch(updateElement({ row, col, piece:{pieceId:0 , color:0}  }));
        }
        else if(row == 6 && col == 2){
            setPiece(<Pieces pieceId={0} color={0}/>)
            setCurrent_piece({pieceId:0 , color:0})
            dispatch(updateElement({ row, col, piece:{pieceId:0 , color:0}  }));
        }
        else if(row == 6 && col == 3){
            setPiece(<Pieces pieceId={0} color={0}/>)
            setCurrent_piece({pieceId:0 , color:0})
             dispatch(updateElement({ row, col, piece:{pieceId:0 , color:0} }));
        }
        else if(row == 6 && col == 4){
            setPiece(<Pieces pieceId={0} color={0}/>)
            setCurrent_piece({pieceId:0 , color:0})
             dispatch(updateElement({ row, col,  piece:{pieceId:0 , color:0} }));
        }
        else if(row == 6 && col == 5){
            setPiece(<Pieces pieceId={0} color={0}/>)
            setCurrent_piece({pieceId:0 , color:0})
             dispatch(updateElement({ row, col,  piece:{pieceId:0 , color:0}  }));
        }
        else if(row == 6 && col == 6){
            setPiece(<Pieces pieceId={0} color={0}/>)
            setCurrent_piece({pieceId:0 , color:0})
             dispatch(updateElement({ row, col,  piece:{pieceId:0 , color:0}  }));
        }
        else if(row == 6 && col == 7){
            setPiece(<Pieces pieceId={0} color={0}/>)
            setCurrent_piece({pieceId:0 , color:0})
             dispatch(updateElement({ row, col,  piece:{pieceId:0 , color:0}  }));
        }
    },[reset])


    return (
        <div className={`tile ${tileColor} `} data-row={row} data-col={col} onClick={() => press()}>
            {/* ${isValidMove ? 'valid-move' : ''} */}
            {
                valid_Elements[row][col].valid && <div className='valid-move'></div>
            }
            {piece}
            {/* <Pieces pieceId={1} color={1}/> */}
        </div>
    );
};

export default Tile;
