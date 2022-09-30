import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import authReducer from './authSlice'
import filterReducer from './filterSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    carts : cartReducer,
    auth: authReducer,
  },
});

export default store;
