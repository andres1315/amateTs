import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  user: any
  token: string | null
  isLoged: boolean
}

export const initialState: UserState = {
  user: null,
  token: null,
  isLoged: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.isLoged = true
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout: (state) => {
      state.isLoged = false
      state.user = null
      state.token = null
    },
    setToken: (state, action: PayloadAction<UserState>) => {
      state.token = action.payload.token
    }
  }
})

export const userReducer = userSlice.reducer

export const { login, logout, setToken } = userSlice.actions
