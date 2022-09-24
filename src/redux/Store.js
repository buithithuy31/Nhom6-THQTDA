import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducer/cartSlice'

const store = configureStore({
  reducer: {
    carts: cartReducer,
  },
})

export default store