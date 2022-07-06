
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../features/Counter/counterSlice'
import userReducer from "../../features/googleAuth/userSlice"

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch