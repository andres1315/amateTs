import axios from 'axios'

export const authUser = async (data: any): Promise<any> => {
  return await axios.post(`${import.meta.env.VITE_URL_API}auth/login`, data)
}
