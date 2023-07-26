import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { FormLogin } from '../components/FormLogin'
import { useAppSelector } from '../hooks/store'

export const Login: React.FC = () => {
  const isLoged = useAppSelector((state) => state.user.isLoged)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoged) {
      navigate('/dashboard')
    }
  }, [])
  return (
    <div className="flex flex-col h-screen w-full relative items-center overflow-hidden">
      <div className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-rose-200 to-rose-100/80 -z-10"></div>
      <div className="flex min-h-full w-full  flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-44 w-auto"
            src="./logo.png"
            alt="Your Company"
          />
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
          Acceda a su cuenta
          </h2>
        </div>
        <FormLogin/>
      </div>
    </div>
  )
}
