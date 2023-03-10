import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .slide-container {
    max-width: 600px;
    max-height: 400px;
    user-select: none;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`
