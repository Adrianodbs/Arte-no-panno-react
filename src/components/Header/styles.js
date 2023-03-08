import styled from 'styled-components'

export const Container = styled.header`
  color: ${({ theme }) => theme.branco};
  background-color: ${({ theme }) => theme.primario};
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`

export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  position: relative;

  input {
    width: 100%;
    height: 40px;
    padding: 15px;
    padding-left: 30px;
    border-radius: 8px;
    color: ${({ theme }) => theme.branco};
    background-color: ${({ theme }) => theme.terciario};

    &::placeholder {
      color: ${({ theme }) => theme.branco};
    }
  }

  .lupa {
    position: absolute;
    top: 20%;
    left: 6px;
  }

  .cart {
    cursor: pointer;
  }
`
