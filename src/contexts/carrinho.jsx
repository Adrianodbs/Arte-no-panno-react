import { createContext, useState, useEffect } from 'react'

export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({ children }) => {
  const storedProdutos = localStorage.getItem('@produto-carrinho')
  const [produtoAdicionado, setProdutoAdicionado] = useState(
    storedProdutos ? JSON.parse(storedProdutos) : []
  )
  const [search, setSearch] = useState('')
  const [quantidades, setQuantidades] = useState({})

  useEffect(() => {
    localStorage.getItem('@produto-carrinho')
  }, [produtoAdicionado])

  function handleSearch() {
    setSearch(search)
  }

  function adicionarProdutoAoCarrinho(item) {
    setProdutoAdicionado(prev => {
      const updatedList = [...prev, item]
      localStorage.setItem('@produto-carrinho', JSON.stringify(updatedList))
      return updatedList
    })
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
        handleSearch,
        quantidades,
        setQuantidades
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}
