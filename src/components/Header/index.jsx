import Toggle from './components/Toggle'
import * as C from './styles'
import { BsSearch, BsCartDash, BsFillCartFill } from 'react-icons/bs'

function Header() {
  return (
    <C.Container>
      <Toggle />
      <h1>Arte no Panno</h1>
      <C.Right>
        <div>
          <BsSearch className="lupa" size={20} />
          <input type="text" placeholder="Search" />
        </div>
        <BsCartDash size={20} className="cart" />
      </C.Right>
    </C.Container>
  )
}

export default Header
