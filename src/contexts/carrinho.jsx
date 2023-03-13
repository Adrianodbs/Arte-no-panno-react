import { createContext, useState } from 'react'

export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({ children }) => {
  const [produtoAdicionado, setProdutoAdicionado] = useState([])

  function adicionarProdutoAoCarrinho(item) {
    localStorage.setItem('@produto-carrinho', JSON.stringify(produtoAdicionado))
  }

  adicionarProdutoAoCarrinho()

  function buscarItemNoCarrinho() {
    const itemAdicionado = localStorage.getItem('@produto-carrinho')

    return JSON.parse(itemAdicionado)
  }
  return (
    <CarrinhoContext.Provider
      value={{
        produtoAdicionado,
        setProdutoAdicionado,
        adicionarProdutoAoCarrinho,
        buscarItemNoCarrinho
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}
