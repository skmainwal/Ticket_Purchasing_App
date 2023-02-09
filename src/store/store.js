import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducer'

export const store = configureStore({
  reducer: {
    dataReducer: counterSlice.reducer
  },
}) 