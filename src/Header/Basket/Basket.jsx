import basketPNG from '../../assets/basketPNG.png'
import styleBasket from './Basket.module.css'

const Basket = ()=>{
    return(
        <div className={styleBasket.imgBasketContainer}>
            <img className={styleBasket.imgBasket} src={basketPNG} alt="" />
        </div>
    )
}

export default Basket
