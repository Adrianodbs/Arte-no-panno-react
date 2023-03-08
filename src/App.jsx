import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Global } from './styles/GlobalStyle'
import { dark, light } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Global />
      <Header />
      <h1>Arte no panno</h1>
    </ThemeProvider>
  )
}

export default App
