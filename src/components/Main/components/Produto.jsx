import styled from 'styled-components'

function Produto({ img, titulo, valor }) {
  return (
    <Container>
      <img src={img} alt={titulo} />
      <p>{titulo}</p>
      <span>{valor}</span>
    </Container>
  )
}

const Container = styled.div`
  width: 200px;
  height: 300px;
  background-color: ${({ theme }) => theme.terciario};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.cinza};

  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
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
`

export default Produto
