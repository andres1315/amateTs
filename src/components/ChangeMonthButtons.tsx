
interface Props {
  month: number
  year: number
  handleChangeMonth: (value: number) => void
}

export function ChangeMonthButtons ({ month, year, handleChangeMonth }: Props): JSX.Element {
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  return (
    <>
      <button
        className="button bg-rose-300 text-white h-7 w-7 rounded-md  hover:bg-rose-500 transition easy-in-out duration-300"
        onClick={() => {
          handleChangeMonth(-1)
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 12H18M6 12L11 7M6 12L11 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <span className="font-semibold text-gray-700 w-40 flex justify-center">
        {monthNames[month]} - {year}
      </span>

      <button
        className="button bg-rose-300 text-white h-7 w-7 rounded-md  hover:bg-rose-500 transition easy-in-out duration-300"
        onClick={() => {
          handleChangeMonth(1)
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 12H18M18 12L13 7M18 12L13 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  )
}
