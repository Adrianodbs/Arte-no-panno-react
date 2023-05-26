import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Saira', sans-serif;
  }

  

  *, button, input{
    border: 0;
    outline: 0;
  }
  button{
    cursor: pointer;
  }

  :root{
    --gray: #DEDEDE;
    --dark-gray: #41414D;
    --light-gray: #737380;
    --black: #09090A;
    --orange:#FFA585;
    --orange-low:#FFA585;
    --red: #DE3838;
  }
`
