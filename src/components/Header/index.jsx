import Toggle from './components/Toggle'
import * as C from './styles'
import { BsSearch, BsCartDash, BsFillCartFill } from 'react-icons/bs'
import logo from '../../../public/assets/logo.png'

function Header() {
  return (
    <C.Container>
      <Toggle />
      <img className="logo" src={logo} alt="Logo" />
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
