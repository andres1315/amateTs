import axios from 'axios'
import { useUserActions } from './useUserActions'
import { type PropsAxios } from '../types'
import { useAppSelector } from './store'
export const useAxios = (): any => {
/*   const { deleteUserData } = useContext(UserContext) */
  const token = useAppSelector((state) => state.user.token)
  const { logoutUser } = useUserActions()
  const axiosInstance = axios.create({
    /* headers: {
      // Puedes agregar encabezados comunes aquí
      'Content-Type': 'application/json'
    } */
  })
  // axios intereceptor
  axiosInstance.interceptors.request.use((config) => {
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  async (error) => {
    return await Promise.reject(error)
  }
  )

  axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      if (error.response.status === 401) {
        logoutUser()
      } else if (error.response) {
        console.log('Error de respuesta:', error.response)
        return await Promise.reject(error.response)
      } else if (error.request) {
        console.log('No se recibió respuesta del servidor:', error.request)
        return await Promise.reject(error.request)
      } else {
        console.log('Error al configurar o enviar la solicitud:', error.message)
      }
      return await Promise.reject(error)
    }
  )

  const axiosRequest = async ({ method, endpoint, data = null }: PropsAxios): Promise<any> => {
    const baseUrl: string = import.meta.env.VITE_URL_API
    return await axiosInstance.request({
      method,
      url: `${baseUrl}${endpoint}`,
      data
    })
  }

  return {
    axiosRequest
  }
}
