import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from '../context/user'
import { type PropsAxios } from '../types'

export const useAxios = (): any => {
  const { token, deleteUserData } = useContext(UserContext)
  console.log({ token })
  const axiosInstance = axios.create({
    headers: {
      // Puedes agregar encabezados comunes aquí
      'Content-Type': 'application/json'
    }
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
        deleteUserData()
      } else if (error.response) {
        console.log('Error de respuesta:', error.response)
      } else if (error.request) {
        console.log('No se recibió respuesta del servidor:', error.request)
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
