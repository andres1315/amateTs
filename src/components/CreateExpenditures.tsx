import { useForm } from 'react-hook-form'
import { InputIcon } from './InputIcon'

interface Inputs {
  supplier: number
  description: string
  value: number
}
export const CreateExpenditures: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()

  const onSubmit = (data: Inputs): void => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col  justify-center gap-2 w-full">
        <InputIcon label="Proveedor" name="supplier" icon="user">
          <input
            type="text"
            id="supplier"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-rose-500/50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600/30 sm:text-sm sm:leading-6"
            placeholder="John Doe"
            required
            {
              ...register('supplier', {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z0-9 ]+$/i
              })
            }
          />
          {(errors.supplier != null) && <span className='text-red-500'>Este campo es requerido</span>}
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
