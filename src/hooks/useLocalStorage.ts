import { useState } from 'react'

interface Props {
  itemName: string
  initialValue?: any
}

export const useLocalStorage = ({ itemName, initialValue = {} }: Props): any => {
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem
  if (localStorageItem != null) {
    parsedItem = JSON.parse(localStorageItem)
  } else {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  }

  const [item, setItem] = useState(parsedItem)

  const deleteItem = (): void => {
    localStorage.removeItem(itemName)
    setItem('')
  }

  const saveItem = (item: any): void => {
    localStorage.setItem(itemName, JSON.stringify(item))
    setItem(item)
  }
  return { item, saveItem, deleteItem }
}
