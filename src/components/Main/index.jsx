import * as C from './styles'
import { Lista } from '../../lista-de-produtos/lista'
import Produto from './components/Produto'

import { useState } from 'react'
import ComoComprar from '../como-comprar'

function Main() {
  const [produto, setProduto] = useState('todos')

  return (
    <C.Container>
      <ComoComprar />
      <C.Header>
        <h1>Categorias</h1>
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
            <Produto img={item.imagem} titulo={item.nome} valor={item.valor} />
          ))}
        {produto === 'chaveiro' &&
          Lista.map(item => {
            if (item.tipo === 'chaveiro') {
              return (
                <Produto
                  img={item.imagem}
                  titulo={item.nome}
                  valor={item.valor}
                />
              )
            }
          })}
        {produto === 't-shirt' &&
          Lista.map(item => {
            if (item.tipo === 't-shirt') {
              return (
                <Produto
                  img={item.imagem}
                  titulo={item.nome}
                  valor={item.valor}
                />
              )
            }
          })}
        {produto === 'mural' &&
          Lista.map(item => {
            if (item.tipo === 'mural') {
              return (
                <Produto
                  img={item.imagem}
                  titulo={item.nome}
                  valor={item.valor}
                />
              )
            }
          })}
      </C.Produtos>
    </C.Container>
  )
}

export default Main
