import Header from './components/Header'
import { Global } from './styles/GlobalStyle'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './components/Main'
import Carrinho from './pages/Carrinho'
import { CarrinhoProvider } from './contexts/carrinho'

function App() {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <Global />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>
    </CarrinhoProvider>
  )
}

export default App
