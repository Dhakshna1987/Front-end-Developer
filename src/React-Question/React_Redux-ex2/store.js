import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './index'; 

const store = configureStore({
  reducer: counterReducer, 
});

export default store;
