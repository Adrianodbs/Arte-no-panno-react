import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  background-color: #252a48;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;
  padding: 40px;
  background-color: #1b1f38;

  @media (max-width: 790px) {
    padding: 20px 10px;
  }

  @media (max-width: 615px) {
    justify-content: center;
    flex-direction: column;
  }

  .menu {
    display: none;

    @media (max-width: 615px) {
      display: block;
    }
  }

  h1 {
    font-size: 20px;

    @media (max-width: 790px) {
      font-size: 16px;
    }

    @media (max-width: 615px) {
      display: flex;
      gap: 10px;
    }
  }

  ul {
    display: flex;
    gap: 10px;

    @media (max-width: 615px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 8px;
    }

    li {
      list-style: none;
      width: 120px;
      border: 1px solid #bfbfbf;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 7px 4px;
      border-radius: 8px;
      cursor: pointer;
      background-color: #313862;
      transition: all 0.3s;

      &:hover {
        background-color: #fff;
        color: #313862;
      }

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
  padding: 40px 60px;
`
