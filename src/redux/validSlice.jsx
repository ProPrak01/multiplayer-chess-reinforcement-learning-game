import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    valid_elements: Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 8 }, (_, col) => ({valid: false}))
    ),
};
const validElementSlice = createSlice({
    name: 'validElements',
    initialState,
    reducers: {
        updateValidElement: (state, action) => {
            const { row, col, valid } = action.payload;
            state.valid_elements[row][col] = { valid };
        },
        resetAllValid: (state) => {
            state.valid_elements = state.valid_elements.map(row =>
                row.map(col => ({ valid: false }))
            );
        },
    },
  
});
export const { updateValidElement ,resetAllValid} = validElementSlice.actions;
export default validElementSlice.reducer;
