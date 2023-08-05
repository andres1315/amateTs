import { createContext, useState } from 'react'
import { type Taps, type TapContextType } from '../types'

export const TapDashboardContext = createContext<TapContextType | undefined>(undefined)

interface Props {
  children: React.ReactNode
}

export const ProviderTapDashboard: React.FC<Props> = ({ children }: Props) => {
  const initialValueTap = window.localStorage.getItem('tap') ?? 'Home'
  const [tap, setTap] = useState(initialValueTap)
  const changeTap = (newTap: string): void => {
    window.localStorage.setItem('tap', newTap)
    setTap(newTap)
  }
  const taps: Taps[] = [
    { name: 'Dashboard', current: tap === 'Home', componentName: 'Home' },
    { name: 'Clientes', current: tap === 'Customers', componentName: 'Customers' },
    { name: 'Egresos', current: tap === 'Expenditures', componentName: 'Expenditures' },
    { name: 'Ingresos', current: tap === 'Incomes', componentName: 'Incomes' }
  ]

  return (
    <TapDashboardContext.Provider value={{ changeTap, tap, taps }}>
      {children}
    </TapDashboardContext.Provider>
  )
}
