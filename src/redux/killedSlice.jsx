import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    killed_elements: {
        white: [],
        black: []
    }
};

const killedElements = createSlice({
    name: 'killedElements',
    initialState,
    reducers: {
        updateKilledElement: (state, action) => {
            const { pieceId, color } = action.payload;
            if (color === 1) { 
                state.killed_elements.white.push({ pieceId, color });
            } else if (color === 0) { 
                state.killed_elements.black.push({ pieceId, color });
            }
        },
        resetKilledSlice: (state) => {
            state.killed_elements = initialState.killed_elements;
        },
    },
});

export const { updateKilledElement ,resetKilledSlice} = killedElements.actions;
export default killedElements.reducer;
