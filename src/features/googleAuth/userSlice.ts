import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userState {
  name: string | null,
  email: string | null,
  avatarURL: string | null,
  id: string | null
}
export interface googleAuthFirebasePayload {
  displayName: string | null,
  email:string | null,
  photoURL:string | null,
  uid: string | null
}

const initialState: userState = {
  name: '',
  email: '',
  avatarURL: '',
  id: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action:PayloadAction<googleAuthFirebasePayload>) => {
      state.name = action.payload.displayName,
      state.email = action.payload.email,
      state.avatarURL = action.payload.photoURL,
      state.id = action.payload.uid
    },
    resetUser:(state) => {
      state.name = '',
      state.email = '',
      state.avatarURL = '',
      state.id = ''
    },
  }
})

export const {setUser, resetUser} = userSlice.actions
export default userSlice.reducer 