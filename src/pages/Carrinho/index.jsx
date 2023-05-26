import Produto from '../../components/Main/components/Produto'

import * as C from './styles'

import { useContext, useState, useEffect } from 'react'
import { CarrinhoContext } from '../../contexts/carrinho'

function Carrinho() {
  const [itens, setItens] = useState([])

  const { buscarItemNoCarrinho, excluirProdutoDoCarrinho } =
    useContext(CarrinhoContext)

  const handleExcluirProduto = produto => {
    excluirProdutoDoCarrinho(produto)
  }

  useEffect(() => {
    const carrinhoItens = buscarItemNoCarrinho()
    setItens(carrinhoItens)
  }, [buscarItemNoCarrinho])

  return (
    <C.Container>
      <C.Itens>
        {itens.map((item, index) => (
          <div key={index}>
            <Produto img={item.imagem} titulo={item.nome} valor={item.valor} />
            <button onClick={() => handleExcluirProduto(item)}>Excluir</button>
          </div>
        ))}
      </C.Itens>
      <C.Resumo>
        <h1>Resumo</h1>
      </C.Resumo>
    </C.Container>
  )
}

export default Carrinho
