import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  background-color: var(--gray);
  padding: 20px 40px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--light-gray);
  margin: 70px 0 50px;

  @media (max-width: 790px) {
    padding: 20px 10px;
  }

  @media (max-width: 615px) {
    justify-content: center;
    flex-direction: column;
  }

  ul {
    display: flex;
    gap: 20px;

    .active {
      border-bottom: 2px solid var(--orange);
      color: var(--dark-gray);
    }

    li {
      list-style: none;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      font-size: 20px;
      font-weight: 500;

      @media (max-width: 790px) {
        font-size: 14px;
        width: 100px;
        padding: 5px 0;
      }
    }
  }
`

export const Produtos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;

  a {
    text-decoration: none;
  }
`
