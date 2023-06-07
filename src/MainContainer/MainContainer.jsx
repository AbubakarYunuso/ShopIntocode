import Navigation from "./navigation/Navigation"
import styleMainContainer from './MainContainer.module.css'
import carOne from '../assets/carOne.png'
import carTwo from '../assets/carTwo.png'
import carTree from '../assets/carTree.webp'
import carFour from '../assets/carFour.webp'
import carFife from '../assets/carFyfe.jpg'
import carSix from '../assets/carSix.jpg'
import Products from "./Products/Products"

const MainContainer=()=>{
    return(
        <div className={styleMainContainer.mainContainer}>
            <Navigation/>
            <div className={styleMainContainer.productContainer} >
                <Products image={carOne} name={'BMW'} price={3000000}/>
                <Products image={carTwo} name={'Audi'} price={3500000}/>
                <Products image={carTree} name={'Porche'} price={3060000}/>
                <Products image={carFour} name={'Mersedes'} price={4000000}/>
                <Products image={carFife} name={'Ford'} price={3600000}/>
                <Products image={carSix} name={'Tayota'} price={3070000}/>
            </div>
        </div>
    )
}

export default MainContainer 