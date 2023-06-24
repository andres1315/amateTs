import { useAxios } from './useAxios'

interface PropsCustomerCreate {
  name: string
  phone: number
}

export const useCustomers = (): any => {
  const { axiosRequest } = useAxios()

  const getCustomers = async (): Promise<any> => {
    return axiosRequest({ method: 'GET', endpoint: 'customers' })
  }

  const createCustomer = async (data: PropsCustomerCreate): Promise<any> => {
    return axiosRequest({ method: 'POST', endpoint: 'customers', data: { ...data, number: data.phone } })
  }

  return {
    getCustomers,
    createCustomer
  }
}
