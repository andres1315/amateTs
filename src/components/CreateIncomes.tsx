import { useForm } from 'react-hook-form'
import { useIncomes } from '../hooks/useIncomes'
import { InputIcon } from './InputIcon'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useCustomers } from '../hooks/useCustomers'
interface Inputs {
  customer: number
  value: number
  description: string
}
export function CreateIncomes (): JSX.Element {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
  const { newIncome } = useIncomes()
  const { filterCustomers } = useCustomers()
  const [customerFinded, setCustomerFinded] = useState<string>('')
  function handleSearchCustomer (): any {
    if (customerFinded === '') return Swal.fire('Error', 'Debe ingresar un nombre del cliente', 'error')
    filterCustomers(customerFinded)
      .then((res: any) => {
        const { data, status } = res
        if (status === 200) {
          console.log(data)
        }
      })
      .catch((err: any) => {
        console.log(err)
      })
      .finally(() => {

      })
  }

  return (
    <form onSubmit={handleSubmit(newIncome)}>
      <div className="flex flex-col  justify-center gap-2 w-full">
        <InputIcon label="Cliente" name="supplier" icon="user">
          <div className="flex">
            <input
              type="text"
              id="searchCustomer"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-rose-500/50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600/30 sm:text-sm sm:leading-6"
              value={customerFinded}
              onChange={({ target }) => { setCustomerFinded(target.value) }}
              placeholder="Patricia Garcia"
            />
            <button type="button" className='bg-rose-400/60 text-white px-2 rounded-md hover:text-rose-400/60 hover:bg-white hover:shadow-sm border transition ease-in-out duration-300' onClick={handleSearchCustomer}>Buscar</button>
          </div>
        </InputIcon>
        <InputIcon label="Descripcion" name="description" icon="description">
          <input
            type="text"
            id="description"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-rose-500/50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600/30 sm:text-sm sm:leading-6"
            placeholder="John Doe"
            required
            {
              ...register('description', {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z0-9 ]+$/i
              })
            }
          />
          {(errors.description != null) && <span className='text-red-500'>Este campo es requerido</span>}
        </InputIcon>
        <InputIcon label="Valor" name="value" icon="dollar">
          <input
            type="text"
            id="value"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-rose-500/50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600/30 sm:text-sm sm:leading-6"
            placeholder="John Doe"
            required
            {
              ...register('value', {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z0-9 ]+$/i
              })
            }
          />
          {(errors.value != null) && <span className='text-red-500'>Este campo es requerido</span>}
        </InputIcon>
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            Crear
          </button>
        </div>
      </div>
    </form>
  )
}
