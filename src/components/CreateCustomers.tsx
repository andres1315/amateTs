import { useForm } from 'react-hook-form'
import { InputIcon } from './InputIcon'
import Swal from 'sweetalert2'
import { useCustomers } from '../hooks/useCustomers'
interface Inputs {
  name: string
  phone: number
}

interface Props {
  refreshCustomer: React.Dispatch<React.SetStateAction<[]>>
}

export const CreateCustomers: React.FC<Props> = ({ refreshCustomer }: Props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
  const { createCustomer } = useCustomers()
  const onSubmit = (data: Inputs): void => {
    createCustomer(data)
      .then((response: { data: any, status: any }) => {
        const { status } = response
        if (status === 201) {
          reset()
          refreshCustomer([])
          void Swal.fire({
            icon: 'success',
            title: 'Cliente creado',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch((error: { data: { message: string } }) => {
        const errorDescription = error.data.message != null ? error.data.message : 'Error al crear el cliente'
        void Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorDescription
        })
      })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center gap-6 w-full">
          <InputIcon label="Nombre Completo" name="name" icon="user">
            <input
              type="text"
              id="name"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-rose-500/50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600/30 sm:text-sm sm:leading-6"
              placeholder="John Doe"
              required
              {
                ...register('name', {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z0-9 ]+$/i
                })
              }
            />
            {(errors.name != null) && <span className='text-red-500'>Este campo es requerido</span>}
          </InputIcon>
          <InputIcon label="Telefono" name="phone" icon="phone">
            <input
              type="number"
              id="phone"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-rose-500/50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600/30 sm:text-sm sm:leading-6"
              placeholder="321-123-4567"
              required
              {
                ...register('phone', {
                  required: true,
                  maxLength: 20
                })

              }
            />
            {(errors.phone != null) && <span className='text-red-500'>Este campo es requerido</span>}
          </InputIcon>

          <button className='button bg-rose-400/70 px-5 rounded-lg  py-1 hover:bg-rose-500/70' type='submit'>
            <span className='text-white '>Crear</span>
          </button>

          </div>
        </form>
  )
}
