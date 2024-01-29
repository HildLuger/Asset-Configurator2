// store.ts
import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './slices/darkModeSlice';
import carPaintReducer from './slices/carPaintSlice';
import carSeatsReducer from './slices/carSeatsSlice';
import modelReducer from './slices/dressSlice'; // Import the model reducer

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    carPaint: carPaintReducer,
    carSeats: carSeatsReducer,
    model: modelReducer, // Add the model reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
