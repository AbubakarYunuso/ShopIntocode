import Basket from "./Basket/Basket"
import Logo from "./Logo/Logo"
import styleHeader from './Header.module.css'

const Header =()=>{
    return(
        <div className={styleHeader.headerContainer}>
            <Logo/>
            <Basket/>
        </div>
    )
}

export default Header