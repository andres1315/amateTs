import { useAxios } from './useAxios'

export const useSuppliers = (): any => {
  const { axiosRequest } = useAxios()

  const filterSuppliers = async (name: string): Promise<any> => {
    return axiosRequest({
      method: 'GET',
      endpoint: `suppliers/search?name=${name}`
    })
  }

  return {
    filterSuppliers
  }
}
