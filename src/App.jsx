import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Global } from './styles/GlobalStyle'

import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Main from './components/Main'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header />
      <Main />
    </ThemeProvider>
  )
}

export default App
