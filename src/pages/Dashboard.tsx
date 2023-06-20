import { useContext, useEffect } from 'react'
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'
export const Dashboard: React.FC = () => {
  const { token } = useContext(UserContext)
  const { axiosRequest } = useAxios()
  const navigate = useNavigate()

  useEffect(() => {
    if (token == null || token === undefined) {
      navigate('/login')
    }
  }, [token])

  axiosRequest({ method: 'get', endpoint: 'expenditures' }).then((response) => {
    console.log(response)
  })
  return (
    <h1>Dashboard</h1>
  )
}
