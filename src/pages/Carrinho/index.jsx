import Produto from '../../components/Main/components/Produto'

import * as C from './styles'

import { useContext, useState, useEffect } from 'react'
import { CarrinhoContext } from '../../contexts/carrinho'
import { BsFillTrash3Fill } from 'react-icons/bs'

function Carrinho() {
  const [itens, setItens] = useState([])
  const [valorTotal, setValorTotal] = useState(0)

  const { buscarItemNoCarrinho, excluirProdutoDoCarrinho } =
    useContext(CarrinhoContext)

  useEffect(() => {
    const carrinhoItens = buscarItemNoCarrinho()
    setItens(carrinhoItens)

    const total = carrinhoItens.reduce((acc, item) => acc + item.valor, 0)
    setValorTotal(total)
  }, [buscarItemNoCarrinho])

  const handleExcluirProduto = produto => {
    excluirProdutoDoCarrinho(produto)
  }

  return (
    <C.Container>
      <C.Itens>
        {itens.map((item, index) => (
          <div key={index}>
            <Produto img={item.imagem} titulo={item.nome} valor={item.valor} />
            <div className="actions">
              <button onClick={() => handleExcluirProduto(item)}>
                <BsFillTrash3Fill size={20} color="#fff" />
              </button>
            </div>
          </div>
        ))}
      </C.Itens>
      <C.Resumo>
        <h1>Resumo</h1>
        <div>
          <p>Quantidade de itens: {itens.length}</p>
          <p>Valor: R${valorTotal} </p>
        </div>
        <button>Finalizar compra</button>
      </C.Resumo>
    </C.Container>
  )
}

export default Carrinho
