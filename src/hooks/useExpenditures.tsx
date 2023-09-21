import { useAxios } from './useAxios'

export const useExpenditures = (): any => {
  const { axiosRequest } = useAxios()

  const getExpenditures = async ({ year, month }): Promise<any> => {
    return axiosRequest({ method: 'GET', endpoint: `expenditures/filter?year=${year}&month=${month}` })
  }

  const createExpenditures = async (data: any): Promise<any> => {
    return axiosRequest({ method: 'POST', endpoint: 'expenditures', data })
  }

  return {
    getExpenditures,
    createExpenditures
  }
}
