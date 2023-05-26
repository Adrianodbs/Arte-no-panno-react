import styled from 'styled-components'

export const Container = styled.header`
  background-color: #fff;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;

  h1 {
    font-family: 'Saira Stencil One', cursive;
    font-size: 40px;
    font-weight: 400;
    color: var(--dark-gray);
  }
`

export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  svg {
    cursor: pointer;
    text-decoration: none;
    color: var(--dark-gray);
  }
`
