import { createSlice } from '@reduxjs/toolkit';

// Initialize the state with an 8x8 grid, each cell containing { row, col, piece }
const initialState = {
    list_elements: Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 8 }, (_, col) => ({ row, col, piece: null }))
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
    },
});

export const { updateElement } = allElementSlice.actions;
export default allElementSlice.reducer;
