import { useAxios } from './useAxios'

export const useIncomes = (): any => {
  const { axiosRequest } = useAxios()

  const getIncomes = async ({ year, month }): Promise<any> => {
    return axiosRequest({ method: 'GET', endpoint: `incomes/filter/search?year=${year}&month=${month}` })
  }

  const createIncomes = async (data: any): Promise<any> => {
    return axiosRequest({ method: 'POST', endpoint: 'incomes', data })
  }

  const filterIncomes = async (data: any): Promise<any> => {
    const { month, year, isAccounted } = data
    let filters = ''
    if (month !== undefined && year !== undefined) filters += `month=${month}&year=${year}`
    if (isAccounted !== undefined) filters += `&isAccounted=${isAccounted}`

    return axiosRequest({ method: 'GET', endpoint: `incomes/filter/search?state=1${filters}`, data })
  }

  return {
    getIncomes,
    createIncomes,
    filterIncomes
  }
}
