import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const userLocalStorage = JSON.parse(localStorage.getItem('user'))
const tokenLocalStorage = localStorage.getItem('token')
export interface UserState {
  user?: any | null
  token?: string | null
  isLoged: boolean
}

export const initialState: UserState = {
  user: userLocalStorage,
  token: tokenLocalStorage,
  isLoged: tokenLocalStorage != null
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
