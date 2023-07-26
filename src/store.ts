import { type Middleware, configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers/user'

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  const { type, payload } = action
  if (type === 'user/login') {
    localStorage.setItem('user', JSON.stringify(payload.user))
    localStorage.setItem('token', payload.token)
  }
}
export const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: [persistanceLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
