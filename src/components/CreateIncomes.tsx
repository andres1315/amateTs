import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Combobox } from '@headlessui/react'
import debounce from 'just-debounce-it'
import { InputIcon } from './InputIcon'
import { useIncomes } from '../hooks/useIncomes'
import { useCustomers } from '../hooks/useCustomers'
import Swal from 'sweetalert2'

interface Inputs {
  customer: string | number
  value: number
  description: string
}

interface Customer {
  id: number
  name: string
}

interface Props {
  updateIncomes: React.Dispatch<React.SetStateAction<never[]>>
}

export function CreateIncomes ({ updateIncomes }: Props): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const { createIncomes } = useIncomes()
  const { filterCustomers } = useCustomers()
  const [resultsCustomers, setResultsCustomers] = useState([] as Customer[])
  const [selectedCustomer, setSelectedCustomer] = useState({ id: '', name: '' })
  
  const debounceHandleChange = useCallback(
    debounce(async (event: any) => {
      const customerFind = event.target.value
      if (customerFind.length < 2) return
      filterCustomers(event.target.value)
        .then((response: any) => {
          const data: Customer = response.data.data
          setResultsCustomers(data)
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
    const allData = { ...data, customer: selectedCustomer.id }
    console.log(allData)
    createIncomes(allData)
      .then(async (response: any) => {
        const { status } = response
        if (status === 201) {
          updateIncomes([])
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
      <div className="flex flex-col  justify-center gap-2 w-full ">
      <Combobox
        as='div'
        value={selectedCustomer}
        onChange={setSelectedCustomer}
      >
        <Combobox.Input
        autoFocus
        placeholder='Busca aqui el cliente'
        type='search'
        autoComplete='false'
        {
          ...register('customer', {
            required: true
          })
        }
        className='block w-full rounded-md border-0 py-1.5 pl-10 text-rose-500/50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600/30 sm:text-sm sm:leading-6'
        displayValue={(element: Customer) => element?.name}
        onChange={debounceHandleChange}
        />
        {
          resultsCustomers.length > 0 && (
            <Combobox.Options
            className=' z-10 w-full overflow-hidden bg-white border border-gray-300 rounded-t-none shadow-lg rounded-lg '>
              {resultsCustomers.map((customer: Customer) => {
                const { id, name } = customer
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
