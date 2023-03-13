import { createContext, useState } from 'react'

import { dark, light } from '../styles/theme'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(true)

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  const theme = () => {
    if (isChecked) {
      return light
    } else {
      return dark
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, handleCheck }}>
      {children}
    </ThemeContext.Provider>
  )
}
