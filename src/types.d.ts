
export interface User {
  name: string
  token: string
  username: string
}

export interface PropsUserContext {
  user: User | null
  setUserData: (user: User) => undefined
  deleteUserData: () => undefined
  token: User['token'] | null
  setToken: (token: User['token']) => undefined
}

export interface PropsAxios {
  method: 'get' | 'post' | 'put' | 'delete'
  endpoint: string
  data?: any
  headers?: any
}

export interface Taps {
  componentName: 'Home' | 'Incomes' | 'Expenditures' | 'Customers'
  name: string
  current: boolean
}

export interface CustomerList {
  id: number
  name: string
  number: number
  state: number
  createdAt: string
  updatedAt: string
}

export interface ExpendituresList {
  id: number
  description: string
  state: number
  supplier: number
  supplierDetail: {
    name: string
  }
  createdAt: string
  updatedAt: string
  value: number
  userCreated: number
}

export interface TapContextType {
  tap: string
  changeTap: (newTap: string) => void
  taps: Taps[]
};
