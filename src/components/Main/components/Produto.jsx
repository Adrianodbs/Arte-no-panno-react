import styled from 'styled-components'

function Produto({ img, titulo, valor }) {
  return (
    <Container>
      <img src={img} alt={titulo} />
      <div className="info">
        <p>{titulo}</p>
        <span>R$ {valor}</span>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid #bfbfbf;

  img {
    width: 250px;
    height: 280px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 100px;
    justify-content: flex-end;
    margin-top: 10px;
  }

  p {
    font-weight: 500;
    color: var(--dark-gray);
    padding: 6px;
    text-align: center;
  }

  span {
    color: var(--black);
    font-weight: 700;
  }
`

export default Produto
