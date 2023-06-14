import { createContext, type ReactNode } from 'react'
import { useUser } from '../hooks/useUser'
import { type PropsUserContext } from '../types'

export const UserContext = createContext<PropsUserContext>({
  user: null,
  setUserData: () => {},
  deleteUserData: () => {},
  token: null,
  setToken: () => {}
})

interface UserProps {
  children: ReactNode
}

export function UserProvider ({ children }: UserProps): JSX.Element {
  const { user, setUserData, deleteUserData, token, setToken } = useUser()

  return (
    <UserContext.Provider value={{ user, setUserData, deleteUserData, token, setToken }}>
      {children}
    </UserContext.Provider>
  )
}
