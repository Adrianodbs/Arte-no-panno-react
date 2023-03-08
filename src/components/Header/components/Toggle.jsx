import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../../contexts/theme'

function Toggle() {
  const { handleCheck } = useContext(ThemeContext)
  return (
    <div>
      <label></label>

      <ToggleSwitch onClick={handleCheck}>
        <input type="checkbox" />
        <span />
      </ToggleSwitch>
    </div>
  )
}

const ToggleSwitch = styled.label`
  width: 4rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.terciario};
  position: relative;
  transition: 0.5s;

  input {
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  span {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.info};
    position: absolute;
    left: 0;
    cursor: pointer;
  }

  input:checked + span {
    left: 50%;
    background: ${({ theme }) => theme.perigo};
  }
`

export default Toggle
