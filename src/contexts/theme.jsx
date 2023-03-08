import { createContext, useState } from 'react'

import { dark, light } from '../styles/theme'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(true)

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  return (
    <ThemeContext.Provider value={{ isChecked, handleCheck }}>
      {children}
    </ThemeContext.Provider>
  )
}
