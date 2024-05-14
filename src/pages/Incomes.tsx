import { CreateIncomes } from '../components/CreateIncomes'
import { useState, useEffect } from 'react'
import { useIncomes } from '../hooks/useIncomes'
import { ChangeMonthButtons } from '../components/ChangeMonthButtons'
import { useChangeMonth } from '../hooks/useChangeMonth'

export const Incomes: React.FC = () => {
  const [incomes, setIncomes] = useState([])
  const { getIncomes } = useIncomes()
  const { currentYear, currentMonth, handleChangeMonth, setCurrentYear } = useChangeMonth()

  useEffect(() => {
    getIncomes({ year: currentYear, month: currentMonth + 1 })
      .then((response: any) => {
        const { data, status } = response
        if (status === 200) {
          setIncomes(data.data)
        }
      })
  }, [currentMonth, currentYear])

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-12 lg:col-span-2 px-4 mt-2  border-rose-300/30  border-r">
        <CreateIncomes setCurrentYear={setCurrentYear} />
      </div>
      <div className="col-span-12 lg:col-span-10">
        <div className="w-full flex justify-center items-center gap-6 mt-1">
          <ChangeMonthButtons month={currentMonth} year={currentYear} handleChangeMonth={handleChangeMonth}/>
        </div>
        <div className=" w-full overflow-auto h-[calc(100vh-5rem)]">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr>
                <th>-</th>
                <th>Cliente</th>
                <th>Descripcion</th>
                <th>Monto</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y  divide-gray-100">
              {
                incomes.map((income: any) => {
                  const valueInCop = income.value.toLocaleString('es-CO', { currency: 'COP', style: 'currency', minimumFractionDigits: 0 })
                  return (
                  <tr className="border-b border-gray-200 text-center hover:bg-rose-200/40" key={income.id}>
                    <td>
                      <input
                        aria-describedby={`${income.id}-income`}
                        name="expenditures"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-rose-400/50 focus:ring-rose-400/50"
                      />
                    </td>
                    <td>
                      <span className="font-medium">{income.customerDetail?.name.toUpperCase()}</span>
                    </td>
                    <td >
                      <span>
                        {income.description.toLowerCase()}
                      </span>
                    </td>
                    <td >
                      <span className="bg-rose-100 text-rose-500  px-3 rounded-full">
                        {valueInCop}
                      </span>
                    </td>
                    <td>
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
