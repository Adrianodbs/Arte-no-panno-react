import styled from 'styled-components'

function Produto({ img, titulo, valor }) {
  return (
    <Container>
      <img src={img} alt={titulo} />
      <div className="info">
        <p>{titulo}</p>
        <span>{valor}</span>
        <button>Adicionar ao carrinho</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 250px;
  height: 320px;
  background-color: ${({ theme }) => theme.terciario};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.cinza};

  img {
    width: 100%;
    max-height: 60%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    justify-content: flex-end;
    margin-top: 10px;
  }

  p {
    font-weight: 500;
    color: ${({ theme }) => theme.branco};
    padding: 6px;
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.cinza};
  }

  button {
    background-color: ${({ theme }) => theme.info};
    padding: 8px;
    border-radius: 6px;
    color: ${({ theme }) => theme.branco};
    margin-top: 10px;
  }
`

export default Produto
