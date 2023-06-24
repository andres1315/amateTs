import { CreateCustomers } from '../components/CreateCustomers'
import { useCustomers } from '../hooks/useCustomers'
import { useEffect, useState } from 'react'

export const Customers: React.FC = () => {
  const { getCustomers } = useCustomers()
  const [customer, setCustomer] = useState<any>([])

  useEffect(() => {
    getCustomers().then((response: { data: any }) => {
      const { data } = response.data
      setCustomer(data)
    })
  }, [])
  return (
    <div className="flex pt-2">
      <div className="mx-4 pr-4  border-rose-300/30  border-r">
        <CreateCustomers/>
      </div>
      <div className="w-full">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <th>-</th>
            <th>Nombre</th>
            <th>Telefono</th>
          </thead>
          <tbody className="divide-y  divide-gray-200">
            {customer.map((item: { name: string, number: number }, index: number) => (
              <tr key={index} className='text-center'>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
