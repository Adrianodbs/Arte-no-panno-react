import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Global } from './styles/GlobalStyle'

import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header />
    </ThemeProvider>
  )
}

export default App
