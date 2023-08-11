import { CreateIncomes } from '../components/CreateIncomes'

export const Incomes: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-12 lg:col-span-2 mx-2">
        <CreateIncomes />

      </div>
      <div className="col-span-12 lg:col-span-10">

      </div>
    </div>
  )
}
