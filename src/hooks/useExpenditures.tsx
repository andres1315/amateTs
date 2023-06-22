import { useAxios } from './useAxios'

export const useExpenditures = (): any => {
  const { axiosRequest } = useAxios()

  const getExpenditures = async (): Promise<any> => {
    return axiosRequest({ method: 'GET', endpoint: 'expenditures' })
  }

  return {
    getExpenditures
  }
}
