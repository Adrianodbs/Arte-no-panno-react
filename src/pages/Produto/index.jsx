import { useParams, useNavigate } from 'react-router-dom'
import { Lista } from '../../lista-de-produtos/lista'
import styled from 'styled-components'
import { useContext } from 'react'
import { CarrinhoContext } from '../../contexts/carrinho'

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 60px;

  .info {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 50%;
      max-height: 100%;
      object-fit: contain;

      @media (max-width: 768px) {
        width: 90%;
      }
    }

    .infoText {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    button {
      height: 32px;
      padding: 5px 16px;
      border: none;
      border-radius: 4px;
      background-color: var(--orange);
      color: var(--black);
      font-weight: 500;
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
        <div className="infoText">
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
