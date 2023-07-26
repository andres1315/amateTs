import { login } from '../reducers/user'
import { useAppDispatch } from './store'

export const useUserActions = () => {
  const dispatch = useAppDispatch()
  const saveLogin = (token: string, name: string): void => {
    dispatch(login({ token, user: name, isLoged: true }))
  }
  return { saveLogin }
}
