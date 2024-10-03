// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Example reducer

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducers here
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
});

export default store;
