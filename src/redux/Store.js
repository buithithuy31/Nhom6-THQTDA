import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './reducer/cartSlice'

const store = configureStore({
  reducer: {
    carts: cartSlice,
  },
})

export default store