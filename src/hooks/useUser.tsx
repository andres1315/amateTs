import { useState } from 'react'
import { type User } from '../types'
export const useUser = (): any => {
  const localStorageUser = localStorage.getItem('user')
  const userParsed = localStorageUser != null && JSON.parse(localStorageUser)

  const [user, setUser] = useState(userParsed)
  const [token, setToken] = useState(userParsed?.token)

  const setUserData = (user: User): void => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', user.token)
    setUser(user)
    setToken(user.token)
  }

  const deleteUserData = (): void => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
    setToken(null)
    console.log('se ejeceutdo desde edelete user')
  }

  return { user, setUserData, deleteUserData, token, setToken }
}
