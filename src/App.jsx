import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Global } from './styles/GlobalStyle'
import { dark, light } from './styles/theme'

import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'

function App() {
  const { isChecked } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={isChecked ? light : dark}>
      <Global />
      <Header />
      <h1>Arte no panno</h1>
    </ThemeProvider>
  )
}

export default App
