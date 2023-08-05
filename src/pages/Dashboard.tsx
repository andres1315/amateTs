import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarDashboard } from '../components/NavbarDashboard'
/* import { useExpenditures } from '../hooks/useExpenditures'
import { useIncomes } from '../hooks/useIncomes' */
import { HomeDashboard } from './HomeDashboard'
import { Customers } from './Customers'
import { Expenditures } from './Expenditures'
import { Incomes } from './Incomes'
import { useSelector } from 'react-redux'
import { type RootState } from '../store'
import { ProviderTapDashboard, TapDashboardContext } from '../context/tapDashboard'

const Dashboard: React.FC = () => {
  const { tap } = useContext(TapDashboardContext)
  const token = useSelector((state: RootState) => state.user.token)
  /*   const { token } = useContext(UserContext) */
  const navigate = useNavigate()
  useEffect(() => {
    if (token == null || token === undefined) {
      navigate('/login')
    }
    /* getExpenditures().then((response) => {
      setData(response.data.data)
    })
    getIncomes().then((response) => {
      console.log(response.data.data)
    }) */
  }, [token])

  const componentsTap = {
    Home: <HomeDashboard />,
    Customers: <Customers />,
    Expenditures: <Expenditures/>,
    Incomes: <Incomes/>
  }

  return (
    <>
      <NavbarDashboard />
      {componentsTap[tap]}
    </>
  )
}

export const DashboardWrapper: React.FC = () => {
  return (
    <ProviderTapDashboard>
      <Dashboard/>
    </ProviderTapDashboard>
  )
}
