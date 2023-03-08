import * as C from './styles'
import { Lista } from '../../lista-de-produtos/lista'
import Produto from './components/Produto'

function Main() {
  return (
    <C.Container>
      <C.Header>
        <h1>Categorias</h1>
        <div>
          <ul>
            <li>Todos os itens</li>
            <li>Chaveiros</li>
            <li>T-shirts</li>
            <li>Murais</li>
          </ul>
        </div>
      </C.Header>
      <C.Produtos>
        {Lista.map((produto, index) => (
          <Produto
            key={index}
            img={produto.imagem}
            titulo={produto.nome}
            valor={produto.valor}
          />
        ))}
      </C.Produtos>
    </C.Container>
  )
}

export default Main
