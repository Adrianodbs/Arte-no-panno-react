import { useParams, useNavigate } from 'react-router-dom'
import { Lista } from '../../lista-de-produtos/lista'
import styled from 'styled-components'
import { useContext } from 'react'
import { CarrinhoContext } from '../../contexts/carrinho'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 60px;

  .info {
    display: flex;
    width: 100%;
    gap: 20px;

    img {
      max-width: 500px;
      max-height: 500px;
    }
  }
`

function ProdutoDetalhe() {
  const { id } = useParams()
  const { adicionarProdutoAoCarrinho } = useContext(CarrinhoContext)
  const navigate = useNavigate()

  const produto = Lista.find(item => item.id === parseInt(id))

  if (!produto) {
    return <h1>Produto não encontrado</h1>
  }

  function handleAdicionarAoCarrinho() {
    adicionarProdutoAoCarrinho(produto)
    navigate('/')
  }

  return (
    <Container>
      <div className="info">
        <img src={produto.imagem} alt={produto.nome} />
        <div>
          <h1>{produto.nome}</h1>

          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At eos
            saepe nam reprehenderit quos quasi, et, laborum nisi minima sequi
            voluptatibus impedit. Soluta ipsum, quos rem facilis totam ut
            corporis.
          </span>

          <p>Valor: {produto.valor}</p>
          <button onClick={handleAdicionarAoCarrinho}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </Container>
  )
}

export default ProdutoDetalhe
