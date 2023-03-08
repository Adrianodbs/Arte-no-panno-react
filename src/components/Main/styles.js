import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.secundario};
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.branco};
  padding: 40px;

  ul {
    display: flex;
    gap: 15px;
    margin-top: 20px;

    li {
      list-style: none;
      width: 150px;
      border: 1px solid ${({ theme }) => theme.cinza};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 7px 4px;
      border-radius: 8px;
      cursor: pointer;
      background-color: ${({ theme }) => theme.terciario};
      transition: all 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.branco};
        color: ${({ theme }) => theme.terciario};
      }
    }
  }
`

export const Produtos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 40px 60px;
`
