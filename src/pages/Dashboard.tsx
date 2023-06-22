import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'
import { HeaderDashboard } from '../components/HeaderDashboard'
import { useExpenditures } from '../hooks/useExpenditures'
import { useIncomes } from '../hooks/useIncomes'
import { HomeDashboard } from './HomeDashboard'
import { Customers } from './Customers'
import { Expenditures } from './Expenditures'
import { Incomes } from './Incomes'

export const Dashboard: React.FC = () => {
  const [tap, setTap] = useState<string>('Home')

  const { token } = useContext(UserContext)
  const navigate = useNavigate()
  const { getExpenditures } = useExpenditures()
  const { getIncomes } = useIncomes()
  useEffect(() => {
    if (token == null || token === undefined) {
      navigate('/login')
    }
    getExpenditures().then((response) => {
      setData(response.data.data)
    })
    getIncomes().then((response) => {
      console.log(response.data.data)
    })
  }, [token])

  const componentsTap = {
    Home: <HomeDashboard />,
    Customers: <Customers />,
    Expenditures: <Expenditures/>,
    Incomes: <Incomes/>
  }

  return (
    <>
      <HeaderDashboard changeTap={setTap} />
      {componentsTap[tap]}
    </>
  )
}
