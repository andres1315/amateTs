import { useForm } from 'react-hook-form'
import { InputIcon } from './InputIcon'
import { useCallback, useState } from 'react'
import { useSuppliers } from '../hooks/useSuppliers.'
import { Combobox } from '@headlessui/react'
import Swal from 'sweetalert2'
import debounce from 'just-debounce-it'
import { useExpenditures } from '../hooks/useExpenditures'
interface Inputs {
  supplier: number | string
  description: string
  value: number
}

interface Supplier {
  id: number | null
  name: string
}

interface Props {
  updateExpenditures: React.Dispatch<React.SetStateAction<never[]>>
}

export const CreateExpenditures: React.FC<Props> = ({ updateExpenditures }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const { filterSuppliers } = useSuppliers()
  const { createExpenditures } = useExpenditures()
  const [supplier, setSupplier] = useState([] as Supplier[])
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier>()

  const debounceHandleChange = useCallback(
    debounce(async (event: any) => {
      const customerFind = event.target.value
      if (customerFind.length < 2) return
      filterSuppliers(event.target.value)
        .then((response: any) => {
          const data: Supplier[] = response.data.data
          setSupplier(data)
        })
        .catch(async (error: any) => {
          console.log(error)
          const message = error?.data?.message || 'Error'
          return await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            timer: 2000
          })
        })
    }, 300)
    , [])

  const handleValueForm = (data: Inputs, e: any): any => {
    const allData = { ...data, supplier: selectedSupplier?.id }
    console.log(allData)
    createExpenditures(allData)
      .then(async (response: any) => {
        const { status } = response
        if (status === 201) {
          updateExpenditures([])
          e.target.reset()
          void Swal.fire({
            icon: 'success',
            title: 'Creado',
            text: 'Ingreso creado correctamente',
            timer: 2000
          })
        }
      })
      .catch(async (error: any) => {
        console.log(error)
        const message = error?.data?.message || 'Error'
        return await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message,
          timer: 2000
        })
      })
  }

  return (
    <form onSubmit={handleSubmit(handleValueForm)}>
      <div className="flex flex-col  justify-center gap-2 w-full">
        <label className="block  font-medium  text-gray-900">
          Proveedor
        </label>
        <Combobox
          as='div'
          value={selectedSupplier}
          onChange={setSelectedSupplier}
        >
          <Combobox.Input
          autoFocus
          placeholder='Busca aqui el Proveedor'
          type='search'
          autoComplete='false'
          {
            ...register('supplier', {
              required: true
            })
          }
          className='block w-full rounded-md border-0 py-1.5 pl-10 text-rose-500/50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600/30 sm:text-sm sm:leading-6'
          displayValue={(element: Supplier) => element?.name}
          onChange={debounceHandleChange}
          />
          {
            supplier.length > 0 && (
              <Combobox.Options
              className=' z-10 w-full overflow-hidden bg-white border border-gray-300 rounded-t-none shadow-lg rounded-lg '>
                {supplier.map((supplier: Supplier) => {
                  const { id, name } = supplier
                  return (
                    <Combobox.Option key={id} value={{ id, name }}>
                    {({ active, selected }) => (
                        <span className={`block p-4 hover:bg-gray-100 ${active ? 'bg-gray-100' : 'bg-white'}`}>
                          {selected && <span className='sr-only'>Seleccionado</span>}
                          <strong>{name}</strong>
                        </span>
                    )}
                    </Combobox.Option>
                  )
                })}
              </Combobox.Options>
            )
          }
        </Combobox>
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
                maxLength: 250
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
