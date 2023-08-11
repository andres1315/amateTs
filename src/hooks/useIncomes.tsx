import { useAxios } from './useAxios'

export const useIncomes = (): any => {
  const { axiosRequest } = useAxios()

  const getIncomes = async (): Promise<any> => {
    return axiosRequest({ method: 'GET', endpoint: 'incomes' })
  }

  const createIncomes = async (data: any): Promise<any> => {
    return axiosRequest({ method: 'POST', endpoint: 'incomes', data })
  }

  return {
    getIncomes,
    createIncomes
  }
}
