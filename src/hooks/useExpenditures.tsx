import { useAxios } from './useAxios'

export const useExpenditures = (): any => {
  const { axiosRequest } = useAxios()

  const getExpenditures = async (): Promise<any> => {
    return axiosRequest({ method: 'GET', endpoint: 'expenditures' })
  }

  const createExpenditures = async (data: any): Promise<any> => {
    return axiosRequest({ method: 'POST', endpoint: 'expenditures', data })
  }

  return {
    getExpenditures,
    createExpenditures
  }
}
