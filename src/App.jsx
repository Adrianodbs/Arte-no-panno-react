import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Global } from './styles/GlobalStyle'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'

import Main from './components/Main'
import Carrinho from './pages/Carrinho'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Global />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
