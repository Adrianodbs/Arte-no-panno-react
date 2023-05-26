import * as C from './styles'
import { Lista } from '../../lista-de-produtos/lista'
import Produto from './components/Produto'

import { useState, useContext } from 'react'
import ComoComprar from '../como-comprar'
import { Link } from 'react-router-dom'

function Main() {
  const [produto, setProduto] = useState('todos')

  return (
    <C.Container>
      <C.Header>
        <div>
          <ul>
            <li
              className={produto === 'todos' ? 'active' : ''}
              onClick={() => setProduto('todos')}
            >
              Todos os itens
            </li>
            <li
              className={produto === 'chaveiro' ? 'active' : ''}
              onClick={() => setProduto('chaveiro')}
            >
              Chaveiros
            </li>
            <li
              className={produto === 't-shirt' ? 'active' : ''}
              onClick={() => setProduto('t-shirt')}
            >
              T-shirts
            </li>
            <li
              className={produto === 'mural' ? 'active' : ''}
              onClick={() => setProduto('mural')}
            >
              Murais
            </li>
          </ul>
        </div>
      </C.Header>
      <C.Produtos>
        {produto === 'todos' &&
          Lista.map(item => (
            <Link to={`/produto/${item.id}`} key={item.nome}>
              <Produto
                img={item.imagem}
                titulo={item.nome}
                valor={item.valor}
              />
            </Link>
          ))}
        {produto === 'chaveiro' &&
          Lista.map(item => {
            if (item.tipo === 'chaveiro') {
              return (
                <Link to={`/produto/${item.id}`} key={item.nome}>
                  <Produto
                    img={item.imagem}
                    titulo={item.nome}
                    valor={item.valor}
                  />
                </Link>
              )
            }
          })}
        {produto === 't-shirt' &&
          Lista.map(item => {
            if (item.tipo === 't-shirt') {
              return (
                <Link to={`/produto/${item.id}`} key={item.nome}>
                  <Produto
                    img={item.imagem}
                    titulo={item.nome}
                    valor={item.valor}
                  />
                </Link>
              )
            }
          })}
        {produto === 'mural' &&
          Lista.map(item => {
            if (item.tipo === 'mural') {
              return (
                <Link to={`/produto/${item.id}`} key={item.nome}>
                  <Produto
                    img={item.imagem}
                    titulo={item.nome}
                    valor={item.valor}
                  />
                </Link>
              )
            }
          })}
      </C.Produtos>
      <ComoComprar />
    </C.Container>
  )
}

export default Main
