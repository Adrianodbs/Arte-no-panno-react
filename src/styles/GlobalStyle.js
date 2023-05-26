import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  

  *, button, input{
    border: 0;
    outline: 0;
  }
  button{
    cursor: pointer;
  }

  :root{
    --cor-teste: #f5f2f3
  }
`
