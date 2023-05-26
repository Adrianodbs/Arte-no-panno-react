import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 5fr 2fr;

  padding: 20px 40px;
`

export const Itens = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .actions {
    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 4px;
      background-color: var(--orange);
      color: var(--black);
      margin-top: 10px;
    }

    .quantidade {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      svg {
        color: #fff;
      }

      span {
        padding: 5px;
      }
    }
  }
`

export const Resumo = styled.div``
