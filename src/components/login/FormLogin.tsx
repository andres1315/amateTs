import axios from 'axios'
import { useForm, type SubmitHandler } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { UserContext } from '../../context/user'
import { useNavigate } from 'react-router-dom'
interface Inputs {
  username: string
  password: string
}

export const FormLogin: React.FC = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const { setUserData } = useContext(UserContext)
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios.post(`${import.meta.env.VITE_URL_API}auth/login`, data)
      .then((response) => {
        const { data, status } = response
        if (status === 200) {
          setUserData(data.data)
          console.log(setUserData)
          void Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            navigate('/dashboard')
          }, 1500)
        }
      })
      .catch(async (error) => {
        const message = error.response.data.message ?? 'Se presentó un error al intentar iniciar sesión'
        await Swal.fire(
          'Oops...',
          message,
          'warning'
        )
      })
  }
  return (

    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Usuario
            </label>
            <div className="mt-2">
              <input
                type="text"
                autoComplete="Usuario"
                required
                className="block w-full pl-2 rounded-md border-0 py-1.5 text-rose-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 focus:outline-rose-300 sm:text-sm sm:leading-6"
                {...register('username', { required: true })}
              />
              {(errors.username != null) && <span className="text-red-500">Este campo es requerido</span>}
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Contraseña
            </label>
            <div className="mt-2">
              <input
                {...register('password', { required: true })}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full pl-2 rounded-md border-0 py-1.5 text-rose-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 focus:outline-rose-300 sm:text-sm sm:leading-6"
              />
              {(errors.password != null) && <span className="text-red-500">Este campo es requerido</span>}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
