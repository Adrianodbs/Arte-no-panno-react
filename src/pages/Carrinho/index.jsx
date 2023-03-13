import Produto from '../../components/Main/components/Produto'

import * as C from './styles'

import { useContext } from 'react'
import { CarrinhoContext } from '../../contexts/carrinho'

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

function Carrinho() {
  const { buscarItemNoCarrinho } = useContext(CarrinhoContext)

  const itens = buscarItemNoCarrinho()

  return (
    <C.Container>
      <C.Itens>
        {itens.map((item, index) => (
          <Produto
            key={index}
            img={item.imagem}
            titulo={item.nome}
            valor={item.valor}
            menos={<AiOutlineMinusCircle />}
            buttonTxt="1"
            mais={<AiOutlinePlusCircle />}
          />
        ))}
      </C.Itens>
      <C.Resumo>
        <h1>Resumo</h1>
      </C.Resumo>
    </C.Container>
  )
}

export default Carrinho
