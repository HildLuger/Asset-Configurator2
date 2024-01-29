// slices/carSeatsSlice.js or .tsx
import { createSlice } from '@reduxjs/toolkit';

interface MaterialProperties {
  color: string;
  roughness: number;
  metalness: number;
}

interface CarSeatsState {
  materials: MaterialProperties[];
  currentMaterialIndex: number;
}

const initialState: CarSeatsState = {
  materials: [
    { color: '#0E0F0E', roughness: 0.5, metalness: 0.1 },
    { color: '#44362d', roughness: 0.5, metalness: 0.1 },
    { color: '#8e8e8e', roughness: 0.5, metalness: 0.1 },
    // Add other materials as needed
  ],
  currentMaterialIndex: 0,
};

export const carSeatsSlice = createSlice({
  name: 'carSeats',
  initialState,
  reducers: {
    changeSeatsMaterial: (state) => {
      state.currentMaterialIndex = (state.currentMaterialIndex + 1) % state.materials.length;
    },
  },
});

export const { changeSeatsMaterial } = carSeatsSlice.actions;
export default carSeatsSlice.reducer;
