import styled from 'styled-components'

function Produto({ img, titulo, valor, buttonTxt, onClick, menos, mais }) {
  return (
    <Container>
      <img src={img} alt={titulo} />
      <div className="info">
        <p>{titulo}</p>
        <span>{valor}</span>

        <button onClick={onClick} style={{ color: '#fff' }}>
          {menos}
          {buttonTxt}
          {mais}
        </button>
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
    background-color: ${({ theme }) => theme.perigo};
    font-weight: bold;
    font-size: 18px;
    padding: 8px;
    border-radius: 6px;
    margin-top: 10px;

    display: flex;
    justify-content: space-between;
    gap: 6px;
    align-items: center;

    svg {
      font-size: 23px;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`

export default Produto
