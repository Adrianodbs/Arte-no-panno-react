import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .slide-container {
    max-width: 500px;
    width: 90%;
    max-height: 600px;
    user-select: none;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`
