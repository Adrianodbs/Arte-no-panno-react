import styled from 'styled-components'

export const Container = styled.header`
  background-color: #fff;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;

  @media (max-width: 500px) {
    padding: 10px;
  }

  h1 {
    font-family: 'Saira Stencil One', cursive;
    font-size: 40px;
    font-weight: 400;
    color: var(--dark-gray);

    @media (max-width: 768px) {
      font-size: 36px;
    }

    @media (max-width: 350px) {
      font-size: 26px;
    }
  }
`

export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    gap: 5px;
  }

  svg {
    cursor: pointer;
    text-decoration: none;
    color: var(--dark-gray);
  }

  label {
    position: relative;
    width: 260px;

    @media (max-width: 768px) {
      width: 200px;
    }

    @media (max-width: 500px) {
      display: none;
    }

    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 6px;
    }
  }

  .links {
    display: flex;
    gap: 15px;
    position: relative;

    .cartLength {
      width: 18px;
      height: 18px;
      background-color: var(--red);
      color: #fff;
      font-size: 12px;
      position: absolute;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      right: -8px;
      bottom: 2px;
    }
  }
`

export const Input = styled.input`
  height: 32px;
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: var(--gray);
  color: var(--dark-gray);
  padding-left: 10px;
`
