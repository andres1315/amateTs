import { useAxios } from './useAxios'

interface PropsCustomerCreate {
  name: string
  phone: number
}

interface PropsUpdateCustomer {
  data: {
    name: string
    number: number
  }
  id: number
}

export const useCustomers = (): any => {
  const { axiosRequest } = useAxios()

  const getCustomers = async (): Promise<any> => {
    return axiosRequest({ method: 'GET', endpoint: 'customers' })
  }

  const createCustomer = async (data: PropsCustomerCreate): Promise<any> => {
    return axiosRequest({ method: 'POST', endpoint: 'customers', data: { ...data, number: data.phone } })
  }

  const updateCustomer = async ({ data, id }: PropsUpdateCustomer): Promise<any> => {
    return axiosRequest({ method: 'PATCH', endpoint: `customers/${id}`, data })
  }

  const filterCustomers = async (search: string): Promise<any> => {
    return axiosRequest({ method: 'GET', endpoint: `customers/search?name=${search}` })
  }

  return {
    getCustomers,
    createCustomer,
    updateCustomer,
    filterCustomers
  }
}
