import { type Stats } from '../types'
import { useAxios } from './useAxios'
import { useState, useEffect } from 'react'
export const useStatsHome = (): any => {
  const { axiosRequest } = useAxios()

  const stats: Stats[] = [
    {
      name: 'Ingresos',
      stat: 0,
      previousStat: 0,
      change: '0%',
      changeType: 'increase'
    },
    {
      name: 'Egresos',
      stat: 0,
      previousStat: 0,
      change: '0%',
      changeType: 'increase'
    },
    {
      name: 'Caja',
      stat: 0
    }
  ]
  const [statHome, setStatHome] = useState<Stats[]>(stats)

  const getStats = async (): Promise<any> => {
    return axiosRequest({ method: 'GET', endpoint: 'stats' })
  }

  useEffect(() => {
    void getStats().then((response) => {
      const { data, status } = response
      if (status === 200) {
        const {
          currentMonthIncomes,
          previousMonthIncomes,
          currentMonthExpenditures,
          previousMonthExpenditures,
          cashFlow
        } = data.data
        if (currentMonthIncomes !== null) {
          const valueCurrentIncomes = currentMonthIncomes.reduce((acumulate, currentIncome) => acumulate + currentIncome.value, 0)
          const valuePreviousIncomes = previousMonthIncomes.reduce((acumulate, currentIncome) => acumulate + currentIncome.value, 0)
          const valueCurrentExpenditures = currentMonthExpenditures.reduce((acumulate, currentExpenditure) => acumulate + currentExpenditure.value, 0)
          const valuePreviousExpenditures = previousMonthExpenditures.reduce((acumulate, currentExpenditure) => acumulate + currentExpenditure.value, 0)
          const newStats = [...stats]
          newStats[0].stat = valueCurrentIncomes
          newStats[0].previousStat = valuePreviousIncomes
          const valueChangeIncomes = valueCurrentIncomes > 0 && valuePreviousIncomes > 0 ? Math.round(((valueCurrentIncomes - valuePreviousIncomes) / valuePreviousIncomes) * 100) : 0
          newStats[0].change = `${valueChangeIncomes}%`
          newStats[0].changeType =
          valueCurrentIncomes > valuePreviousIncomes ? 'increase' : 'decrease'
          newStats[1].stat = valueCurrentExpenditures
          newStats[1].previousStat = valuePreviousExpenditures
          const valueChangeExpenditures = valueCurrentExpenditures > 0 && valuePreviousExpenditures > 0 ? Math.round(((valueCurrentExpenditures - valuePreviousExpenditures) / valuePreviousExpenditures) * 100) : 0
          newStats[1].change = `${valueChangeExpenditures}%`
          newStats[1].changeType =
          valueCurrentExpenditures > valuePreviousExpenditures ? 'increase' : 'decrease'
          newStats[2].stat = cashFlow

          newStats[2].changeType =
            cashFlow > 0 ? 'increase' : 'decrease'
          setStatHome(newStats)
        }
      }
    })
  }, [])

  return {
    statHome
  }
}
