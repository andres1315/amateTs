import { useForm } from 'react-hook-form'
import { useCustomers } from '../hooks/useCustomers'
import Swal from 'sweetalert2'

interface Inputs {
  name: string
  number: string
}

interface CustomersProps {
  customer: {
    name: string
    number: number
    id: number
  }
  refreshCustomer: React.Dispatch<React.SetStateAction<[]>>
}

export const FormUpdateCustomer: React.FC<CustomersProps> = ({ customer, refreshCustomer }: CustomersProps) => {
  const { updateCustomer } = useCustomers()
  const { name, number } = customer
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ defaultValues: { name, number: number.toString() } })
  const onSubmit = (data: Inputs): void => {
    const { name, number } = data
    if (name == null || number === null) {
      void Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son requeridos'
      })
    }
    updateCustomer({ data, id: customer.id })
      .then((response: { data: any, status: any }) => {
        const { status } = response
        if (status === 200) {
          refreshCustomer([])
          void Swal.fire({
            icon: 'success',
            title: 'Cliente actualizado',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch((error: { data: { message: string } }) => {
        const errorDescription = error.data.message != null ? error.data.message : 'Error al actualizar el cliente'
        void Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorDescription
        })
      })
  }
  return (
  <div className='w-full'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
          Nombre Cliente
        </label>
        <div className="mt-2 w-full flex">
          <input
            id='name'
            type="text"
            autoComplete="Tatiana murillo"
            required
            className="block w-full pl-2 rounded-md border-0 py-1.5 text-rose-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 focus:outline-rose-300 sm:text-sm sm:leading-6"
            {...register('name', { required: true })}
          />
          {(errors.name != null) && <span className="text-red-500">Este campo es requerido</span>}
        </div>
      </div>
      <div>
        <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
          phone
        </label>
        <div className="mt-2">
          <input
            id='number'
            type="number"
            autoComplete="3231234578"
            required
            className="block w-full pl-2 rounded-md border-0 py-1.5 text-rose-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 focus:outline-rose-300 sm:text-sm sm:leading-6"
            {...register('number', { required: true })}
          />
          {(errors.number != null) && <span className="text-red-500">Este campo es requerido</span>}
        </div>
      </div>
      <div className='mt-2 px-12'>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
        >
          Actualizar
        </button>
      </div>
    </form>
  </div>
  )
}
