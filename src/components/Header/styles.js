import styled from 'styled-components'

export const Container = styled.header`
  color: #fff;
  background-color: var(--cor-teste);
  width: 100%;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;

  h1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Sacramento', cursive;
    font-size: 40px;
    font-weight: 400;
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
    color: #fff;
  }
`
