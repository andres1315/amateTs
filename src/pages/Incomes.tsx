import { CreateIncomes } from '../components/CreateIncomes'
import { useState, useEffect } from 'react'
import { useIncomes } from '../hooks/useIncomes'
export const Incomes: React.FC = () => {
  const [incomes, setIncomes] = useState([] as any)
  const { getIncomes } = useIncomes()
  useEffect(() => {
    if (incomes.length === 0) {
      getIncomes()
        .then((response: any) => {
          const { data, status } = response
          if (status === 200) {
            setIncomes(data.data)
          }
        })
    }
  }, [incomes])
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-12 lg:col-span-2 mx-2 mt-2">
        <CreateIncomes updateIncomes={setIncomes} />

      </div>
      <div className="col-span-12 lg:col-span-10">
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-center"> </th>
                <th className="py-3 px-6 text-left">Cliente</th>
                <th className="py-3 px-6 text-left">Descripcion</th>
                <th className="py-3 px-6 text-center">Monto</th>
                <th className="py-3 px-6 text-center">Fecha</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {
                incomes.map((income: any) => {
                  return (
                  <tr className="border-b border-gray-200 hover:bg-gray-100" key={income.id}>
                    <td className="py-3 px-6 text-center">
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
                      </label>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">{income.customerDetail.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>
                          {income.description.toUpperCase()}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-rose-200 text-rose-600 py-1 px-3 rounded-full">
                        ${income.value}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>{new Date(income.createdAt).toLocaleDateString('es-CO', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      })}</span>
                    </td>
                  </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
