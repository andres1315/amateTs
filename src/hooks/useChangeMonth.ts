import { useState } from 'react'

const date = new Date()
export const useChangeMonth = (): any => {
  const [currentYear, setCurrentYear] = useState(date.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(date.getMonth())

  const handleChangeMonth = (value: number) => {
    if (currentMonth + value > 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else if (currentMonth + value < 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth + value)
    }
  }

  return {
    handleChangeMonth,
    currentMonth,
    currentYear,
    setCurrentYear
  }
}
