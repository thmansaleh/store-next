import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selections: [],
};

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    initializeSelections: (state, action) => {
      state.selections = action.payload.map(option => ({
        optionId: option.option_id,
        value: '',
        type: option.type
      }));
    },
    updateSelection: (state, action) => {
      const { optionId, value } = action.payload;
      const index = state.selections.findIndex(item => item.optionId === optionId);
      if (index !== -1) {
        state.selections[index].value = value;
      }
    }
  }
});

// Action creators
export const { initializeSelections, updateSelection } = optionsSlice.actions;

// Selectors
export const selectSelections = (state) => state.options.selections;
export const selectCurrentValue = (optionId) => (state) => 
  state.options.selections.find(item => item.optionId === optionId)?.value || '';

export default optionsSlice.reducer;