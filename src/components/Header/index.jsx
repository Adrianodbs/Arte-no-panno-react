import Toggle from './components/Toggle'
import * as C from './styles'
import { BsSearch, BsCartDash, BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <C.Container>
      <Toggle />
      <h1>Arte no Panno</h1>
      <C.Right>
        <Link to="/">Home</Link>
        <Link to="/carrinho">
          <BsCartDash size={20} className="cart" />
        </Link>
      </C.Right>
    </C.Container>
  )
}

export default Header
