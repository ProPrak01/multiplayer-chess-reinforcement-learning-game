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
    },
});

export const { updateKilledElement } = killedElements.actions;
export default killedElements.reducer;
