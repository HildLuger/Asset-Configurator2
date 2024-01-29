import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type
interface DarkModeState {
  isDarkMode: boolean;
}

// Define the initial state
const initialState: DarkModeState = {
  isDarkMode: false,
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    // If you need to set dark mode to a specific value, you can use this action
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

// Export actions
export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;

// Export reducer
export default darkModeSlice.reducer;
