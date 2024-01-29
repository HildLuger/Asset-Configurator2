// slices/modelSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const modelSlice = createSlice({
  name: 'model',
  initialState: {
    currentModel: 'dress.gltf',
  },
  reducers: {
    setModel: (state, action: PayloadAction<string>) => {
      state.currentModel = action.payload;
    },
  },
});

export const { setModel } = modelSlice.actions;

export default modelSlice.reducer;
