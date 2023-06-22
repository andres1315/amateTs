import { useAxios } from './useAxios'

export const useIncomes = (): any => {
  const { axiosRequest } = useAxios()

  const getIncomes = async (): Promise<any> => {
    return axiosRequest({ method: 'GET', endpoint: 'incomes' })
  }

  return {
    getIncomes
  }
}
