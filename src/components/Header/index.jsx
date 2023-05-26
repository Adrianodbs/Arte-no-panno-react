import * as C from './styles'
import { BsCartDash } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <C.Container>
      <h1>Arte no Panno</h1>
      <C.Right>
        <label>
          <C.Input placeholder="Faça a sua pesquisa..." />
          <BiSearch size={20} />
        </label>

        <div className="links">
          <Link to="/">
            <AiOutlineHome size={25} />
          </Link>
          <Link to="/carrinho">
            <BsCartDash size={25} className="cart" />
          </Link>
        </div>
      </C.Right>
    </C.Container>
  )
}

export default Header
