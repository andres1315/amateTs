import { useEffect, useState } from 'react'
import { useExpenditures } from '../hooks/useExpenditures'
import { CreateExpenditures } from '../components/CreateExpenditures'
import { type ExpendituresList } from '../types'
const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
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
        if (status === 200 && data.data.length > 0) {
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
        <div className="w-full flex justify-center gap-6 my-2">
          <button className="button bg-rose-300 text-white h-7 w-7 rounded-md  hover:bg-rose-500 transition easy-in-out duration-300" onClick={() => { handleChangeMonth(-1) } }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 12H18M6 12L11 7M6 12L11 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className='font-semibold text-gray-700'>{monthNames[monthView]}</span>
          <button className="button bg-rose-300 text-white h-7 w-7 rounded-md  hover:bg-rose-500 transition easy-in-out duration-300" onClick={() => { handleChangeMonth(1) }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 12H18M18 12L13 7M18 12L13 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
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
                    <td>{expenditure.supplierDetail.name}</td>
                    <td>{expenditure.description}</td>
                    <td>
                      <span className="bg-rose-100 text-rose-500 px-3 rounded-full">
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
