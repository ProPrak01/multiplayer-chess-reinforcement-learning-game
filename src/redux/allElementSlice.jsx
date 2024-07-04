import { createSlice } from '@reduxjs/toolkit';

// Piece types and their corresponding pieceId
const pieces = {
    pawn: 0,
    rook: 1,
    knight: 2,
    bishop: 3,
    queen: 4,
    king: 5,
};

// Color types
const colors = {
    black: 0,
    white: 1,
};

// Initialize the state with an 8x8 grid and specific pieces
const initialState = {
    list_elements: Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 8 }, (_, col) => {
            let piece = null;
            
            if (row === 1) {
                piece = { pieceId: pieces.pawn, color: colors.white };
            } else if (row === 6) {
                piece = { pieceId: pieces.pawn, color: colors.black };
            } else if (row === 0 || row === 7) {
                const color = row === 0 ? colors.white : colors.black;
                switch (col) {
                    case 0:
                    case 7:
                        piece = { pieceId: pieces.rook, color };
                        break;
                    case 1:
                    case 6:
                        piece = { pieceId: pieces.knight, color };
                        break;
                    case 2:
                    case 5:
                        piece = { pieceId: pieces.bishop, color };
                        break;
                    case 3:
                        piece = { pieceId: pieces.queen, color };
                        break;
                    case 4:
                        piece = { pieceId: pieces.king, color };
                        break;
                    default:
                        break;
                }
            }

            return { row, col, piece };
        })
    ),
};

const allElementSlice = createSlice({
    name: 'allElements',
    initialState,
    reducers: {
        updateElement: (state, action) => {
            const { row, col, piece } = action.payload;
            state.list_elements[row][col] = { row, col, piece };
        },
        resetElement: (state) => {
            state.list_elements = initialState.list_elements;
        },
    },
});

export const { updateElement,resetElement } = allElementSlice.actions;
export default allElementSlice.reducer;
