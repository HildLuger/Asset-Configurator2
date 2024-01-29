// slices/carPaintSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface MaterialProperties {
  color: string;
  roughness: number;
  metalness: number;
}

interface CarPaintState {
  materials: MaterialProperties[];
  currentMaterialIndex: number;
}

const initialState: CarPaintState = {
  materials: [
    { color: '#0E0F0E', roughness: 0.5, metalness: 0.1 },
    { color: '#939393', roughness: 0.9, metalness: 0.9 },
    { color: '#c2c2c2', roughness: 0.4, metalness: 0.2 },
    { color: '#870000', roughness: 0.3, metalness: 0.3 },
    { color: '#8b138c', roughness: 0.3, metalness: 0.3 },
    { color: '#111359', roughness: 0.3, metalness: 0.3 },
 
    // ... add more materials as needed
  ],
  currentMaterialIndex: 0,
};

export const carPaintSlice = createSlice({
  name: 'carPaint',
  initialState,
  reducers: {
    changeMaterial: (state) => {
      state.currentMaterialIndex = (state.currentMaterialIndex + 1) % state.materials.length;
    },
  },
});

export const { changeMaterial } = carPaintSlice.actions;
export default carPaintSlice.reducer;
