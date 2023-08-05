import { useContext, useEffect } from 'react'
import { TapDashboardContext } from '../context/tapDashboard'

export function useTapsDashboard (): any {
  const { tap, changeTap, taps } = useContext(TapDashboardContext)

  useEffect(() => {
    navigation.forEach((item) => {
      if (item.componentName === tap) {
        item.current = true
      } else {
        item.current = false
      }
    })
    console.log('cambio', navigation)
  }, [tap])

  return { tap, changeTap, navigation }
}
