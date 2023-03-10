import styled from 'styled-components'

export const Container = styled.header`
  color: ${({ theme }) => theme.branco};
  background-color: ${({ theme }) => theme.primario};
  width: 100%;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;

  .logo {
    border-radius: 50%;
    object-fit: cover;
    width: 90px;
    margin-top: -20px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 350px) {
      display: none;
    }
  }
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

    @media (max-width: 670px) {
      display: none;
    }
  }

  .lupa {
    position: absolute;
    top: 20%;
    left: 6px;

    @media (max-width: 670px) {
      display: none;
    }
  }

  .cart {
    cursor: pointer;
  }
`
