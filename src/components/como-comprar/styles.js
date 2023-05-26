import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .slide-container {
    max-width: 330px;
    width: 90%;
    max-height: 400px;
    user-select: none;

    img {
      width: 100%;
      height: 100%;
    }

    .swiper-button-prev,
    .swiper-button-next {
      --swiper-navigation-size: 30px;
    }
  }
`
