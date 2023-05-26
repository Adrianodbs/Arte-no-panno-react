import { createContext, useState, useEffect } from 'react'

export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({ children }) => {
  const [produtoAdicionado, setProdutoAdicionado] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('@produto-carrinho', JSON.stringify(produtoAdicionado))
  }, [produtoAdicionado])

  function handleSearch() {
    setSearch(search)
  }

  function adicionarProdutoAoCarrinho(item) {
    setProdutoAdicionado(prev => [...prev, item])
    localStorage.setItem('@produto-carrinho', JSON.stringify(produtoAdicionado))
  }

  function excluirProdutoDoCarrinho(item) {
    setProdutoAdicionado(prev => {
      const updatedList = prev.filter(produto => produto.id !== item.id)
      localStorage.setItem('@produto-carrinho', JSON.stringify(updatedList))
      return updatedList
    })
  }

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
        excluirProdutoDoCarrinho,
        buscarItemNoCarrinho,
        search,
        setSearch,
        handleSearch
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}
