import { CreateCustomers } from '../components/CreateCustomers'
import { useCustomers } from '../hooks/useCustomers'
import { useEffect, useState } from 'react'
import { type CustomerList } from '../types'
import Swal from 'sweetalert2'
import { Modal } from '../components/Modal'
import { FormUpdateCustomer } from '../components/FormUpdateCustomer'

interface ModalContent {
  title: string
  content: JSX.Element
}

export const Customers: React.FC = () => {
  const { getCustomers } = useCustomers()
  const [customer, setCustomer] = useState<any>([])
  const [customerSelected, setCustomerSelected] = useState<CustomerList>({})
  const [open, setOpen] = useState(false)
  const [contentModal, setContentModal] = useState<ModalContent>({})
  useEffect(() => {
    setOpen(false)
    if (customer.length === 0) {
      getCustomers().then((response: { data: any }) => {
        const { data } = response.data
        setCustomer(data)
      })
    }
  }, [customer])

  const handleSelectCustomer = (customer: CustomerList): void => {
    setCustomerSelected(customer)
  }

  const handleUpdateCustomer = (): void => {
    if (customerSelected.id != null) {
      setContentModal({
        title: 'Modificar Cliente',
        content: <FormUpdateCustomer customer={customerSelected} refreshCustomer={setCustomer}/>
      })
      setOpen(true)
    } else {
      Swal.fire({
        icon: 'warning',
        text: 'Seleccione un cliente',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  return (
    <div className="flex pt-2">
      <div className="mx-4 pr-4  border-rose-300/30  border-r flex flex-col">
        <CreateCustomers refreshCustomer={setCustomer}/>
        <button
          type="button"
          onClick={handleUpdateCustomer}
          className='bg-rose-300/70 text-white mt-2 rounded-lg py-1 hover:bg-rose-500/70'
        >Modificar</button>
      </div>
      <div className="w-full overflow-auto h-[calc(100vh-5rem)] ">
        <table className="min-w-full divide-y mb-10">
          <thead>
            <th>-</th>
            <th>Nombre</th>
            <th>Telefono</th>
          </thead>
          <tbody className="divide-y  divide-gray-100 ">
            {customer.map((customer: CustomerList) => (
              <tr key={customer.id} className='text-center hover:bg-rose-200/40'>
                <td>
                  {<input
                    id={`${customer.id}-description`}
                    aria-describedby={`${customer.id}-customer`}
                    name="customers"
                    type="radio"
                    onChange={() => { handleSelectCustomer(customer) }}
                    className="h-4 w-4 border-gray-300 text-rose-400/50 focus:ring-rose-400/50"
                  />}
                </td>
                <td>{customer.name}</td>
                <td>{customer.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal open={open} setOpen={setOpen} title={contentModal.title}>
        {contentModal.content }
      </Modal>
    </div>
  )
}
