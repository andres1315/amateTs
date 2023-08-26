import { CreateIncomes } from '../components/CreateIncomes'

export const Incomes: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-12 lg:col-span-2 mx-2">
        <CreateIncomes />

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
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-center">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
                  </label>
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-medium">John Doe</span>
                    <span className="text-xs text-gray-500 px-2">ID: 1</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      <span className="text-xs text-gray-500 px-2">ID: 1</span>
                    </span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                    $100
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <span>2021-10-12</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
