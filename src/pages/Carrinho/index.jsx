import { Produtos } from '../../components/Main/styles'

import Produto from '../../components/Main/components/Produto'

import { useContext, useEffect } from 'react'
import { CarrinhoContext } from '../../contexts/carrinho'

function Carrinho() {
  const { buscarItemNoCarrinho } = useContext(CarrinhoContext)

  const itens = buscarItemNoCarrinho()

  return (
    <>
      <button
        onClick={() => {
          console.log(itens)
        }}
      >
        Info
      </button>
      <p>{itens.nome}</p>
    </>
  )
}

export default Carrinho
