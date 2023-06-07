import styleNavigation from './Navigation.module.css'

const Navigation =()=>{
    return(
        <div className={styleNavigation.navigationContainer} >
            <div className={styleNavigation.linkNavigationContainer}>
                <a className={styleNavigation.linksNavigation} href="#">Гаджеты и аксессуары</a>
            </div>    
            <div className={styleNavigation.middleLinkNavigationContainer}> 
                <a className={styleNavigation.linksNavigation} href="#">Бытовая техника</a>
            </div>  
            <div className={styleNavigation.linkNavigationContainer}>   
                <a className={styleNavigation.linksNavigation} href="#">Прочее</a>
            </div>
        </div>
    )
}

export default Navigation