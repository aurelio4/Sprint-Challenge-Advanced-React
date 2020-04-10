import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, _setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    const value = item ? JSON.parse(item) : initialValue
    return value
  })

  const setStoredValue = (value) => {
    _setStoredValue(value)
    window.localStorage.setItem(key, value)
  }

  return [storedValue, setStoredValue]
}