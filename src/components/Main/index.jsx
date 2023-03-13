import * as C from './styles'
import { Lista } from '../../lista-de-produtos/lista'
import Produto from './components/Produto'

import { AiOutlineArrowDown } from 'react-icons/ai'

import { useState, useContext } from 'react'
import ComoComprar from '../como-comprar'
import { CarrinhoContext } from '../../contexts/carrinho'

function Main() {
  const [produto, setProduto] = useState('todos')

  const { adicionarProdutoAoCarrinho } = useContext(CarrinhoContext)

  return (
    <C.Container>
      <ComoComprar />
      <C.Header>
        <h1>
          Principais categorias <AiOutlineArrowDown className="menu" />
        </h1>

        <div>
          <ul>
            <li onClick={() => setProduto('todos')}>Todos os itens</li>
            <li onClick={() => setProduto('chaveiro')}>Chaveiros</li>
            <li onClick={() => setProduto('t-shirt')}>T-shirts</li>
            <li onClick={() => setProduto('mural')}>Murais</li>
          </ul>
        </div>
      </C.Header>
      <C.Produtos>
        {produto === 'todos' &&
          Lista.map(item => (
            <Produto
              key={item.nome}
              img={item.imagem}
              titulo={item.nome}
              valor={item.valor}
              buttonTxt="Adicionar ao carrinho"
              onClick={() => adicionarProdutoAoCarrinho(item)}
            />
          ))}
        {produto === 'chaveiro' &&
          Lista.map(item => {
            if (item.tipo === 'chaveiro') {
              return (
                <Produto
                  key={item.nome}
                  img={item.imagem}
                  titulo={item.nome}
                  valor={item.valor}
                  buttonTxt="Adicionar ao carrinho"
                  onClick={() => adicionarProdutoAoCarrinho(item)}
                />
              )
            }
          })}
        {produto === 't-shirt' &&
          Lista.map(item => {
            if (item.tipo === 't-shirt') {
              return (
                <Produto
                  key={item.nome}
                  img={item.imagem}
                  titulo={item.nome}
                  valor={item.valor}
                  buttonTxt="Adicionar ao carrinho"
                  onClick={() => adicionarProdutoAoCarrinho(item)}
                />
              )
            }
          })}
        {produto === 'mural' &&
          Lista.map(item => {
            if (item.tipo === 'mural') {
              return (
                <Produto
                  key={item.nome}
                  img={item.imagem}
                  titulo={item.nome}
                  valor={item.valor}
                  buttonTxt="Adicionar ao carrinho"
                  onClick={() => adicionarProdutoAoCarrinho(item)}
                />
              )
            }
          })}
      </C.Produtos>
    </C.Container>
  )
}

export default Main
