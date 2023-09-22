import { useEffect, useState } from 'react'
import { useExpenditures } from '../hooks/useExpenditures'
import { CreateExpenditures } from '../components/CreateExpenditures'
import { type ExpendituresList } from '../types'
import { ChangeMonthButtons } from '../components/ChangeMonthButtons'

const date = new Date()
export const Expenditures: React.FC = () => {
  const { getExpenditures } = useExpenditures()
  const [expenditures, setExpenditures] = useState([])
  const [currentYear, setCurrentYear] = useState(date.getFullYear())
  const [monthView, setMonthView] = useState(() => {
    return date.getMonth()
  })

  useEffect(() => {
    getExpenditures({ year: currentYear, month: monthView + 1 }).then(
      (response: { data: { data: any[] }, status: number }) => {
        const { data, status } = response
        if (status === 200) {
          setExpenditures(data.data)
        }
      }
    )
  }, [monthView, currentYear])

  const handleChangeMonth = (value: number) => {
    if (monthView + value > 11) {
      setMonthView(0)
      setCurrentYear(currentYear + 1)
    } else if (monthView + value < 0) {
      setMonthView(11)
      setCurrentYear(currentYear - 1)
    } else {
      setMonthView(monthView + value)
    }
  }

  return (
    <div className='grid grid-cols-12 gap-2"'>
      <div className="col-span-12 lg:col-span-2 px-4 mt-2  border-rose-300/30  border-r">
        <CreateExpenditures updateExpenditures={setExpenditures} />
      </div>
      <div className="col-span-12 lg:col-span-10">
        <div className="w-full flex justify-center items-center gap-6 mt-1">
          <ChangeMonthButtons month={monthView} year={currentYear} handleChangeMonth={handleChangeMonth}/>
        </div>
        <div className="w-full overflow-auto h-[calc(100vh-5rem)] ">
          <table className="min-w-full divide-y mb-10">
            <thead>
              <th>-</th>
              <th>Proveedor</th>
              <th>Descripcion</th>
              <th>Valor</th>
            </thead>
            <tbody className="divide-y divide-gray-100 ">
              {expenditures.map((expenditure: ExpendituresList) => {
                const valueExpenditure = expenditure.value.toLocaleString(
                  'es-CO',
                  {
                    currency: 'COP',
                    style: 'currency',
                    minimumFractionDigits: 0
                  }
                )
                return (
                  <tr
                    key={expenditure.id}
                    className="text-center hover:bg-rose-200/40"
                  >
                    <td>
                      <input
                        id={`${expenditure.id}-description`}
                        aria-describedby={`${expenditure.id}-expenditure`}
                        name="expenditures"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-rose-400/50 focus:ring-rose-400/50"
                      />
                    </td>
                    <td>{expenditure.supplierDetail.name.toUpperCase()}</td>
                    <td>{expenditure.description.toLowerCase()}</td>
                    <td>
                      <span className="text-rose-500 px-3 rounded-full">
                        {valueExpenditure}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
