import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = (defaultValue = false) => {
  const [darkMode, setDarkMode] = useLocalStorage('isDarkMode', defaultValue)

  useEffect(() => {
    darkMode
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode')
  }, [darkMode])

  return [darkMode, setDarkMode]
}